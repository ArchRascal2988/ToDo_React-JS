import decode from 'jwt-decode';
import { Navigate } from 'react-router-dom';
class Auth {
    login(jwt){
        localStorage.setItem('currUser', jwt);
    }

    logout(){
        localStorage.removeItem();
        <Navigate to={'/'}></Navigate>
    }

    loggedIn(){
        return this.getToken() ? true : false;
    }

    checkExpiration(token){
        const { exp }= decode(token);

        if(exp < Date.now()/1000){
            this.logout();
        } else return; 
    }

    getToken(){
        return localStorage.getItem('currUser');
    }
}

export default new Auth();