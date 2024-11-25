<?php

namespace Xypp\RegisterQuiz\Content;
use Carbon\Carbon;
use Flarum\Api\Serializer\CurrentUserSerializer;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Discussion\Discussion;
use Flarum\Settings\SettingsRepositoryInterface;
use Xypp\RegisterQuiz\Test;

class QuizAttributes
{
    protected SettingsRepositoryInterface $settings;
    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    public function __invoke(CurrentUserSerializer $forumSerializer, $model, $attributes)
    {
        $actor = $forumSerializer->getActor();
        $type = Test::where('user_id', $actor->id)
            ->where('expired_at', '>', Carbon::now())
            ->where('submitted', "!=", 1)
            ->exists();

        $attributes['in_quiz'] = $type;
        if (!$actor->isGuest())
            $attributes['register_quiz_require'] = !$actor->groups()->where('id', $this->settings->get('xypp-register-quiz.group_id') ?? 0)->exists();
        return $attributes;
    }
}