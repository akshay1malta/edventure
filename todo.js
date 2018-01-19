var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: {type: String, required: true},
    task_name: {type: String, required: true},
    task_priority: {type: String, required: true},
    task_due_date: {type: Number, required: true}
});

module.exports = mongoose.model('Product', schema);