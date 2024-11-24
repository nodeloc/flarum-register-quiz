<?php

namespace Xypp\RegisterQuiz\Util;

use Illuminate\Support\Arr;
use Xypp\RegisterQuiz\Test;

class JudgeUtil
{
    public static function judge(Test $test)
    {
        $problems = $test->getProblems()->toArray();
        $correct = 0;

        for ($i = 0; $i < count($problems); $i++) {
            if (
                $test->saved[$i] !== null &&
                Arr::get($problems[$i], "answer") !== null &&
                $test->saved[$i] == Arr::get($problems[$i], "answer")
            ) {
                $correct++;
            }
        }

        return $correct;
    }
}