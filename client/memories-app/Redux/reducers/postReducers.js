const initialState = {
  creator: "",
  title: "",
  description: "",
  tags: "",
  file: null,
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case "post/create":
      console.log(action.payload);
    //   return { ...state, payload };

    case "post/get":
      return state;

    default:
      return state;
  }
}
