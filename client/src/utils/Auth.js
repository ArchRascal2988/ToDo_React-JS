import { decode } from 'jwt-decode';

class Auth {
    login(jwt){
        localStorage.setItem('currUser', jwt);
        window.location= '/home';
    }

    logout(){
        localStorage.removeItem();
        window.location= '/';
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

export default new Auth;