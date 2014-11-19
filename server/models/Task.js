// Task,js - model for tasks

var mongoose = require('mongoose');

var taskSchema = mongoose.Schema({
	title: String,
	priority: Number
});

module.exports = mongoose.model('Task', taskSchema);