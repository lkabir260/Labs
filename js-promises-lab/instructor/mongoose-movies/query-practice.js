require('./config/database');
const Movie = require('./models/movie');
const Performer = require('./models/performer');

Promise.resolve('start promises')
  .then(function(x) {
    console.log('HERE: ', x);
    // 1) Find all movie docs
    return Movie.find({}); // remember to return the promise!
  })
  .then(function(movies) {
    console.log('1): ', movies);
    // 2) Find all performer docs
    return Performer.find({});
  })
  .then(function(performers) {
    console.log('2): ', performers);
    // Follow the same .then structure used above from this point forward
    // Don't forget to console.log the exercise number also as shown above
    // 3) Find all movies with an MPAA Rating of 'PG'
    return Movie.find({ mpaaRating: 'PG' });
  })
  .then(function(pgMovies) {
    console.log('3): ', pgMovies);
    // 4) Find all movies that are still showing
    return Movie.find({ nowShowing: true });
  })
  .then(function(moviesShowing) {
    console.log('4): ', moviesShowing);
    // 5) Find all movies with an MPAA Rating of 'PG' or 'PG-13'

    // add movies query
  })

  // 6) Find the first movie found with a releaseYear of 2018

  // 7) Find all movies released after 1980

  .then(function() {
    // 8) Find all movies whose titles start with a 'C'
    // Hint: StackOverflow will show how to use a regular expression
    return Movie.find({ title: /^C/ });
  })

  .then(function(moviesStartingWithC) {
    console.log('8): ', moviesStartingWithC);
    // 9) Find the performer named 'Rami Malek'
  })

  // 10) Find all performers born before 1980

  // 11) Find all performers whose name starts with a 'J'

  // 12) Add a reference to performer 'Bill Murray' to
  //     the movie Caddyshack's cast property and save.
  //     console.log the updated movie.

  .then(function() {
    process.exit();
  });

// random example
Promise.resolve()
  .then(() => console.log('1'))
  .then(() => console.log('2'))
  .then(() => console.log('3'))
  .then(() => console.log('4'));
