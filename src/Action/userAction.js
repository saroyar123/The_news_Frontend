import axios from "axios";

export const userRegister=(name,email,password)=>async(dispatch)=>{
    try {
      dispatch({
        type:"registerRequest"
      })
  
      const {data}=await axios.post("/api/register",{name,email,password});
  
      dispatch({
        type:"registerSuccess",
        playload:data.user
      })
      
    } catch (error) {
      dispatch({
        type: "loadUserFailure",
        playload: error.response.data.message,
      });
    }
  }