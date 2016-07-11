import Ember from 'ember';

const {
  computed,
  get
} = Ember;

export default Ember.Component.extend({
  errorTitle: computed('error.key', function() {
    let key = get(this, 'error.key');
    let title = key.replace( /([A-Z])/g, " $1" );
    return `${title.charAt(0).toUpperCase()}${title.slice(1)}`;
  })
});
