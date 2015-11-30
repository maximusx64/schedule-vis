import Task from './Task';
import $ from './jquery';

var t1 = new Task(0, 2, 1);
var t2 = new Task(0, 4, 1);
var t3 = new Task(0, 7, 1);

console.log(t1.toString());
console.log(t2.toString());
console.log(t3.toString());

$(document).on('click', '#btn-add-task', function() {
  console.log('add task');
})