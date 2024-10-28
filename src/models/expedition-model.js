import db from "../config/db.js"

const Schema = db.Schema;

const expeditionSchema = new Schema({
    location: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    participants: [{
        type: db.Schema.Types.ObjectId,
        ref: 'Explorer',
        required: true,
    }],
    speciesFound: [{
        type: db.Schema.Types.ObjectId,
        ref: 'Species',
        required: true,
    }]
})
  
const Expedition = db.model("Expedition", expeditionSchema);
  
export default Expedition;