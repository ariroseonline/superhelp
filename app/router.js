import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('tasks', function() {
  	this.resource('schedule', function() { });

  });
  this.resource('recurring-tasks', function() { });

});

export default Router;
