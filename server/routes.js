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

    // route to handle updates goes here (app.put)
    app.put('/api/tasks/:id', function(req, res) {
        var id = req.params.id;
        console.log(id);

        if (!req.body) {
            // send error status
            return res.send(400);
        }

        // first find the task in the databae
        Task.findById(id, function(err, data) {
            // if error occurred or data was not found
            if (err) {
                // send error message
                return res.send(500, err);
            }
            if (!data) {
                // send error message
                return res.send(404);
            }

            console.log(data);

            // increase the priority of the object found
            data.priority += 1;

            // save the object after updating
            data.save(function(err) {
                if (err) {
                    return console.log('error')
                }
                // send the updated data back to the Angular frontend
                res.json(data);
            });
        });
    });

    // route to handle delete goes here (app.delete)
    app.delete('/api/tasks/:id', function(req, res) {
    	var id = req.params.id;

    	if (!req.body) {
    		return res.send(400);
    	}

    	Task.findById(id, function(err, data) {
    		if (err) {
    			return res.send(500, err);
    		}

    		if (!data) {
    			return res.send(404);
    		}

    		data.remove(function(err) {
    			if (err) {
    				return console.log('Error occurred while deleting');
    			}
    			res.send(true);
    			console.log('item deleted');
    		});
    	});
    });

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendFile('./app/index.html'); // load our public/index.html file
    });

};