import axios from "axios";

export const getPosts = (payload) => (dispatch) => {
  dispatch({
    type: "post/get",
    payload: payload,
  });
};

export const createPost = (payload) => async (dispatch) => {
  // Send the POST request to server

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

  // Create Post in REDUX State

  dispatch({
    type: "post/create",
    payload: payload,
  });
};
