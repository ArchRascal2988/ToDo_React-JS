import { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client'; 
import { Navigate } from 'react-router-dom';

import { LOGIN, NEW_USER } from '../../utils/mutations';



const UserForm= ({mode, setMode})=>{
    const[mode, setMode]= useState(true);
    const[formState, setFormState]= useState('');

    let mutation= LOGIN;

    useEffect(()=>{
        mutation= mode ? LOGIN : NEW_USER;
    }, mode);

    const handleFormSubmit= ()=>{

    }


    if(mode){
        return(
            <div>
                <form>
                    LOGIN
                </form>
                <button onClick={setMode(!mode)}>Don't Have an Account?</button>
            </div>
        )
    } else{
        return(
            <div>
                <form>
                    SIGNUP
                </form>
                <button onClick={setMode(!mode)}>Already Have an Account?</button>
            </div>
        )
    }
}


export default UserForm;