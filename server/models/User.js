const {Schema, model} = require("mongoose");
const {compareSync, hashSync} = require("bcrypt");

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
    },
    {
        methods:{
            checkPw(pw){
                return compareSync(pw, this.password);
            }
        }

    }
);

UserSc.pre('save', ()=>{
    return hashSync(this.password, 10)
})

const User= model("User", UserSc);

module.exports= User;