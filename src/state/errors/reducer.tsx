import { ERROR_UNAUTHORIZED, ERROR_BAD_REQUEST } from './types'

const initialState = {
  error: {
    // code: '',
    // message: '',
    // payload: '',
    // resource: ''
  }
}

type State = typeof initialState
type Action = {
  type: string
  payload: object
}

export default (state: State = initialState, action: Action) => {
  const { type, payload } = action

  switch (action.type) {
    case ERROR_UNAUTHORIZED:
      const payload = action.payload
      console.log(payload)

      return { ...state, error: payload }
    // case ERROR_BAD_REQUEST:
    //   return { ...state, error: payload }
    default:
      return state
  }
}
