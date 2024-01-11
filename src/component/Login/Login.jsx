import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth, getUserData } from '../../Action/userAction';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Login.css"

const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [loginAction,setLoginAction]=useState(false)
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const {loading:getUserDataLoading}=useSelector((state)=>state.UserData)

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoginAction(true);
  
    try {
      const { data } = await axios.post("https://thenews-backend.onrender.com/api/v1/login", { email, password });
      console.log(data);
      if (data.success) {
        Cookies.set("token", data.data.token, { expires: 7 });
        toast.success(data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        await dispatch(UserAuth(data.data.token));
        await dispatch(getUserData(data.data.token));
        navigate("/");
      } else {
        toast.error("Something is wrong", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } finally {
      setLoginAction(false);
    }
  };
  

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
      <ToastContainer/>
    </div>
    </>
  )
}

export default Login

// https://thenews-backend.onrender.com