import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('changeset');
  this.route('changeset-validations');
  this.route('without');
  this.route('merge');
});

export default Router;
