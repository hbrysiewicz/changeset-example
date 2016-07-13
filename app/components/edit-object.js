import Ember from 'ember';

const { get } = Ember;

export default Ember.Component.extend({
  actions: {
    save(changeset) {
      return changeset
        .validate()
        .then(() => {
          if (get(changeset, 'isValid')) {
            return changeset.execute();
          }
        }).catch((error) => {
          throw new Error(error);
        });
    },

    rollback(changeset) {
      return changeset.rollback();
    }
  }
});
