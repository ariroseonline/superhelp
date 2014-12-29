import DS from 'ember-data';

var Task = DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  day: DS.attr('string'),
  group_id: DS.attr('number'),
  timestamp: DS.attr('date')
});

// Task.reopenClass({
//   FIXTURES: [
//     { id: 1, title: 'Title A', body: 'Body A' },
//     { id: 2, title: 'Title B', body: 'Body B' }
//   ]
// });

export default Task;