import {createReducer} from "@reduxjs/toolkit"

export const UserAuth=createReducer({
    loading:false,
    Auth:false
},{

    UserAuthRequest:(state)=>{
        state.loading=true
        state.Auth=false
    },

    UserAuthSuccess:(state,action)=>{
        state.loading=false
        state.Auth=action.playload
    },

    UserAuthFailure:(state,action)=>{
        state.loading=false
        state.isAuthentication=false
    },

});


export const GetData=createReducer({
    loading:false,
    userData:[]

},{

    getDataRequest:(state)=>{
        state.loading=true
        state.userData=null
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
