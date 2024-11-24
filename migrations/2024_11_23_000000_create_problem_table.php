<?php

use Illuminate\Database\Schema\Blueprint;

use Flarum\Database\Migration;

return Migration::createTable(
    'register_quiz_problems',
    function (Blueprint $table) {
        $table->increments('id');
        $table->string('title');
        $table->text('content');
        $table->text('problem');
        $table->integer('answer');
    }
);