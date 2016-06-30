import Ember from 'ember';
import Changeset from 'ember-changeset';

export default Ember.Route.extend({
  model() {
    let user = Ember.Object.create({
      firstName: 'Heather',
      lastName: 'Brysiewicz',
      email: 'heather@dockyard.com',
      twitter: 'caligoanimus',
      github: 'hbrysiewicz'
    });
    let changeset = new Changeset(user);
    return {
      user: user,
      changeset: changeset
    };
  }
});
