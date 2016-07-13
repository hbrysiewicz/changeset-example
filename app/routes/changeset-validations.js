import Ember from 'ember';
import UserValidations from '../validations/user';

const {
  RSVP,
  Object: EmberObject,
  set
} = Ember;

export default Ember.Route.extend({
  model() {
    return EmberObject.extend({
      firstName: 'Heather',
      lastName: 'Brysiewicz',
      email: 'heather@dockyard.com',
      twitter: 'caligoanimus',
      github: 'hbrysiewicz',

      // TODO: ember-changeset shouldn't require this
      save() {
        return new RSVP.Promise((resolve) => resolve());
      }
    }).create();
  },

  setupController(controller) {
    set(controller, 'validations', UserValidations);
    return this._super(...arguments);
  }
});
