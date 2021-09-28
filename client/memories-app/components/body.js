import React from "react";
import { useSelector } from "react-redux";
import Post from "./post";
import EditCard from "./editCard";

function Body() {
  const postsFromRedux = useSelector((state) => state.postReducers);
  return (
    <div className="flex w-full h-full bg-gray-600">
      <div className="flex flex-row mt-28">
        {!postsFromRedux.length ? (
          <div className="flex w-full h-full">
            <Post postState={postsFromRedux} />
          </div>
        ) : (
          <>
            <Post postState={postsFromRedux} />
            <EditCard />
          </>
        )}
      </div>
    </div>
  );
}

export default Body;
