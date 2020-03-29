import { GET_FORGOT_PASSWORD_STATUS } from './types'

const initialState: { emailStatus: number } = {
  emailStatus: 0
}

type State = typeof initialState
type Action = {
  type: string
  payload: number
}

export default (state: State = initialState, action: Action) => {
  const { type, payload } = action

  switch (type) {
    case GET_FORGOT_PASSWORD_STATUS:
      return { ...state, emailStatus: payload }
    default:
      return state
  }
}
