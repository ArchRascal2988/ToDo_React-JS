import { useQuery, useMutation } from '@apollo/client';
import { useState, useEffect } from 'react';

import { QUERY_TODOS } from '../utils/queries';
import { NEW_TODO, DELETE_TODO } from '../utils/mutations';

import TodoFocus from './TodoFocus';

const TodoList= ({todoA})=>{
    const [todo, setTodo]= useState({});
    console.log(todoA)

    return(
        <div>
            <h1>TODOS</h1>
            <div>
                {todoA.map((el, i)=>{
                    return <p data-index={i}>{el.task}</p>
                })}
            </div>
            <TodoFocus todo={todo}></TodoFocus>
        </div>
    )
}


export default TodoList;