import axios from "axios";

export const getPosts = (payload) => (dispatch) => {
  dispatch({
    type: "post/get",
    payload: payload,
  });
};

export const createPost = (payload) => (dispatch) => {
  var postData = axios
    .post("http://localhost:8080/posts/create-post", payload)
    .then(() => console.log(postData))
    .catch((err) => console.log(err));
  dispatch({
    type: "post/create",
    payload: payload,
  });
};
