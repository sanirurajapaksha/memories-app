import axios from "axios";

// Below function does 2 things.
export const getPosts = () => async (dispatch) => {
  // 1. Send the GET request to server and get the data

  var postData = null;
  await axios
    .get("http://localhost:8080/posts/")
    .then((data) => (postData = data.data))
    .then(() => console.log(postData))
    .catch((err) => console.log(err));

  // 2. Return Redux state immediately with Updated Data

  dispatch({
    type: "post/get",
    payload: postData,
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
  await axios
    .post("http://localhost:8080/posts/", jsonData, config)
    .catch((err) => console.log(err));

  // 2. Return Redux state immediately with Updated Data

  dispatch({
    type: "post/create",
    payload: payload,
  });
};
