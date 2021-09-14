import { useDispatch } from "react-redux";

dispatch = useDispatch();

export const getPosts = () => {
  dispatch({
    type: "post/get",
    payload: null,
  });
};

export const createPost = (payload) => {
  dispatch({
    type: "post/create",
    payload: payload,
  });
};
