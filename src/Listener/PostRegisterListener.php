<?php

/*
 * This file is part of fof/doorman.
 *
 * Copyright (c) Reflar.
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 */

namespace Xypp\RegisterQuiz\Listener;

use Flarum\Group\Group;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\Event\GroupsChanged;
use Flarum\User\Event\Registered;
use FoF\Doorman\Doorkey;
use Illuminate\Contracts\Events\Dispatcher;

class PostRegisterListener
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @var Dispatcher
     */
    protected $events;

    public function __construct(SettingsRepositoryInterface $settings, Dispatcher $events)
    {
        $this->settings = $settings;
        $this->events = $events;
    }

    public function handle(Registered $event)
    {
        $user = $event->user;
        $doorkey = Doorkey::where('key', $user->invite_code)->first();
        if ($doorkey) {
            $group = Group::findOrFail($this->settings->get('xypp-register-quiz.group_id') ?? 0);
            if ($group->id !== Group::MEMBER_ID && !$user->groups()->where('id', $group->id)->exists()) {
                $oldGroups = $user->groups()->get()->all();
                $user->groups()->attach($group->id);
                $this->events->dispatch(new GroupsChanged($user, $oldGroups));
            }
        }
    }
}
