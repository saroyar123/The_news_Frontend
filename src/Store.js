import {configureStore} from '@reduxjs/toolkit'
import { allActionForUser, GetData,UserAuth } from './Reducer/user';
import {AllPosts, comLkUliked, PostActions} from './Reducer/post'

const store=configureStore({
    reducer:{
       UserAuth:UserAuth,
       UserData:GetData,
       PostActions:PostActions,
       AllPostsOfApp:AllPosts,
       comLkUnlike:comLkUliked,
       UserActions:allActionForUser
    }
});

export default store;