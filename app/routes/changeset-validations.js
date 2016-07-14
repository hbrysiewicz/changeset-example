import Ember from 'ember';
import Changeset from '../mixins/changeset';
import UserValidations from '../validations/user';

const {
  RSVP,
  Object: EmberObject
} = Ember;

export default Ember.Route.extend(Changeset, {
  model() {
    let user = EmberObject.create({
      firstName: 'Heather',
      lastName: 'Brysiewicz',
      email: 'heather@dockyard.com',
      twitter: 'caligoanimus',
      github: 'hbrysiewicz'
    });

    let changeset = this.changeset([user, UserValidations]);
    return {
      user: user,
      changeset: changeset
    };
  }
});
