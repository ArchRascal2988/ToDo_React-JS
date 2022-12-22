import Auth from '../../utils/Auth';

import TodoList from '../TodoList';

const Home= ()=>{
    setInterval( Auth.checkExpiration(), 60000);
    
    return(
        <div>
            Hello.
            <TodoList></TodoList>
        </div>
    )
}


export default Home;