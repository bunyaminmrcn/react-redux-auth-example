import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'

import reduxThunk from 'redux-thunk';


export default ({ children, initialState = {} }) => {

    const store = configureStore({
        // Automatically calls `combineReducers`
        reducer: {},
        preloadedState: initialState,
        middleware: [reduxThunk]
    })

    return <Provider store={store}>{children}</Provider>
}