import { ERROR_UNAUTHORIZED } from './types'

const initialState = {
  error: []
}

type State = typeof initialState
type Action = {
  type: string
  payload: object
}

export default (state: State = initialState, action: Action) => {
  const { type, payload } = action

  switch (type) {
    case ERROR_UNAUTHORIZED:
      return { ...state, error: payload }
    default:
      return state
  }
}
