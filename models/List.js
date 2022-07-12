const {Schema, model} = require('mongoose');


const ListSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    board:{
        type: Schema.Types.ObjectId,
        ref: "board",
        required: true
    },
    rank:{
        type: Number,
        required: True
    },
    card: [{ type: Schema.Types.ObjectId, ref: "card"}]
});


module.exports = List = model('list', ListSchema);