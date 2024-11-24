<?php

/*
 * This file is part of xypp/flarum-register-quiz.
 *
 * Copyright (c) 2024 小鱼飘飘.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Xypp\RegisterQuiz;

use Flarum\Api\Serializer\CurrentUserSerializer;
use Flarum\Extend;
use Flarum\Group\Group;
use Xypp\RegisterQuiz\Api\Controller\SubmitDoorkeyController;
use Xypp\RegisterQuiz\Console\ApplyCurrent;
use Xypp\RegisterQuiz\Content\QuizAttributes;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->css(__DIR__ . '/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js')
        ->css(__DIR__ . '/less/admin.less'),
    new Extend\Locales(__DIR__ . '/locale'),


    (new Extend\Routes('api'))
        ->get('/register-quiz-problem', 'register-quiz-problem', \Xypp\RegisterQuiz\Api\Controller\ListProblemController::class)
        ->post('/register-quiz-problem', 'register-quiz-problem-create', \Xypp\RegisterQuiz\Api\Controller\CreateProblemController::class)
        ->patch('/register-quiz-problem/{id}', 'register-quiz-problem-update', \Xypp\RegisterQuiz\Api\Controller\UpdateProblemController::class)
        ->delete('/register-quiz-problem/{id}', 'register-quiz-problem-delete', \Xypp\RegisterQuiz\Api\Controller\DeleteProblemController::class)
        ->post('/register-quiz-test', 'register-quiz-test-create', \Xypp\RegisterQuiz\Api\Controller\CreateTestController::class)
        ->patch('/register-quiz-test', 'register-quiz-test-update', \Xypp\RegisterQuiz\Api\Controller\UpdateTestController::class)
        ->get('/register-quiz-test', 'register-quiz-test-get', \Xypp\RegisterQuiz\Api\Controller\ShowTestController::class)
        ->post('/register-quiz-submit-doorkey', 'register-quiz-submit-doorkey', SubmitDoorkeyController::class),

    (new Extend\ApiSerializer(CurrentUserSerializer::class))
        ->attributes(QuizAttributes::class),

    (new Extend\Frontend('forum'))
        ->route("/register-quiz", "xypp-register-quiz.quiz"),

    (new Extend\Settings)
        ->default('xypp-register-quiz.group_id', Group::MEMBER_ID)
        ->default('xypp-register-quiz.test_time', 40)
        ->default('xypp-register-quiz.require', 35)
        ->default('xypp-register-quiz.problem_count', 40)
        ->serializeToForum('xypp-register-quiz.test_time', 'xypp-register-quiz.test_time')
        ->serializeToForum('xypp-register-quiz.require', 'xypp-register-quiz.require')
        ->serializeToForum('xypp-register-quiz.group_id', 'xypp-register-quiz.group_id')
        ->serializeToForum('xypp-register-quiz.problem_count', 'xypp-register-quiz.problem_count'),

    (new Extend\Console)
        ->command(ApplyCurrent::class)
];
