import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getUserData } from '../../Action/userAction';


const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const dispatch=useDispatch();

  const submitHandler=async(e)=>{
    e.preventDefault();
    const {data}=await axios.post("https://thenews-backend.onrender.com/api/login",{email,password});
    localStorage.setItem("token",data.token);
    dispatch(getUserData(data.token));
  }

  return (
    <>
    <div className="loginPage">
      <form  className="logFrom" onSubmit={submitHandler}>
        <input type="email" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type='password' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button type='submit'>login</button>
      </form>
    </div>
    </>
  )
}

export default Login

// https://thenews-backend.onrender.com