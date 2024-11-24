<?php

use Illuminate\Database\Schema\Blueprint;

return [
    'up' => function ($schema) {
        $schema->table("register_quiz_tests", function (Blueprint $table) {
            $table->integer('score')->unsigned()->nullable();
        });
    },
    'down' => function ($schema) {
        $schema->table("register_quiz_tests", function (Blueprint $table) {
            $table->dropColumn('score');
        });
    }
];