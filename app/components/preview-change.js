import Ember from 'ember';

const {
  computed,
  get
} = Ember;

export default Ember.Component.extend({
  changeTitle: computed('change.key', function() {
    let key = get(this, 'change.key');
    let title = key.replace( /([A-Z])/g, " $1" );
    return `${title.charAt(0).toUpperCase()}${title.slice(1)}`;
  })
});
