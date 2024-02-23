import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header";
import Register from "./component/Register/Register";
import Login from "./component/Login/Login";
import Account from "./component/Account/Account";
import CreatePost from "./component/createPost/CreatePost";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserData, UserAuth } from "./Action/userAction";
import { getAllPosts } from "./Action/PostsAction";
import Feed from "./component/Feed/Feed";
import Cookies from "js-cookie";
import { ToastContainer } from "react-toastify";
import PageNotFound from "./component/PageNotFound/PageNotFound";

function App() {
  const dispatch = useDispatch();

  const { auth } = useSelector((state) => state.UserAuth);
  useEffect(() => {
    const token = Cookies.get("token");
    dispatch(getAllPosts());
    dispatch(UserAuth(token));
  }, [auth]);
  return (<>
  <ToastContainer/>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header  auth={auth}/>}>
          <Route index element={<Feed />} />
          {auth === true || Cookies.get("token")!==undefined?(
            <>
              <Route path="/account" element={<Account />} />
              <Route path="/createPost" element={<CreatePost />} />
            </>
          ) : (
            <></>
          )}
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  </>
    
  );
}

export default App;
