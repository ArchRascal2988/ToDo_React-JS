import { useQuery, useMutation } from '@apollo/client';
import { useState, useEffect } from 'react';

import { QUERY_TODOS } from '../utils/queries';
import { NEW_TODO, DELETE_TODO } from '../utils/mutations';

import TodoFocus from '../TodoFocus';

const TodoList= ()=>{
    const [todo, setTodo]= useState('');


    return(
        <div>
            <div>TODOS</div>
            <TodoFocus todo={todo}></TodoFocus>
        </div>
    )
}


export default TodoList;