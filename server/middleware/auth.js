const { AuthenticationError } = require('apollo-server-express/dist');
const jwt= require('jsonwebtoken');
const secret= 'oooh';
const expiration= '24h';


module.exports={
    authentication: ({req})=>{
        let token= req.body.token || req.headers.authentication || req.query.token;
        try{
            if (!token) return req;
            else req.user= jwt.verify(token, secret, {maxAge: expiration});
        } catch{
            throw new AuthenticationError("Invalid token");
        }

        return req;
    },
    signToken: ({id})=>{
        const payload= {id};

        return jwt.sign({data: payload}, secret, {expiresIn: expiration});
    }
}