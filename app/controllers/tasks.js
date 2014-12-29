import Ember from 'ember';

export default Ember.ArrayController.extend({
	oneTasks: function(){
		return this.get('model').filterProperty('isRecurring', false);
	}.property('content.@each'),

	recurringTasks: function(){
		return this.get('model').filterProperty('isRecurring', true);
	}.property('content.@each'),

	createTask: function() {
	  this.set('newTask', Ember.Object.create());
	}.on('init'),
	sortProperties: ['timestamp'],
	sortAscending: false, // sorts post by timestamp


	actions: {
	  scheduleTask: function() {
	    var newTask = this.store.createRecord('task', {
	      title: this.get('newTask.title'),
	      body: this.get('newTask.body'),
	      day: this.get('newTask.day'),
	      isRecurring: this.get('newTask.isRecurring'),
	      timestamp: new Date()
	    });
	    newTask.save();
	  }
	}
});
