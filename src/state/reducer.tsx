import { combineReducers } from 'redux'
import token from './accessToken/reducer'
import error from './errors/reducer'

export default combineReducers({ token, error })
