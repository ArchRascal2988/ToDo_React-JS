const { Todo, User }= require('../models');

const resolvers= {
    Query:{
        allTodos: async(parent, {uId})=>{
            console.log(uId);
            return await Todo.find({userId: uId});
        }
    },
    Mutation:{
        newUser: async()=>{

        },
        login: async()=>{

        },
        newToDo: async()=>{

        },
        editToDo: async()=>{

        },
        crossOff: async()=>{

        }
    }
};

module.exports= resolvers;