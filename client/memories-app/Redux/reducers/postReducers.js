const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "post/create":
      console.log(action.payload + "post created!");
      return [...state, action.payload];

    case "post/get":
      return state;

    default:
      return state;
  }
};
