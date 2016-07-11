import Ember from 'ember';
import UserValidations from '../validations/user';
import Changeset from 'ember-changeset';

const {
  get
} = Ember;

export default Ember.Component.extend({
  actions: {
    save() {
      return get(this, 'content').save();
    },

    rollback() {
      return get(this, 'content').rollback();
    }
  }
});
