import Ember from 'ember';

const { get } = Ember;

export default Ember.Component.extend({
  actions: {
    save(changeset) {
      // handle non-changeset case
      if (!changeset.validate) {
        return;
      }

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
      // handle non-changeset case
      if (!changeset.rollback) {
        return;
      }

      return changeset.rollback();
    }
  }
});
