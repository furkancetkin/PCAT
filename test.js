const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// connect DB
mongoose.connect('mongodb://localhost/pcat', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// create schema
const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);

// create a photo
// Photo.create({
//   title: 'Photo Title 2',
//   description: 'Photo description 2 lorem ipsum',
// });

// read a photo
// Photo.find({}, (err, data) => {
//   console.log(data);
// });

// update photo
// const id = '62a5c7efa12942a6185734f4';

// Photo.findByIdAndUpdate(
//   id,
//   {
//     title: 'Photo Title 2 updatedd',
//     description: 'Photo description 2 lorem ipsum updatedd',
//   },
//   {
//       new: true
//   },
//   (err, data) => {
//     console.log(data);
//   }
// );

// delete a photo
const id = '62a5c7efa12942a6185734f4';
Photo.findByIdAndDelete(id, (err, data) => {
  console.log('photo deleted');
});
