import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import sessionReducer from './slices/session_slices';
// import themeReducer from './slices/themeSlice';

// configuracion de redux => slices
const reducers = combineReducers({
    // cart: cartReducer,
    // user: userReducer,
    session: sessionReducer
    // theme: themeReducer
});

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducers)

export default configureStore ({
    reducer: persistedReducer
});