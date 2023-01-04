import decode from 'jwt-decode';
class Auth {
    login(jwt){
        localStorage.setItem('id_token', jwt);
        window.location.replace('/home');
    }

    logout(){
        localStorage.removeItem();
        window.location.replace('/');
    }

    loggedIn(){
        return this.getToken() ? true : false;
    }

    checkExpiration(){
        const { exp }= decode(this.getToken);

        if(exp < Date.now()/1000){
            this.logout();
        } else return; 
    }

    getToken(){
        return localStorage.getItem('id_token');
    }
}

export default new Auth();