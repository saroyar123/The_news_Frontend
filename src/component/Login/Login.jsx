import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserData } from '../../Action/userAction';


const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const dispatch=useDispatch();

  const submitHandler=async(e)=>{
    e.preventDefault();
    // https://thenews-backend.onrender.com
    const {data}=await axios.post("/api/v1/login",{email,password});
    console.log(data)
    localStorage.setItem("token",data.token);
    dispatch(getUserData(data.token));
    // window.location.replace("http://localhost:3000/")
  }

  return (
    <>
    <div className="loginPage">
      <form  className="logFrom" onSubmit={submitHandler}>
        <input type="email" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type='password' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button type='submit'>login</button>
      </form>
      <Link className='Hlink' to={'register'}>Register</Link>
    </div>
    </>
  )
}

export default Login

// https://thenews-backend.onrender.com