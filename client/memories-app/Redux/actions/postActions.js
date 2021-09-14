export const getPosts = (payload) => (dispatch) => {
  dispatch({
    type: "post/get",
    payload: payload,
  });
};

export const createPost = (payload) => (dispatch) => {
  dispatch({
    type: "post/create",
    payload: payload,
  });
};
