import {configureStore} from '@reduxjs/toolkit'
import { GetData,UserAuth } from './Reducer/user';
import {AllPosts, PostActions} from './Reducer/post'

const store=configureStore({
    reducer:{
       UserAuth:UserAuth,
       UserData:GetData,
       PostActions:PostActions,
       AllPostsOfApp:AllPosts
    }
});

export default store;