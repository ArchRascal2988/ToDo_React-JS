const {Schema, model} = require("mongoose");

const ToDoSc= new Schema(
    {
        task: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        isDone: {
            type: Boolean,
            required: true,
            default: false
        },
        urgency: {
            type: Number, 
            min: 1,
            max: 3,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Todos= model("todos", ToDoSc);

module.exports= Todos;