import Ember from 'ember';

const {
  RSVP,
  Object: EmberObject
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
  }
});
