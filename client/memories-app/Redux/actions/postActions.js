import axios from "axios";

export const getPosts = (payload) => (dispatch) => {
  dispatch({
    type: "post/get",
    payload: payload,
  });
};

export const createPost = (payload) => async (dispatch) => {
  const config = {
    headers: { "Access-Control-Allow-Origin": "http://localhost:8080/" },
  };
  var jsonData = JSON.stringify(payload);
  var postData = await axios
    .post("http://localhost:8080/posts/create-post", payload, config)
    .then(() => console.log(postData))
    .catch((err) => console.log(err));
  dispatch({
    type: "post/create",
    payload: payload,
  });
};
