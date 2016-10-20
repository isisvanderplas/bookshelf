var express = require('express');
var pug = require('pug');
var app = express();

app.set('views', './views');
app.set('view engine', 'pug');

var dataInMemory = [
  {
    title: "1984",
    slug: "1984",
    imageURL: "/img/1984.png",
    authorName: "George Orwell",
    description: "The year 1984 has come and gone, but George Orwell's prophetic, nightmarish vision in 1949 of the world we were becoming is timelier than ever. 1984 is still the great modern classic of 'negative utopia' -a startlingly original and haunting novel that creates an imaginary world that is completely convincing, from the first sentence to the last four words. No one can deny the novel's hold on the imaginations of whole generations, or the power of its admonitions -a power that seems to grow, not lessen, with the passage of time.",
    numberOfPages: 326
  },
  {
    title: "to kill a mockingbird",
    slug: "to-kill-a-mockingbird",
    imageURL: "/img/to-kill-a-mockingbird.png",
    authorName: "Harper Lee",
    description: "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it, To Kill A Mockingbird became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic. Compassionate, dramatic, and deeply moving, To Kill A Mockingbird takes readers to the roots of human behavior—to innocence and experience, kindness and cruelty, love and hatred, humor and pathos. Now with over 18 million copies in print and translated into forty languages, this regional story by a young Alabama woman claims universal appeal. Harper Lee always considered her book to be a simple love story. Today it is regarded as a masterpiece of American literature.",
    numberOfPages: 173
  },
  {
    title: "the Kiterunner",
    slug: "the-kiterunner",
    imageURL: "/img/the-kiterunner.png",
    authorName: "Khaled Hosseini",
    description: "It may be unfair, but what happens in a few days, sometimes even a single day, can change the course of a whole lifetime. Amir is the son of a wealthy Kabul merchant, a member of the ruling caste of Pashums. Hassan, his servant and constant companion, is a Hazara, a despised and impoverished caste. Their uncommon bond is torn by Amir's choice to abandon his friend amidst the increasing ethnic, religious, and political tensions of the dying years of the Afghan monarchy, wrenching them far apart. But so strong is the bond between the two boys that Amir journeys back to a distant world, to try to right past wrongs against the only true friend he ever had. The unforgettable, heartbreaking story of the unlikely friendship between a wealthy boy and the son of his father’s servant, The Kite Runner is a beautifully crafted novel set in a country that is in the process of being destroyed. It is about the power of reading, the price of betrayal, and the possibility of redemption; and an exploration of the power of fathers over sons—their love, their sacrifices, their lies. A sweeping story of family, love, and friendship told against the devastating backdrop of the history of Afghanistan over the last thirty years, The Kite Runner is an unusual and powerful novel that has become a beloved, one-of-a-kind classic.",
    numberOfPages: 372
  }
];

  function findBook(slug) {
    // iterate through the slugs in the array of object
    // if the iterated object holds the same slug as the parameter of this function return the object
    for (var i = 0; i < dataInMemory.length; i++) {
      if (dataInMemory[i].slug === slug) {
        return dataInMemory[i];
      }
    }
  }


// tells the server that you can request static files from /public folder:
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('index', {books: dataInMemory});
});
app.get('/books', function(req, res) {
    console.log('requested /books');
    res.render('index');
});

app.get('/books/*', function(req, res) {
    var foundBook= findBook(req.params[0]);
    res.send(pug.renderFile('views/book.pug', {book: foundBook}));
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});






































// app.get('/books/*', function(req, res) {
//     console.log('your dynamic path is: ');
//     console.log(req.params[0]);
// });










// app.get('/books/to-kill-a-mockingbird', function(req, res) {
//     console.log('requested /to-kill-a-mockingbird');
//     res.render('to-kill-a-mockingbird');
// });
//
// app.get('/books/1984', function(req, res) {
//     console.log('requested /1984');
//     res.render('1984');
// });
//
// app.get('/books/the-kiterunner', function(req, res) {
//     console.log('requested /the-kiterunner');
//     res.render('the-kiterunner');
// });
