import Model from 'flarum/common/Model';
import User from 'flarum/common/models/User';

export default class Problem extends Model {
  title = Model.attribute<string>('title');
  content = Model.attribute<string>('content');
  answer = Model.attribute<number>('answer');
  problem = Model.attribute<string[]>('problem');
}