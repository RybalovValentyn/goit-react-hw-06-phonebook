import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer'

// const rootReducer = combineReducers({  
//     contacts: reducer
// })


const store = configureStore({
    reducer: {
        contacts: reducer
    },
    devTools: process.env.NODE_ENV === 'development',
});

export default store