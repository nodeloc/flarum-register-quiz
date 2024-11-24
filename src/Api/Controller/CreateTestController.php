<?php

namespace Xypp\RegisterQuiz\Api\Controller;

use Carbon\Carbon;
use Flarum\Api\Controller\AbstractCreateController;
use Flarum\Group\Group;
use Flarum\Http\RequestUtil;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\Exception\PermissionDeniedException;
use Xypp\RegisterQuiz\Api\Serializer\TestSerializer;
use Xypp\RegisterQuiz\Problem;
use Xypp\RegisterQuiz\Test;
use Psr\Http\Message\ServerRequestInterface;

class CreateTestController extends AbstractCreateController
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

        $model = new Test();
        $model->user()->associate($actor);
        $problems_count = $this->settings->get('xypp-register-quiz.problem_count');
        $problems = Problem::query()->inRandomOrder()->limit($problems_count)->get();
        $model->problem = $problems->pluck('id')->toArray();
        $model->saved = array_fill(0, $problems_count, null);
        $model->expired_at = Carbon::now()->addMinutes(intval($this->settings->get('xypp-register-quiz.test_time') ?? 40));
        $model->updateTimestamps();
        $model->save();
        return $model;
    }
}