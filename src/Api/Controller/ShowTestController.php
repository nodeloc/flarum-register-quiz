<?php

namespace Xypp\RegisterQuiz\Api\Controller;

use Carbon\Carbon;
use Flarum\Api\Controller\AbstractCreateController;
use Flarum\Api\Controller\AbstractShowController;
use Flarum\Http\RequestUtil;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\Exception\PermissionDeniedException;
use Illuminate\Support\Arr;
use Xypp\RegisterQuiz\Api\Serializer\TestSerializer;
use Xypp\RegisterQuiz\Problem;
use Xypp\RegisterQuiz\Test;
use Psr\Http\Message\ServerRequestInterface;

class ShowTestController extends AbstractShowController
{
    public $serializer = TestSerializer::class;
    public $include = ['problems'];
    protected $settings;
    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }
    public function data(ServerRequestInterface $request, $document)
    {
        $actor = RequestUtil::getActor($request);

        return Test::where('user_id', $actor->id)
            ->where('expired_at', '>', Carbon::now())
            ->where('submitted', "!=", 1)
            ->firstOrFail();
    }
}