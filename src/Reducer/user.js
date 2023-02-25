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

})