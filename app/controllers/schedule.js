import Ember from 'ember';

export default Ember.ArrayController.extend({
	days: function(){
		return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map(function(item, i){

      return {
      	name: item,
      	tasks: this.get('model').filterProperty('day', moment().subtract(-3, 'days').add(i, 'days').format('MMMM Do YYYY')),
      	dt: moment().subtract(-3, 'days').add(i, 'days').format('MMMM Do YYYY')
      };
		}, this);

	}.property('model.@each.isScheduled'),

	actions: {
		addTaskToDay: function(taskId, dt){

			this.store.find('task', taskId).then(function(task){
				debugger
				task.set('day', dt);
				task.set('isScheduled', true);
				task.save();
			});

		}

		     
	}

});
