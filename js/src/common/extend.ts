import Extend from 'flarum/common/extenders';
import Problem from './model/Problem';
import Test from './model/Test';
export default [
    new Extend.Store()
        .add('register-quiz-problem', Problem)
        .add('register-quiz-test', Test)
];