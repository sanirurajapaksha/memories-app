import React from "react";
import Post from "./post";

function Body(props) {
  return (
    <div className="flex flex-row w-full h-full bg-gray-600">
      <Post />
    </div>
  );
}

export default Body;
