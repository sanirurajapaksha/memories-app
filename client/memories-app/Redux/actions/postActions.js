export const getPosts = (payload) => ({
  type: "post/get",
  payload,
});

export const createPost = (payload) => ({
  type: "post/create",
  payload,
});
