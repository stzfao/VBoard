const {Schema, model} = require('mongoose');


const TaskSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    status: Boolean, 
    card: {
        type: Schema.Types.ObjectId, 
        ref: "card",
        required: true
    }
});


module.exports = Task = model('task', TaskSchema);