// server routes in Node

// grab the nerd model we just created
var Task = require('./models/Task');

module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // sample api route
    app.get('/api/tasks', function(req, res) {
        // use mongoose to get all tasks in the database
        Task.find(function(err, tasks) {

            // if there is an error retrieving, send the error. 
            // nothing after res.send(err) will execute
            if (err)
                res.send(err);
            console.log('Get: ' + tasks);
            res.json(tasks); // return all nerds in JSON format
        });
    });

    // route to handle creating goes here (app.post)
    app.post('/api/tasks', function(req, res) {
        var task = new Task({
            title: req.body.title,
            priority: req.body.priority
        });

        task.save(function(err, task) {
            if (err) {
                throw err;
            }
            console.log('Posted: ' + task);
            res.json(task);
        });
    });

    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendFile('./app/index.html'); // load our public/index.html file
    });

};