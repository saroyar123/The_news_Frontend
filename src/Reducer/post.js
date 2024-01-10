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
    loading:true,
    call:0,
    allPosts:{
        success:false,
        message:"",
        data:null
    }
},{

    allPostsRequest:(state)=>{
        state.loading=true
        state.allPosts=null
    },

    allPostsSuccess:(state,action)=>{
        state.loading=false
        state.call+=1
        state.allPosts=action.playload
    },

    allPostsFailure:(state,action)=>{
        state.loading=false
        state.allPosts=action.playload
    },
})

// reducer for like,unlike,comment


export const comLkUliked=createReducer({
    loading:true,
    message:"",
    }
,{
 
//    like the post reducers

    likePostRequest:(state)=>{
        state.loading=true
        state.message="wait for like api call"
    },

    likePostSuccess:(state,action)=>{
        state.loading=false
        state.message=action.playload
    },

    likePostFailure:(state,action)=>{
        state.loading=false
        state.message=action.playload
    },

// unlike the post reducers
    unLikePostRequest:(state)=>{
        state.loading=true
        state.message="wait for unlike api call"
    },

    unLikePostSuccess:(state,action)=>{
        state.loading=false
        state.message=action.playload
    },

    unLikePostFailure:(state,action)=>{
        state.loading=false
        state.message=action.playload
    },


    // comment on the post reducers call

    commentRequest:(state)=>{
        state.loading=true
        state.message="wait for comment api call"
    },

    commentSuccess:(state,action)=>{
        state.loading=false
        state.message=action.playload
    },

    commentFailure:(state,action)=>{
        state.loading=false
        state.message=action.playload
    },


})