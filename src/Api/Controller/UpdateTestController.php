<?php

namespace Xypp\RegisterQuiz\Api\Controller;

use Carbon\Carbon;
use Flarum\Api\Controller\AbstractCreateController;
use Flarum\Api\Controller\AbstractShowController;
use Flarum\Group\Group;
use Flarum\Http\RequestUtil;
use Flarum\Suspend\Event\Unsuspended;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\Event\GroupsChanged;
use Flarum\User\Exception\PermissionDeniedException;
use Illuminate\Events\Dispatcher;
use Illuminate\Support\Arr;
use Xypp\RegisterQuiz\Api\Serializer\TestSerializer;
use Xypp\RegisterQuiz\Problem;
use Xypp\RegisterQuiz\Test;
use Psr\Http\Message\ServerRequestInterface;
use Xypp\RegisterQuiz\Util\JudgeUtil;

class UpdateTestController extends AbstractShowController
{
    public $serializer = TestSerializer::class;
    protected $settings;
    protected $events;
    public function __construct(SettingsRepositoryInterface $settings,Dispatcher $events)
    {
        $this->settings = $settings;
        $this->events = $events;
    }
    public function data(ServerRequestInterface $request, $document)
    {
        $actor = RequestUtil::getActor($request);

        $test = Test::where('user_id', $actor->id)
            ->where('expired_at', '>', Carbon::now())
            ->where('submitted', "!=", 1)
            ->first();
        if (!$test) {
            $test = Test::where('user_id', $actor->id)
                ->where('expired_at', '>', Carbon::now()->subMinutes(30))
                ->where('submitted', "!=", 1)
                ->first();
            $submit = true;
        }

        if ($saved = Arr::get($request->getParsedBody(), 'data.attributes.saved')) {
            $test->saved = $saved;
        }

        if ($submit || Arr::get($request->getParsedBody(), 'data.attributes.submit')) {
            $test->score = JudgeUtil::judge($test);
            $test->submitted = true;

            // 获取分数要求
            $requiredScore = $this->settings->get('xypp-register-quiz.require') ?? 35;

            if ($test->score >= $requiredScore) {
                // 解除用户 suspend 状态
                if ($actor->suspended_until) {
                    $actor->suspended_until = null;
                    $actor->save();

                    // 触发解除 suspend 相关事件（如有需要）
                    $this->events->dispatch(new Unsuspended($actor, $actor));                }
            }

        }

        $test->updateTimestamps();
        $test->save();

        return $test;
    }
}
