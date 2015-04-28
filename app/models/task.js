import DS from 'ember-data';

var Task = DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  group_id: DS.attr('number'),
  isRecurring: DS.attr('boolean',  {defaultValue: false}),
  isScheduled: DS.attr('boolean',  {defaultValue: false}),
  // day: DS.belongsTo('day', {async: true}),
  timestamp: DS.attr('date'),
  day: DS.attr('string')
});

// Task.reopenClass({
//   FIXTURES: [
//     { id: 1, title: 'Title A', body: 'Body A' },
//     { id: 2, title: 'Title B', body: 'Body B' }
//   ]
// });

export default Task;