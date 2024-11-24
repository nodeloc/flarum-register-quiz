import Model from 'flarum/common/Model';
import User from 'flarum/common/models/User';
import Problem from './Problem';

export default class Test extends Model {
  created_at = Model.attribute('created_at', Model.transformDate);
  saved = Model.attribute<number[]>('saved');
  problems = Model.hasMany<Problem>('problems');
  submitted = Model.attribute<boolean>('submitted');
  score = Model.attribute<number>('score');
  expired_at = Model.attribute('expired_at', Model.transformDate);
  protected apiEndpoint(): string {
    return '/register-quiz-test';
  }
}