import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.Object.create({
      firstName: 'Heather',
      lastName: 'Brysiewicz',
      email: 'heather@dockyard.com',
      twitter: 'caligoanimus',
      github: 'hbrysiewicz'
    });
  }
});
