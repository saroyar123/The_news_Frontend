import axios from "axios";

export const userRegister = (name, email, password,location) => async (dispatch) => {
  try {
    dispatch({
      type: "registerRequest",
    });

    const { data } = await axios.post("/api/v1/register", {
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
      playload: error.response.data,
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
    const {data}=await axios.get(`/api/v1/getUser`,{
      headers:{
        "autharization":`Bearer ${token}`
      }
    });
    console.log(data)
    dispatch({
      type:"getDataSuccess",
      playload:data
    });
  } catch (error) {
    dispatch({
      type: "getDataFailure",
      playload: error.response.data,
    });
  }
};


export const UserAuth = (token) => async (dispatch) => {
  try {
    dispatch({
      type:"UserAuthRequest"
    })
// https://thenews-backend.onrender.com
// console.log("user data call")
// console.log(token)
    const {data}=(await axios.get(`/api/v1/getUser`,{
      headers:{
        "autharization":`Bearer ${token}`
      }
    }));
    // console.log(data)
    dispatch({
      type:"UserAuthSuccess",
      playload:data
    });
  } catch (error) {
    dispatch({
      type: "UserAuthFailure",
      playload: error.response.data,
    });
  }
};


// action for loagout user

// export const logOutUser = (token) => async (dispatch) => {
//   try {
//     dispatch({
//       type:"logOutRequest"
//     })
// // https://thenews-backend.onrender.com
// console.log("logout user data call")
//     const {data}=await axios.get(`/api/v1/logout/${token}`);
//     console.log(data)
//     dispatch({
//       type:"logOutSuccess",
//       playload:data
//     });
//   } catch (error) {
//     dispatch({
//       type: "logOutFailure",
//       playload: error.response.data,
//     });
//   }
// };



