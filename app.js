var express = require('express');
var pug = require('pug');
var app = express();

app.set('views', './views');
app.set('view engine', 'pug');

// tells the server that you can request static files from /public folder:
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('index');
});
app.get('/books', function(req, res) {
    console.log('requested /books');
    res.render('index');
});

app.get('/books/to-kill-a-mockingbird', function(req, res) {
    console.log('requested /to-kill-a-mockingbird');
    res.render('to-kill-a-mockingbird');
});

app.get('/books/1984', function(req, res) {
    console.log('requested /1984');
    res.render('1984');
});

app.get('/books/the-kiterunner', function(req, res) {
    console.log('requested /the-kiterunner');
    res.render('the-kiterunner');
});

app.get('/books/*', function(req, res) {
    console.log('your dynamic path is: ');
    console.log(req.params[0]);
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
