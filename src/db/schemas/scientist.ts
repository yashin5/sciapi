import mongoose from "../config";
const { Schema } = mongoose;

// This Schema is responsible to do validations in the DB and create the structure for the 
// scientists documents. 
const ScientistSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  DOB: { type: Date, required: true },
  nationality: { type: String, required: true },
  cityOfBirth: { type: String, required: true },
  fields: [{ type: String }],
  nobelPrize: { type: Boolean, default: false },
});

// indexing first and last name to be unique together
ScientistSchema.index({ firstName: 1, lastName: 1 }, { unique: true });

const Scientist = mongoose.model("Scientist", ScientistSchema);
export default Scientist;
