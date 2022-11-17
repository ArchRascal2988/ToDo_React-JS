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
            validate: {
                validator: (s)=> /(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z])/.test(s),
                message: ()=> 'Passwords must be at least 8 characters long (max 20) and contain at least one uppercase, lowercase, numerical, and special character.'
            }
        }
    }
);

const Users= model("users", UserSc);

module.exports= Todos;