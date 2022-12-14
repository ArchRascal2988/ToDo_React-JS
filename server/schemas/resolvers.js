const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../middleware/auth');
const { Todo, User }= require('../models');

const resolvers= {
    Query:{
        allTodos: async(parent, args, context)=>{
            console.log(context)
            if(context.id){
                return await Todo.find({userId: context.id});
            } else throw new AuthenticationError("Need to be logged in to do this.");
        }
    },
    Mutation:{
        newUser: async(parent, args)=>{
            const newU= await User.create(args);
            const token= signToken(newU);
            
            return {token, currUser: newU};
        },
        login: async(parent, {username, password}, context)=>{
            const loginU= await User.find({username: username});
            
            if(loginU && loginU.checkPw(password)){
                const token= signToken(loginU);
            
                return {token, loginU};
            } else throw new AuthenticationError("Could not login, username or password is inccorect.");
        },
        newToDo: async(parent, {task, description, urgency}, {id})=>{
            return await Todo.create({task: task, description: description, urgency: urgency, userId: id});
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