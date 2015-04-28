import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		// return this.modelFor('tasks');
		return {
		  events: Ember.A([
		    {title: "Hackathon", start: Date.now()},
		  ])
		};
	},


});
