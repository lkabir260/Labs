// 1. Require your node modules
const mongoose = require('mongoose');

// 2. Require your model
const Vampire = require('./models/vampire');
// 3. Require your extra data source
const vampireData = require('./populateVampires');
// 4. Connect your database
mongoose.connect('mongodb://localhost/vampire',
     {useNewUrlParser: true, useCreateIndex: true}

     mongoose.connection.on('connected', function() {
        console.log('Connected to vampires db');
      });
      
      setTimeout(() => {
        mongoose.disconnect();
      }, 4000);
/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.
// Vampire.create(vampireData)
//   .then(vampires => {
//     console.log(vampires);
//   })
//   .catch(err => {
//     console.error(err);
//   });

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
//  Vampire.create(vampireData)
//   .then(vampires => {
//     console.log(vampires);
//   })
//   .catch(err => {
//     console.error(err);
//   });
// ### Add some new vampire data


// const vampireToAdd = {
//   name: 'Vamp1,
//   gender: 'm',
// },
{
//   name: 'Vamp1,
//   gender: 'm',
// },

{
//   name: 'Vamp2,
//   gender: 'm',
// },
{
//   name: 'Vamp3,
//   gender: 'f,
// },
{
//   name: 'Vamp4,
//   gender: 'f',
// },
;

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



// Vampire.find({ victims: { $eq: 'f' } })
//   .then(vampires => {
//     console.log(vampires);
//   })
//   .catch(err => {
//     console.log(err);
//   });


// Vampire.find({ victims: { $gt: 500 } })
//   .then(vampires => {
//     console.log(vampires);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// Vampire.find({ victims: { $lt: 150 } })
//   .then(vampires => {
//     console.log(vampires);
//   })
//   .catch(err => {
//     console.log(err);
//   });
// Vampire.find({ victims: { $ne: 210234 } })
//   .then(vampires => {
//     console.log(vampires);
//   })
//   .catch(err => {
//     console.log(err);
//   });


// Vampire.find({  $and: [ { victims: { $gt: 150 } }, { victims: $lt: 500})
//   .then(vampires => {
//     console.log(vampires);
//   })
//   .catch(err => {
//     console.log(err);
//   });









/////////////////////////////////////////////////
// ### Select by exists or does not exist

// Vampire.find($and { title: { $exists: [] } }, victims: { $not: [] })
//   .then(vampires => {
//     console.log(vampires);
//   })
//   .catch(err => {
//     console.error(err);
//   });


// Vampire.find({ victims: { $not: [0] } }, { })
//   .then(vampires => {
//     console.log(vampires);
//   })
//   .catch(err => {
//     console.error(err);
//   });

// Vampire.find({ title: { $and: [] } })
//   .then(vampires => {
//     console.log(vampires);
//   })
//   .catch(err => {
//     console.error(err);
//   });



/////////////////////////////////////////////////
// ### Select with OR

// Vampire.find({ loves: { $in: ['New York, New York, US', 'NEw Orleans, Louisiana, US'] } })
//   .then(vampires => {
//     console.log(vampires);
//   })
//   .catch(err => {
//     console.error(err);
//   });

// Mongoose
// Vampire.find()
//   .where('location')
//   .in(['New York, New York, US', 'NEw Orleans, Louisiana, US'])
// .then(vampires => {
//   console.log(vampires);
// })
// .catch(err => {
//   console.error(err);
// });






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
