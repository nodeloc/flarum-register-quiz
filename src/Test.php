<?php

namespace Xypp\RegisterQuiz;

use Flarum\Database\AbstractModel;
use Flarum\Database\Eloquent\Collection;
use Flarum\User\User;

/**
 * @property int $id
 * @property int $user_id
 * @property array $saved
 * @property ?int $score
 * @property ?boolean $submitted
 */
class Test extends AbstractModel
{
    protected $table = 'register_quiz_tests';
    protected $casts = [
        'problem' => 'array',
        'saved' => 'array'
    ];
    protected $dates = ['created_at', 'updated_at', 'expired_at'];
    public function getProblems()
    {
        $relation = $this->getRelation('problems');
        if ($relation === null) {
            if (count($this->problem) == 0)
                $data = new Collection();
            else
                $data = Problem::query()
                    ->orderByRaw("FIELD(id" . str_repeat(",?", count($this->problem)) . ")", $this->problem)
                    ->whereIn('id', $this->problem)->get();
            $this->setRelation('problems', $data);
            $relation = $this->getRelation('problems');
        }
        return $relation;
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}