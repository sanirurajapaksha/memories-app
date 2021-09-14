const initialState = {};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case "post/create":
      return { ...state, payload };

    case "post/get":
      return state;

    default:
      return state;
  }
}
