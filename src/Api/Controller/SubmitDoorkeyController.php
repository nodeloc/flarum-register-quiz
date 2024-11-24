<?php


namespace Xypp\RegisterQuiz\Api\Controller;

use Carbon\Carbon;
use Flarum\Extension\ExtensionManager;
use Flarum\Group\Group;
use Flarum\Http\RequestUtil;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\Event\GroupsChanged;
use Flarum\User\Exception\PermissionDeniedException;
use FoF\Doorman\Doorkey;
use Illuminate\Events\Dispatcher;
use Illuminate\Support\Arr;
use Laminas\Diactoros\Response\JsonResponse;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Xypp\RegisterQuiz\Test;

class SubmitDoorkeyController implements RequestHandlerInterface
{
    protected $settings;
    protected $extensionManager;
    protected $events;
    public function __construct(SettingsRepositoryInterface $settings, ExtensionManager $extensionManager, Dispatcher $events)
    {
        $this->settings = $settings;
        $this->extensionManager = $extensionManager;
        $this->events = $events;
    }
    function handle(ServerRequestInterface $request): \Psr\Http\Message\ResponseInterface
    {
        if (!$this->extensionManager->isEnabled('fof-doorman')) {
            throw new PermissionDeniedException();
        }

        $group = Group::findOrFail($this->settings->get('xypp-register-quiz.group_id') ?? 0);

        $actor = RequestUtil::getActor($request);

        if ($actor->groups()->where('id', $group->id)->exists()) {
            throw new PermissionDeniedException();
        }

        if (
            Test::where('user_id', $actor->id)
                ->where('expired_at', '>', Carbon::now())
                ->where('submitted', "!=", 1)
                ->exists()
        )
            throw new PermissionDeniedException();

        $doorkeyContent = Arr::get($request->getParsedBody(), 'doorkey');

        $doorkey = Doorkey::where("key", $doorkeyContent)->firstOrFail();

        if (!($doorkey->max_uses === 0 || $doorkey->uses < $doorkey->max_uses)) {
            throw new PermissionDeniedException();
        }

        if ($group->id !== Group::MEMBER_ID) {
            $oldGroups = $actor->groups()->get()->all();
            $actor->groups()->attach($group->id);
            $this->events->dispatch(new GroupsChanged($actor, $oldGroups));
        }

        $doorkey->increment('uses');
        return new JsonResponse(['success' => 1]);
    }
}