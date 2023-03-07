import {createReducer} from "@reduxjs/toolkit"


// for all posts action create,like,......
export const PostActions=createReducer({
    loading:false,
    userData:null

},{

    createPostRequest:(state)=>{
        state.loading=true
        state.userData=null
    },

    createPostSuccess:(state,action)=>{
        state.loading=false
        state.userData=action.playload
    },

    createPostFailure:(state,action)=>{
        state.loading=false
        state.userData=action.playload
    },

});

// get all the post from the database

export const AllPosts=createReducer({
    loading:false,
    allPosts:null
},{

    allPostsRequest:(state)=>{
        state.loading=true
        state.allPosts=null
    },

    allPostsSuccess:(state,action)=>{
        state.loading=false
        state.allPosts=action.playload
    },

    allPostsFailure:(state,action)=>{
        state.loading=false
        state.allPosts=action.playload
    },
})