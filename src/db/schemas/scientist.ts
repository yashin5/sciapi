import mongoose from '../config'
const { Schema } = mongoose;

const ScientistSchema = new Schema({
  name:  {type: String, unique: true},
  DOB: Date,
  nationality: String,
  cityOfBirth: String,
  fields: [String],
  nobelPrize: Boolean,
});

const Scientist = mongoose.model('Scientist', ScientistSchema)
export default Scientist;