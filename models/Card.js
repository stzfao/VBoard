const {Schema, model} = require('mongoose');


const CardSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    // description: String,
    // list:{
    //     type: Schema.Types.ObjectId,
    //     ref: "list",
    //     required: true
    // },
    // rank:{
    //     type: Number,
    //     required: true
    // },
    // task: [{ type: Schema.Types.ObjectId, ref: "task"}]
});


module.exports = Card = model('card', CardSchema);