import Ember from 'ember';

const { get } = Ember;

export default Ember.Component.extend({
  validations: null,

  actions: {
    validateProperty(changeset, property) {
      return changeset.validate(property);
    },

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
