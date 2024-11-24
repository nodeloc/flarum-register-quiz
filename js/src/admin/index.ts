import app from 'flarum/admin/app';
import adminPage from './components/Page';

app.initializers.add('xypp/flarum-register-quiz', () => {
  app.extensionData
    .for('xypp-register-quiz')
    .registerPage(adminPage)
});
