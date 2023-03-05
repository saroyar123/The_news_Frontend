import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header";
import Register from "./component/Register/Register";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import Account from "./component/Account/Account";
import CreatePost from "./component/createPost/CreatePost";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUserData, UserAuth } from "./Action/userAction";

function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
    const token=localStorage.getItem("token");
    dispatch(UserAuth(token));
    dispatch(getUserData(token));

  })
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/createPost" element={<CreatePost/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
