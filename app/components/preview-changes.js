import Ember from 'ember';

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
