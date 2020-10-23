import mongoose from "../config";
const { Schema } = mongoose;

const ScientistSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  DOB: { type: Date, required: true },
  nationality: { type: String, required: true },
  cityOfBirth: { type: String, required: true },
  fields: [{ type: String }],
  nobelPrize: { type: Boolean, default: false },
});

const Scientist = mongoose.model("Scientist", ScientistSchema);
export default Scientist;
