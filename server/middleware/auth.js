const { AuthenticationError } = require('apollo-server-express/dist');
const {sign, verify}= require('jsonwebtoken');
const secret= 'oooh';
const expiration= '24h';


module.exports={
    authenticate: ({req})=>{
        let token= req.body.token || req.headers.authorization || req.query.token;
        if(req.headers.authorization) token = token.split(' ').pop().trim();
        
        if (!token) return req;
        
        try{
            let { data }= verify(token, secret, {maxAge: expiration});
            req.id= data._id;
        } catch{
            throw new AuthenticationError("Invalid token");
        }   
       
        return req;
    },
    signToken: ({_id})=>{
        const payload= {_id};

        return sign({data: payload}, secret, {expiresIn: expiration});
    }
}