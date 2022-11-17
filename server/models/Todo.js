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
        }
    },
    {
        timestamps: false
    }
);

const Todo= model("todos", ToDoSc);

module.exports= Todo;