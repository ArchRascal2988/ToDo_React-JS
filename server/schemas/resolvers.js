const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../middleware/auth');
const { Todo, User }= require('../models');

const resolvers= {
    Query:{
        allTodos: async(parent, args, context)=>{
            if(context.id){
                return await Todo.find({userId: context.id});
            } else throw new AuthenticationError("Need to be logged in to do this.");
        }
    },
    Mutation:{
        newUser: async(parent, args)=>{
            const newU= await User.create(args);
            return {
                token: signToken(newU),
                user: newU._id
            };
        },
        login: async(parent, {username, password})=>{
            const loginU= await User.findOne({username: username});
            const check= await loginU.checkPw(password)
            
            if(loginU && check){
                return {
                    token: signToken(loginU),
                    user: loginU._id
                };
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