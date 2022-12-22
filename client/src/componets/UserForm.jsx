import { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client'; 
import { Navigate } from 'react-router-dom';

import { LOGIN, NEW_USER } from '../utils/mutations';



const UserForm= ()=>{
    const[mode, setMode]= useState(true);
    const[formState, setFormState]= useState({
        
    });
    let mutation= LOGIN;

    useEffect(()=>{
        mutation= mode ? LOGIN : NEW_USER
        console.log(mutation, mode)
    }, [mode]);

    const handleFormSubmit= ()=>{

    }


    if(mode){
        return(
            <div>
                <h1>Signup</h1>
                <form>
                    <label htmlFor="userI"></label>
                    <input id='userI' type='text'></input>
                    <label htmlFor="userP"></label>
                    <input id='userP' type='password'></input>
                    <input type='submit' onSubmit={(event)=> {
                        event.preventDefault();
                        handleFormSubmit()}}></input>
                </form>
                <button onClick={()=>setMode(!mode)}>Don't Have an Account?</button>
            </div>
        )
    } else{
        return(
            <div>
                <h1>Signup</h1>
                <form>
                    <label htmlFor="userI"></label>
                    <input id='userI' type='text'></input>
                    <label htmlFor="userP"></label>
                    <input id='userP' type='password'></input>
                    <input type='submit' onSubmit={(event)=> {
                        event.preventDefault();
                        handleFormSubmit()}}></input>
                </form>
                <button onClick={()=>setMode(!mode)}>Already Have an Account?</button>
            </div>
        )
    }
}


export default UserForm;