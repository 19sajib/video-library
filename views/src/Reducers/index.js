import { combineReducers } from 'redux'

import authReducer from './AuthReducer'
import videoReducer from './VideoReducer'

export const reducers = combineReducers({ authReducer, videoReducer })