const { AuthenticationError } = require('apollo-server-express');
const { Todo, User }= require('../models');

const resolvers= {
    Query:{
        allTodos: async(parent, args, context)=>{
            console.log(context)
            return await Todo.find({userId: context.user._id});
        }
    },
    Mutation:{
        newUser: async(parent, args)=>{
            return await User.create(args);
        },
        login: async(parent, {username, password}, context)=>{
            const loginU= await User.find({username: username});
            
            if(loginU && loginU.checkPw(password)){
                return loginU._id;
            } else throw new AuthenticationError("Could not login, username or password is inccorect.");
        },
        newToDo: async(parent, {task, description, urgency}, context)=>{
            return await Todo.create({task: task, description: description, urgency: urgency, userId: context.user._id});
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