import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'

import reduxThunk from 'redux-thunk';
import rootReducer from './reducers'

export default ({ children, initialState = {} }) => {

    const store = configureStore({
        // Automatically calls `combineReducers`
        reducer: rootReducer,
        preloadedState: { auth: { authenticated: localStorage.getItem('token') } },
        middleware: [reduxThunk]
    })

    return <Provider store={store}>{children}</Provider>
}