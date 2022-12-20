import { checkExpiration } from '../../utils/Auth';
import { useState, useEffect } from 'react';

import TodoList from '../TodoList';

const Home= ()=>{
    setInterval( checkExpiration(), 60000)

    return(
        <TodoList></TodoList>
    )
}


export default Home;