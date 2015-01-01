import Ember from 'ember';

export default Ember.ArrayController.extend({
	//These filterproperties are only needed because emberfire doesn't do query filtering yet from the store
	oneTasks: function(){
		return this.get('content').filter(function(item){
				return item.get('isRecurring') === false && item.get('isScheduled') === false;
		});
	}.property('content.@each.isScheduled,content.[]'),

	recurringTasks: function(){
		return this.get('content').filter(function(item){
				return item.get('isRecurring') === true && item.get('isScheduled') === false;
		});	
	}.property('content.@each.isScheduled,content.[]'),

	createTask: function() {
	  this.set('newTask', Ember.Object.create());
	}.on('init'),

	sortProperties: ['timestamp'],
	sortAscending: false, // sorts post by timestamp

	actions: {
	  addTask: function() {
	    var newTask = this.store.createRecord('task', {
	      title: this.get('newTask.title'),
	      body: this.get('newTask.body'),
	      day: this.get('newTask.day'),
	      isRecurring: this.get('newTask.isRecurring'),
	      isScheduled: false,
	      timestamp: new Date()
	    });
	    newTask.save();
	  }
	}
});
