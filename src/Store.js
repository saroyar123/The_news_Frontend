import {configureStore} from '@reduxjs/toolkit'
import { GetData, PostActions, UserAuth } from './Reducer/user';

const store=configureStore({
    reducer:{
       UserAuth:UserAuth,
       UserData:GetData,
       PostActions:PostActions
    }
});

export default store;