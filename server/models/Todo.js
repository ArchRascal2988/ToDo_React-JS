const {Schema, model} = require("mongoose");

const ToDoSc= new Schema(
    {
        task: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false
        },
        urgency: {
            type: Number, 
            min: 1,
            max: 3,
            required: false
        },
        userId:{
            type: Schema.Types.ObjectId,
            ref: 'user',
            required: true
        }
    },
    {
        timestamps: false
    }
);

const Todo= model("Todo", ToDoSc);

module.exports= Todo;