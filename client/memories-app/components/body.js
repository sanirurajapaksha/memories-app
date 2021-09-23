import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../Redux/actions/postActions";
import Post from "./post";
import EditCard from "./editCard";

function Body(props) {
  const dispatch = useDispatch();

  const postsFromRedux = useSelector((state) => state.postReducers);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="flex w-full h-full bg-gray-600">
      <div className="flex flex-row mt-28">
        <Post />
        <EditCard />
      </div>
    </div>
  );
}

export default Body;
