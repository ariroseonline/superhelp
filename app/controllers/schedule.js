import Ember from 'ember';

export default Ember.ArrayController.extend({
	days: function(){

		return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map(function(item, idx){
      return {
      	name: item,
      	tasks: this.get('content').filterProperty('day', item)
      }
		}, this)

	}.property('content.@each')

});
