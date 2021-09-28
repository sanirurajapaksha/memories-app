import React from "react";
import { CircularProgress } from "@material-ui/core";
import moment from "moment";

function Post(props) {
  return !props.postState.length ? (
    <CircularProgress color="inherit" size={100} />
  ) : (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 mt-10 ml-9">
      {props.postState.map((post, i) => (
        <div
          key={post[i]._id}
          className="flex flex-col w-80 h-96 bg-white rounded-2xl"
        >
          <div className="flex flex-row w-full h-8 justify-between items-center">
            <div className="ml-3">
              <h3 className="font-sans text-gray-700">{post[i].creator}</h3>
            </div>
            <div className="mr-3">🔓</div>
          </div>
          <div className="text-2xs ml-3 text-gray-700 font-sans -mt-2">
            {moment(post[i].createdAt).fromNow()}
          </div>
          <div className="mt-2 w-full h-44">
            <img
              src={post[i].selectedFile}
              className="h-full w-full object-fill"
            ></img>
          </div>
          {/*Image goes here */}
          <div className="flex w-72 h-6 ml-2 mt-1 text-gray-700 text-sm font-sans">
            {post[i].tags}
          </div>
          <div className="flex h-6 ml-2 text-gray-700 text-xl font-sans font-bold">
            {post[i].title}
          </div>
          <div className="flex h-14 ml-2 mt-1 text-gray-700 text-base font-sans overflow-y-auto">
            {post[i].description}
          </div>
          <div className="flex flex-row mb-2 w-full h-10 justify-between items-center">
            <div className="btn btn-sm btn-primary w-24 ml-3 text-lg">
              👍 {post[i].likeCount}
            </div>
            <div className="btn btn-sm btn-primary w-24 mr-3 text-lg">✌</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Post;
