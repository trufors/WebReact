import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";



let reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    usersPage: usersReducer
})

let store = configureStore({reducer: reducers});

export default store