const {Schema, model} = require("mongoose");

const UserSc= new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            minLength: 8,
            unique: true
        }
    }
);

const User= model("User", UserSc);

module.exports= User;