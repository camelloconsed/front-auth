import { GET_BREEDS } from "./types";

const initialState = {
  breeds: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_BREEDS:
      return {...state, breeds: payload};
    default:
      return state;
  }
}
