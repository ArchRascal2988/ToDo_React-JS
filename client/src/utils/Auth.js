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

    checkExpiration(){
        const { exp }= decode(this.getToken());

        if(exp < Date.now()/1000){
            this.logout();
        } else return; 
    }

    getToken(){
        const stored= localStorage.getItem('id_token');
        
        return stored
    }
}

export default new Auth();