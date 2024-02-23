import {createReducer} from "@reduxjs/toolkit"

export const UserAuth=createReducer({
    loading:false,
    data:null,
    auth:false
},{

    UserAuthRequest:(state)=>{
        state.loading=true
    },

    UserAuthSuccess:(state,action)=>{
        state.loading=false
        state.data=action.payload
        state.auth=true
    },

    UserAuthFailure:(state,action)=>{
        state.loading=false
        state.data=action.payload
    },

});


export const GetData=createReducer({
    loading:true,
    userData:{
        success:false,
        message:"",
        data:null
    }

},{

    getDataRequest:(state)=>{
        state.loading=true
    },

    getDataSuccess:(state,action)=>{
        state.loading=false
        state.userData=action.playload
    },

    getDataFailure:(state,action)=>{
        state.loading=false
        state.userData=action.playload
    },

})


// for all post actions

export const allActionForUser=createReducer({
    loading:false,
    data:null
},{

    logOutRequest:(state)=>{
        state.loading=true
        state.data=null
    },

    logOutSuccess:(state,action)=>{
        state.loading=false
        state.data=action.playload
    },

    logOutFailure:(state,action)=>{
        state.loading=false
        state.data=action.playload
    },

})
