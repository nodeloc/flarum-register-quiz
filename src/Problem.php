<?php

namespace Xypp\RegisterQuiz;

use Flarum\Database\AbstractModel;


/**
 * @property int $id
 * @property string $title
 * @property string $content
 * @property array $problem
 * @property int $answer
 */
class Problem extends AbstractModel
{
    protected $casts = [
        'problem' => 'array'
    ];
    protected $table = 'register_quiz_problems';
}