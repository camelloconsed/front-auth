import { GET_BREEDS } from './types'

const initialState = {
  breeds: []
}

type State = typeof initialState
type Action = {
  type: string
  payload: Array<object>
}

export default (state: State = initialState, action: Action) => {
  const { type, payload } = action

  switch (type) {
    case GET_BREEDS:
      return { ...state, breeds: payload }
    default:
      return state
  }
}
