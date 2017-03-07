//Todo controller
var bodyParser = require('body-parser');

var mongoose = require('mongoose');

//Connect to DB
mongoose.connect('mongodb://test:test@ds023644.mlab.com:23644/todos');

//Create a schema
var todoSchema = new mongoose.Schema({
    item: String
});

//Create Todo model
var Todo = mongoose.model('Todo', todoSchema);

// var itemOne = Todo({ item: 'Kill bill' }).save(function (err) {
//     if (err) throw err;
//     console.log('Item saved..');
// });


// var data = [{ item: 'wake up' }, { item: 'get milk' }, { item: 'make tea' }];

// create application/x-www-form-urlencoded parser 
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function (app) {

    app.get('/todo', function (req, res) {
        Todo.find({}, function (err, data) {
            if (err) throw err;
            res.render('todo', { todos: data });
        });

    });

    app.post('/todo', urlencodedParser, function (req, res) {
        // data.push(req.body);
        Todo(req.body).save(function (err, data) {
            if (err) throw err;
            console.log('Item saved..');
            res.json(data);
        });

    });

    app.delete('/todo/:item', urlencodedParser, function (req, res) {
        // data = data.filter(function (todo) {
        //     return todo.item.replace(/ /g, "-") !== req.params.item;
        // });

        Todo.find({ item: req.params.item.replace(/\-/g, " ") }).remove(function (err, data) {
            res.json(data);
        });

    });
};