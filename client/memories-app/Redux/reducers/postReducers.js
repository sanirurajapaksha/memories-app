const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "post/create":
      console.log(action.payload); // debugging line
      return [...state, action.payload];

    case "post/get":
      console.log(action.payload);
      return action.payload;

    default:
      return state;
  }
};

export default reducer;
