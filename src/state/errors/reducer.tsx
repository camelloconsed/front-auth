import { ERROR_UNAUTHORIZED, ERROR_BAD_REQUEST, ERROR_SERVER, CLEAR_ERROR } from './types'

const initialState = {
  error: {
    error: '',
    error_description: ''
  }
}

type State = typeof initialState
type Action = {
  type: string
  payload: object
}

type error = {
  error: Object
}

export type Errors = {
  error: error
}

export default (state: State = initialState, action: Action) => {
  const { type, payload } = action
  switch (type) {
    case ERROR_UNAUTHORIZED:
      return { ...state, error: payload }
    case ERROR_BAD_REQUEST:
      return { ...state, error: payload }
    case ERROR_SERVER:
      return { ...state, error: payload }
    case CLEAR_ERROR:
      return initialState
    default:
      return state
  }
}
