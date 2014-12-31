import DS from 'ember-data';

/* globals Firebase */

export default DS.FirebaseAdapter.extend({
  firebase: new Firebase("https://incandescent-heat-6793.firebaseio.com")
});



// export default DS.FixtureAdapter.extend({});
