import Ember from 'ember';

const {
  computed,
  get
} = Ember;

export default Ember.Component.extend({
  classNames: ['validated-field'],

  title: computed('property', function() {
    let key = get(this, 'property');
    let title = key.replace( /([A-Z])/g, " $1" );
    return `${title.charAt(0).toUpperCase()}${title.slice(1)}`;
  })
});
