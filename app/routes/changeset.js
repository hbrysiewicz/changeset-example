import Ember from 'ember';
import Changeset from '../mixins/changeset';

const {
  RSVP,
  Object: EmberObject
} = Ember;

export default Ember.Route.extend(Changeset, {
  model() {
    let User = EmberObject.extend({
      firstName: 'Heather',
      lastName: 'Brysiewicz',
      email: 'heather@dockyard.com',
      twitter: 'caligoanimus',
      github: 'hbrysiewicz',

      // TODO: ember-changeset shouldn't require this
      save() {
        return new RSVP.Promise((resolve) => resolve());
      }
    });
    let user = User.create();
    let changeset = this.changeset([user]);
    return {
      user: user,
      changeset: changeset
    };
  }
});
