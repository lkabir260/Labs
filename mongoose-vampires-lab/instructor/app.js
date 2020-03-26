// 1. Require your node modules
const mongoose = require('mongoose');

// 2. Require your model
const Vampire = require('./models/vampire');

// 3. Require your extra data source
const vampireData = require('./populateVampires');

// 4. Connect your database
mongoose.connect('mongodb://localhost:27017/vampires', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', function() {
  console.log('Connected to vampires db');
});

setTimeout(() => {
  mongoose.disconnect();
}, 4000);

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you

// Vampire.create(vampireData)
//   .then(vampires => {
//     console.log(vampires);
//   })
//   .catch(err => {
//     console.error(err);
//   });

// ### Add some new vampire data

// const vampireToAdd = {
//   name: 'Count Chocula 4',
//   hair_color: 'brown',
//   eye_color: 'brown',
//   dob: new Date(1971, 2, 13, 7, 47),
//   loves: ['cereal', 'marshmallows'],
//   location: 'Minneapolis, Minnesota, US',
//   gender: 'm',
//   victims: 2000
// };

// const vampire = new Vampire(vampireToAdd);

// vampire
//   .save()
//   .then(v => {
//     console.log(v);
//   })
//   .catch(err => {
//     console.log(err);
//   });

/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

// Q2
// Vampire.find({ victims: { $gt: 500 } })
//   .then(vampires => {
//     console.log(vampires);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// Vampire.find()
//   .where('victims')
//   .gt(500)
//   .then(vampires => {
//     console.log(vampires);
//   })
//   .catch(err => {
//     console.error(err);
//   });

// Vampire.find()
//   .where('victims')
//   .gt(500)
//   .exec(function(err, vampires) {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log(vampires);
//   });

// An example of promise chain vs nest callbacks
// This example changes the name of the last vampire in the gt 500 list

//   Vampire.find()
//   .where('victims')
//   .gt(500)
//   .then(vampires => {
//     // console.log(vampires);
//     let v = vampires[vampires.length - 1];
//     v.name = 'New Vamp';
//     return v.save();
//   })
//   .then(newVamp => {
//     console.log('New Vamp');
//     console.log(newVamp);
//   })
//   .catch(err => {
//     console.error(err);
//   });

// Vampire.find()
//   .where('victims')
//   .gt(500)
//   .exec(function(err, vampires) {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     let v = vampires[vampires.length - 1];
//     v.name = 'New Vamp';
//     v.save(function(err, newVamp) {

//     });
//   });

// Q5

// MongoDB way
// Vampire.find({ $and: [{ victims: { $gt: 150 } }, { victims: { $lt: 500 } }] })
//   .then(vampires => {
//     console.log(vampires);
//   })
//   .catch(err => {
//     console.error(err);
//   });

// Mongoose way
// Vampire.find()
//   .where('victims')
//   .gt(150)
//   .where('victims')
//   .lt(500)
//   .then(vampires => {
//     console.log(vampires);
//   })
//   .catch(err => {
//     console.error(err);
//   });

/////////////////////////////////////////////////
// ### Select by exists or does not exist

/////////////////////////////////////////////////
// ### Select with OR

// Q2

// MongoDB
// Vampire.find({ loves: { $in: ['brooding', 'being tragic'] } })
//   .then(vampires => {
//     console.log(vampires);
//   })
//   .catch(err => {
//     console.error(err);
//   });

// Mongoose
// Vampire.find()
//   .where('loves')
//   .in(['brooding', 'being tragic'])
// .then(vampires => {
//   console.log(vampires);
// })
// .catch(err => {
//   console.error(err);
// });

// Q3

// Vampire.find({ $or: [{ victims: { $gte: 1000 } }, { loves: 'marshmallows' }] })
//   .then(vampires => {
//     console.log(vampires);
//   })
//   .catch(err => {
//     console.error(err);
//   });

// Vampire.find()
//   .or([{ victims: { $gte: 1000 } }, { loves: 'marshmallows' }])
//   .then(vampires => {
//     console.log(vampires);
//   })
//   .catch(err => {
//     console.error(err);
//   });

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
