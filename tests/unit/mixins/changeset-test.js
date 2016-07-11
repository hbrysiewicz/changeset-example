import Ember from 'ember';
import ChangesetMixin from 'changeset-example/mixins/changeset';
import { module, test } from 'qunit';

module('Unit | Mixin | changeset');

// Replace this with your real tests.
test('it works', function(assert) {
  let ChangesetObject = Ember.Object.extend(ChangesetMixin);
  let subject = ChangesetObject.create();
  assert.ok(subject);
});
