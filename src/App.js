import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header";
import Register from "./component/Register/Register";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
