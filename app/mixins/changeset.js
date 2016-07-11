import Ember from 'ember';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';
import isObject from 'ember-changeset/utils/is-object';

export default Ember.Mixin.create({
  changeset([model, validationMap]) {
    if (isObject(validationMap)) {
      return new Changeset(model, lookupValidator(validationMap), validationMap);
    }

    return new Changeset(model, validationMap);
  }
});
