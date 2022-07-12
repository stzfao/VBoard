const {Schema, model} = require('mongoose');


const BoardSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description: String,
    list: [{ type: Schema.Types.ObjectId, ref: "list"}]
});


module.exports = Board = model('board', BoardSchema);