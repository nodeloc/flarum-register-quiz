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
        if (!$actor->isGuest() ){
            $suspendDurationWithin7Days = false;
            // 检查用户是否被 suspend 并计算是否在 7 天及以内
            if ($actor->suspended_until) {
                $suspendEnd = Carbon::parse($actor->suspended_until);
                $suspendDurationWithin7Days = $suspendEnd->isFuture() && $suspendEnd->diffInDays(Carbon::now()) <= 7;
            }
            // 如果 suspend 时间在 7 天及以内，将属性设为 true
            $attributes['register_quiz_require'] = $suspendDurationWithin7Days;
        }
        return $attributes;
    }
}
