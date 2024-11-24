<?php

namespace Xypp\RegisterQuiz\Api\Serializer;

use Flarum\Api\Serializer\AbstractSerializer;
use Flarum\Settings\SettingsRepositoryInterface;
use Xypp\RegisterQuiz\Problem;
use Xypp\RegisterQuiz\Test;

class TestSerializer extends AbstractSerializer
{
    public $type = 'register-quiz-test';

    public function getDefaultAttributes($problem, array $fields = null)
    {
        if (!$problem instanceof Test) {
            throw new \Exception('TestSerializer::getDefaultAttributes() expects a Test instance');
        }
        $problem->getProblems();
        return [
            'created_at' => $problem->created_at,
            'expired_at' => $problem->expired_at,
            'saved' => $problem->saved,
            'submitted' => $problem->submitted,
            'score' => $problem->score
        ];
    }

    public function problems($model)
    {
        return $this->hasMany($model, ProblemSerializer::class, "problems");
    }
}