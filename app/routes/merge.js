import Ember from 'ember';
import Changeset from '../mixins/changeset';
import UserValidations from '../validations/user';

const {
  get,
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

    let firstChangeset = this.changeset([user, UserValidations]);
    let secondChangeset = this.changeset([user, UserValidations]);
    return {
      user: user,
      firstChangeset: firstChangeset,
      secondChangeset: secondChangeset
    };
  },

  actions: {
    merge() {
      let first = get(this, 'controller.content.firstChangeset');
      let second = get(this, 'controller.content.secondChangeset');
      let merged = first.merge(second);
      return merged
        .validate()
        .then(() => {
          if (get(merged, 'isValid')) {
            return merged.execute();
          }
        }).catch((error) => {
          throw new Error(error);
        });
    }
  }
});
