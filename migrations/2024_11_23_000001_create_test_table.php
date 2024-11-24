<?php

use Illuminate\Database\Schema\Blueprint;

use Flarum\Database\Migration;

return Migration::createTable(
    'register_quiz_tests',
    function (Blueprint $table) {
        $table->increments('id');
        $table->timestamps();
        $table->timestamp('expired_at');
        $table->text('problem');
        $table->text('saved')->default('[]');
        $table->boolean('submitted')->default(false);
        $table->integer('user_id')->unsigned();

        $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
    }
);