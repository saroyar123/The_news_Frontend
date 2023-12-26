import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth, getUserData } from '../../Action/userAction';


const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const submitHandler=async(e)=>{
    e.preventDefault();
    // https://thenews-backend.onrender.com
    const {data}=await axios.post("/api/v1/login",{email,password});
    localStorage.setItem("token",data.data.token);
    // console.log(data.data.token)
    await dispatch(UserAuth(data.data.token))
    await dispatch(getUserData(data.data.token));
    navigate("/")
    
  }

  return (
    <>
    <div className="loginPage">
      <form  className="logFrom" onSubmit={submitHandler}>
        <input type="email" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type='password' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button type='submit'>login</button>
      </form>
      <Link className='Hlink' to={'/register'}>Register</Link>
    </div>
    </>
  )
}

export default Login

// https://thenews-backend.onrender.com