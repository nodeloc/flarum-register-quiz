<?php

namespace Xypp\RegisterQuiz\Api\Serializer;

use Flarum\Api\Serializer\AbstractSerializer;
use Xypp\RegisterQuiz\Problem;

class ProblemSerializer extends AbstractSerializer
{
    public $type = 'register-quiz-problem';

    public function getDefaultAttributes($problem, array $fields = null)
    {
        if (!$problem instanceof Problem) {
            throw new \Exception('ProblemSerializer::getDefaultAttributes() expects a Problem instance');
        }
        if($problem->getAttribute("is_admin")){
            return [
                'title' => $problem->title,
                'content' => $problem->content,
                'problem' => $problem->problem,
                'answer'=>$problem->answer
            ];
        }
        return [
            'title' => $problem->title,
            'content' => $problem->content,
            'problem' => $problem->problem
        ];
    }
}