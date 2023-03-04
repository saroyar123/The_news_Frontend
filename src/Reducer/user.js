import {createReducer} from "@reduxjs/toolkit"

export const loadUser=createReducer({},{

    loadUserRequest:(state)=>{
        state.loading=true
        state.isAuthentication=false
    },

    loadUserSuccess:(state,action)=>{
        state.loading=false
        state.isAuthentication=true
        state.user=action.playload
    },

    loadUserFailure:(state,action)=>{
        state.loading=false
        state.isAuthentication=false
        state.error=action.playload
    },

});


export const GetData=createReducer({
    loading:false,
    userData:null

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