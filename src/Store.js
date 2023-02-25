import {configureStore} from '@reduxjs/toolkit'
import { loadUser } from './Reducer/user';

const store=configureStore({
    reducer:{
       loadUser:loadUser
    }
});

export default store;