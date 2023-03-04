import {configureStore} from '@reduxjs/toolkit'
import { GetData, loadUser } from './Reducer/user';

const store=configureStore({
    reducer:{
       loadUser:loadUser,
       UserData:GetData
    }
});

export default store;