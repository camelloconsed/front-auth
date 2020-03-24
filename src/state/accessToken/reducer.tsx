import { GET_TOKEN } from './types'

const initialState = {
  token: []
}

type State = typeof initialState
type Action = {
  type: string
  payload: object
}

export default (state: State = initialState, action: Action) => {
  const { type, payload } = action

  switch (type) {
    case GET_TOKEN:
      console.log(payload)
      return { ...state, token: payload }
    default:
      return state
  }
}

type tokenElements = {
  token: Array<object>
}

export type TokenState = {
  token: tokenElements
}
