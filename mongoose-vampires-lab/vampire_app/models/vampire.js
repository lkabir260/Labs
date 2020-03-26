const mongoose = require('mongoose');

const Schema = mongoose.Schema;
 
const movieSchema = new Schema({
name: 'Vampire Cat',
  hair_color: 'blonde',
  eye_color: 'brown',
  dob: new Date(1000, 2, 13, 7, 47),
  loves: ['kitty chow','mice', 'yarn'],
  location: 'Minneapolis, Minnesota, US',
  gender: 'm',
  victims: 100,000,
});