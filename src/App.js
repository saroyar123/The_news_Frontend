import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header";
import Register from "./component/Register/Register";
import Login from "./component/Login/Login";
import Account from "./component/Account/Account";
import CreatePost from "./component/createPost/CreatePost";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUserData, UserAuth } from "./Action/userAction";
import { getAllPosts } from "./Action/PostsAction";
import Feed from "./component/Feed/Feed";


function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
    const token=localStorage.getItem("token");
    dispatch(getAllPosts());
    dispatch(UserAuth(token));
    dispatch(getUserData(token));

  })
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}>
        <Route index element={<Feed/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/createPost" element={<CreatePost/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
