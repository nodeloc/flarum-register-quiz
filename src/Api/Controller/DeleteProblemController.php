<?php

namespace Xypp\RegisterQuiz\Api\Controller;

use Flarum\Api\Controller\AbstractDeleteController;
use Flarum\Http\RequestUtil;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Support\Arr;
use Xypp\RegisterQuiz\Api\Serializer\ProblemSerializer;
use Xypp\RegisterQuiz\Problem;
use Psr\Http\Message\ServerRequestInterface;

class DeleteProblemController extends AbstractDeleteController
{
    public $serializer = ProblemSerializer::class;
    protected $settings;
    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }
    public function delete(ServerRequestInterface $request)
    {
        $actor = RequestUtil::getActor($request);
        $actor->assertAdmin();
        $model = Problem::findOrFail(Arr::get($request->getQueryParams(), 'id'));
        $model->delete();
    }
}