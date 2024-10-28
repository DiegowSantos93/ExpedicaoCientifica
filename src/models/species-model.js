import db from "../config/db.js"

const Schema = db.Schema;

const speciesSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    discoveryLocation: {
        type: String,
        required: true,
    },
    rarity: {
        type: Number,
        required: true,
    },
    documented: {
        type: Boolean,
        default: false
    }
})
  
const Specie = db.model("Specie", speciesSchema);
  
export default Specie;