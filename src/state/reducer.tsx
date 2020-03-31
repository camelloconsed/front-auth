import { combineReducers } from 'redux'
import token from './accessToken/reducer'
import password from './password/reducer'
import error from './errors/reducer'

export default combineReducers({
    token,
    password,
    error
})
