import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-test2-заказ-l');
  this.route('i-i-s-test2-заказ-e',
  { path: 'i-i-s-test2-заказ-e/:id' });
  this.route('i-i-s-test2-заказ-e.new',
  { path: 'i-i-s-test2-заказ-e/new' });
  this.route('i-i-s-test2-контрагент-l');
  this.route('i-i-s-test2-контрагент-e',
  { path: 'i-i-s-test2-контрагент-e/:id' });
  this.route('i-i-s-test2-контрагент-e.new',
  { path: 'i-i-s-test2-контрагент-e/new' });
  this.route('i-i-s-test2-сотрудник-l');
  this.route('i-i-s-test2-сотрудник-e',
  { path: 'i-i-s-test2-сотрудник-e/:id' });
  this.route('i-i-s-test2-сотрудник-e.new',
  { path: 'i-i-s-test2-сотрудник-e/new' });
});

export default Router;
