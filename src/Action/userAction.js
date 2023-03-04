import axios from "axios";

export const userRegister = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "registerRequest",
    });

    const { data } = await axios.post("/api/register", {
      name,
      email,
      password,
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

    const {data}=await axios.get(`/api/getUser/${token}`);
    console.log(data)
    dispatch({
      type:"getDataSuccess",
      playload:data.data
    });
  } catch (error) {
    dispatch({
      type: "loadUserFailure",
      playload: error.response.data.message,
    });
  }
};
