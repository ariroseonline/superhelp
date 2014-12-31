import Ember from 'ember';

export default Ember.ArrayController.extend({
	days: function(){
		return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map(function(item){
      return {
      	name: item,
      	tasks: this.get('model').filterProperty('day', item)
      };
		}, this);

	}.property('model.@each.isScheduled'),

	actions: {
		addTaskToDay: function(taskId, dayName){
			this.store.find('task', taskId).then(function(task){
				task.set('day', dayName);
				task.set('isScheduled', true);
				task.save();
			});

		}

		     
	}

});
