import axios from "axios";

export const getPosts = (payload) => (dispatch) => {
  dispatch({
    type: "post/get",
    payload: payload,
  });
};

// Below function does 2 things.
export const createPost = (payload) => async (dispatch) => {
  // 1. Send the POST request to server

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  var jsonData = JSON.stringify(payload);
  var postData = await axios
    .post("http://localhost:8080/posts/", jsonData, config)
    .then(() => console.log(postData))
    .catch((err) => console.log(err));

  // 2. Create Post in REDUX State

  dispatch({
    type: "post/create",
    payload: payload,
  });
};
