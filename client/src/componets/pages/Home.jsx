import Auth from '../../utils/Auth';
import TodoList from '../TodoList';
import { QUERY_TODOS } from '../../utils/queries'; 

import { useQuery } from '@apollo/client';
import { useEffect } from 'react';


const Home= ()=>{
    const { loading, error, data }= useQuery(QUERY_TODOS);
    setInterval(Auth.checkExpiration(), 60000);

    if(!loading){
        console.log(data, error);

        return(
            <div>
                <TodoList todoA={data.allTodos}></TodoList>
            </div>
        )   
    } else return (<div>Loading...</div>);
}


export default Home;