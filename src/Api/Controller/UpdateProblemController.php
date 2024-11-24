<?php

namespace Xypp\RegisterQuiz\Api\Controller;

use Carbon\Carbon;
use Flarum\Api\Controller\AbstractCreateController;
use Flarum\Http\RequestUtil;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\Exception\PermissionDeniedException;
use Illuminate\Support\Arr;
use Xypp\RegisterQuiz\Api\Serializer\ProblemSerializer;
use Xypp\RegisterQuiz\Api\Serializer\TestSerializer;
use Xypp\RegisterQuiz\Problem;
use Xypp\RegisterQuiz\Test;
use Psr\Http\Message\ServerRequestInterface;

class UpdateProblemController extends AbstractCreateController
{
    public $serializer = ProblemSerializer::class;
    protected $settings;
    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }
    public function data(ServerRequestInterface $request, $document)
    {
        $actor = RequestUtil::getActor($request);
        $actor->assertAdmin();

        $data = Arr::get($request->getParsedBody(), 'data.attributes', []);

        $model = Problem::findOrFail(Arr::get($request->getQueryParams(), 'id'));

        $model->title = Arr::get($data, 'title');
        $model->content = Arr::get($data, 'content');
        $model->problem = Arr::get($data, 'problem');
        $model->answer = Arr::get($data, 'answer');
        $model->save();

        return $model;
    }
}