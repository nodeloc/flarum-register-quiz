import app from 'flarum/forum/app';
import { QuizPage } from './components/QuizPage';
import { addTip } from './addTip';

app.initializers.add('xypp/flarum-register-quiz', () => {
  app.routes['xypp-register-quiz.quiz'] = {
    "path": "/register-quiz",
    "component": QuizPage,
  }
  addTip();
});
