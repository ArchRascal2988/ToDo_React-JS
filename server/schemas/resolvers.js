const { Todo, User }= require('../models');

const resolvers= {
    Query:{
        allTodos: async(parent, {uId})=>{
            return await Todo.find({userId: uId});
        }
    },
    Mutation:{
        newUser: async(parent, args)=>{
            return await User.create(args);
        },
        login: async(parent, args)=>{
            return await User.find(args);
        },
        newToDo: async(parent, args)=>{
            return await Todo.create(args);
        },
        editToDo: async(parent, {tId, task, description, urgency})=>{
            return await Todo.findOneAndUpdate({_id: tId},{$set:{"task": task, "description": description, "urgency": urgency}},{new: true});
        },
        crossOff: async(parent, args)=>{
            return await Todo.deleteOne(args);
        }
    }
};

module.exports= resolvers;