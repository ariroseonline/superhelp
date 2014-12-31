import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['draggable-dropzone'],
	classNameBindings: ['dragClass'],
	dragClass: 'deactivated',

	dragLeave: function(event) {
		event.preventDefault();
		this.set('dragClass', 'deactivated');
	},

	dragOver: function(event) {
		event.preventDefault();
		this.set('dragClass', 'activated');
	},

	drop: function(event) {
		this.set('dragClass', 'deactivated');
		var taskId = event.dataTransfer.getData('text/data');
		this.sendAction('dropped', taskId, this.get('dayName') );
	}

});
