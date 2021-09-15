import axios from "axios";

export const getPosts = (payload) => (dispatch) => {
  dispatch({
    type: "post/get",
    payload: payload,
  });
};

export const createPost = (payload) => async (dispatch) => {
  var jsonData = JSON.stringify(payload);
  var postData = await axios
    .post("http://localhost:8080/posts/create-post", jsonData, {
      baseURL: "http://localhost:8080",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    })
    .then(() => console.log(postData))
    .catch((err) => console.log(err));
  dispatch({
    type: "post/create",
    payload: payload,
  });
};
