export const getPosts = () => {
  dispatch({
    type: "post/get",
    payload: null,
  });
};

export const createPost = (payload) => (dispatch) => {
  dispatch({
    type: "post/create",
    payload: payload,
  });
};
