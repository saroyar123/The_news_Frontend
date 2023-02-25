import React from 'react'
import { useState } from 'react'
import {Button} from '@mui/material'
import { userRegister } from '../../Action/userAction';
import {useDispatch} from 'react-redux'

function Register() {

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const dispatch=useDispatch();

    const submitHandler = async (e) => {
        e.preventDefault();
        await dispatch(userRegister(name, email, password));
  
    
      }


  return (
    <div>
        <form onSubmit={submitHandler} >
            <input type='text' placeholder='name' value={name} onChange={(e)=>setName(e.target.value)} />
            <input type='email' placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type='password' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
            <Button type='submit' >submit</Button>

        </form>
    </div>
  )
}

export default Register;