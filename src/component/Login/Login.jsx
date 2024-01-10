import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth, getUserData } from '../../Action/userAction';
import Cookies from 'js-cookie';
import "./Login.css"

const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [loginAction,setLoginAction]=useState(false)
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const {loading:getUserDataLoading}=useSelector((state)=>state.UserData)

  const submitHandler=async(e)=>{
    e.preventDefault();
    // https://thenews-backend.onrender.com
    setLoginAction(true)
    const {data}=await axios.post("https://thenews-backend.onrender.com/api/v1/login",{email,password});
    Cookies.set("token",data.data.token,{expires:7})
    console.log(data.data.token)
    await dispatch(UserAuth(data.data.token))
    await dispatch(getUserData(data.data.token));
    navigate("/")
    setLoginAction(false)
    
  }

  return (
    <>
    <div className="loginPage">
      <form  className="logFrom" onSubmit={submitHandler}>
        <input type="email" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type='password' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        {
          loginAction||getUserDataLoading?<h3>Loading...</h3>:<button type='submit'>Login</button>
        }
        
      </form>
      <div>
      <Link className='link' to={'/register'}>Register</Link>
      <Link className='link' to={'/'}>Home</Link>
      </div>
      
    </div>
    </>
  )
}

export default Login

// https://thenews-backend.onrender.com