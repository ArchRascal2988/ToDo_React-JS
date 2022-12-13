const { AuthenticationError } = require('apollo-server-express');
const { Todo, User }= require('../models');

const resolvers= {
    Query:{
        allTodos: async(parent, args, {_id})=>{
            return await Todo.find(_id);
        }
    },
    Mutation:{
        newUser: async(parent, args)=>{
            const newU= await User.create(args);
            return newU._id;
        },
        login: async(parent, {username, password}, context)=>{
            const loginU= await User.find({username: username});
            
            if(loginU && loginU.checkPw(password)){
                return loginU._id;
            } else throw new AuthenticationError("Could not login, username or password is inccorect.");
        },
        newToDo: async(parent, args)=>{
            return await Todo.create(args);
        },
        editToDo: async(parent, args)=>{
            return await Todo.findOneAndUpdate({_id: tId},{$set:{args}},{new: true});
        },
        crossOff: async(parent, args)=>{
            return await Todo.deleteOne(args);
        }
    }
};

module.exports= resolvers;