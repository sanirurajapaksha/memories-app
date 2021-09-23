import axios from "axios";

// Below function does 2 things.
export const getPosts = (payload) => async (dispatch) => {
  // 1. Send the GET request to server

  const data = await axios
    .get("http://localhost:8080/posts/")
    .then((postData) => postData.data)
    .catch((err) => console.log(err));
  dispatch({
    type: "post/get",
    payload: data,
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

  // 2. Create Post in REDUX State

  dispatch({
    type: "post/create",
    payload: payload,
  });
};
