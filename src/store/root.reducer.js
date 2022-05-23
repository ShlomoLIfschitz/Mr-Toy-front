import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'

import { statusReducer } from './reducers/status.reducer'
import { toyReducer } from './reducers/toy.reducer'
import { userReducer } from '../store/reducers/user.reducer.js'
import { reviewReducer } from './reducers/review.reducer'
import { systemReducer } from '../store/reducers/system.reducer'


export const rootReducer = combineReducers({
    statusModule: statusReducer,
    toyModule: toyReducer,
    userModule: userReducer,
    reviewModule: reviewReducer,
    systemModule: systemReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

