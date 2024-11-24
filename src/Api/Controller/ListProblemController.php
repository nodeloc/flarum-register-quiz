<?php

namespace Xypp\RegisterQuiz\Api\Controller;

use Flarum\Api\Controller\AbstractListController;
use Flarum\Http\RequestUtil;
use Xypp\RegisterQuiz\Api\Serializer\ProblemSerializer;
use Xypp\RegisterQuiz\Problem;
use Psr\Http\Message\ServerRequestInterface;

class ListProblemController extends AbstractListController
{
    public $serializer = ProblemSerializer::class;
    public function data(ServerRequestInterface $request, $document)
    {
        $actor = RequestUtil::getActor($request);
        $actor->assertAdmin();

        return Problem::all()->each(fn($p) => $p->setAttribute("show_answer", true));
    }
}