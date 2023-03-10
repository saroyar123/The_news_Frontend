import axios from "axios";

export const userRegister = (name, email, password,location) => async (dispatch) => {
  try {
    dispatch({
      type: "registerRequest",
    });

    const { data } = await axios.post("/api/register", {
      name,
      email,
      password,
      location
    });

    dispatch({
      type: "registerSuccess",
      playload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "loadUserFailure",
      playload: error.response.data.message,
    });
  }
};

export const getUserData = (token) => async (dispatch) => {
  try {
    dispatch({
      type:"getDataRequest"
    })
// https://thenews-backend.onrender.com
console.log("user data call")
    const {data}=await axios.get(`/api/getUser/${token}`);
    console.log(data)
    dispatch({
      type:"getDataSuccess",
      playload:data.data
    });
  } catch (error) {
    dispatch({
      type: "getDataFailure",
      playload: error.response.data.message,
    });
  }
};


export const UserAuth = (token) => async (dispatch) => {
  try {
    dispatch({
      type:"UserAuthRequest"
    })
// https://thenews-backend.onrender.com
console.log("user data call")
    const {data}=await axios.get(`/api/getUser/${token}`);
    console.log(data)
    dispatch({
      type:"UserAuthSuccess",
      playload:data
    });
  } catch (error) {
    dispatch({
      type: "UserAuthFailure",
      playload: error.response.data.message,
    });
  }
};


// action for loagout user

export const logOutUser = (token) => async (dispatch) => {
  try {
    dispatch({
      type:"logOutRequest"
    })
// https://thenews-backend.onrender.com
console.log("logout user data call")
    const {data}=await axios.get(`/api/logout/${token}`);
    console.log(data)
    dispatch({
      type:"logOutSuccess",
      playload:data
    });
  } catch (error) {
    dispatch({
      type: "logOutFailure",
      playload: error.response.data.message,
    });
  }
};



