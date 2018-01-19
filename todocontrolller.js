var todo = require('/todo');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var newtodo = [
    new todo({
        name: 'akshay',
        task_name: 'win',
        task_priority: 'highest',
        task_due_date: 10
    }),
    new todo({
        name: 'malta',
        task_name: 'loose',
        task_priority: 'lowest',
        task_due_date: 1
    }),
  
];

var done = 0;
for (var i = 0; i < newtodo.length; i++) {
    newtodo[i].save(function(err, result) {
        done++;
        if (done === newtodo.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}