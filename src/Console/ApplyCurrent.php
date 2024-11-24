<?php

namespace Xypp\RegisterQuiz\Console;

use Flarum\Group\Group;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\Event\GroupsChanged;
use Flarum\User\User;
use Illuminate\Console\Command;
use Illuminate\Events\Dispatcher;

class ApplyCurrent extends Command
{
    /**
     * @var string
     */
    protected $signature = 'register-quiz:apply';

    /**
     * @var string
     */
    protected $description = 'Apply group to all users those registered before';
    protected $settings;
    protected $events;
    public function __construct(SettingsRepositoryInterface $settings, Dispatcher $events)
    {
        parent::__construct();
        $this->settings = $settings;
        $this->events = $events;
    }

    public function handle()
    {
        $group = Group::findOrFail($this->settings->get('xypp-register-quiz.group_id') ?? 0);
        if ($group->id === Group::MEMBER_ID) {
            $this->error('The group is not set');
            return;
        }
        $this->info('Applying group ' . $group->name_singular);

        $this->withProgressBar(User::all(), function (User $user) use ($group) {
            if (!$user->groups()->where('id', $group->id)->exists()) {
                $oldGroups = $user->groups()->get()->all();
                $user->groups()->attach($group->id);
                $this->events->dispatch(new GroupsChanged($user, $oldGroups));
            }
        });
        $this->info('Done');
    }
}