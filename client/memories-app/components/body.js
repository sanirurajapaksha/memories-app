import React from "react";
import Post from "./post";

function Body(props) {
  return (
    <div className="flex w-full h-full bg-gray-600">
      <div className="flex flex-row mt-28">
        <Post />
      </div>
    </div>
  );
}

export default Body;
