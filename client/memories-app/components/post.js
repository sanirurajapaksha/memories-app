import React from "react";

function Post(props) {
  return (
    <div className="flex flex-col w-80 h-96 bg-white rounded-2xl">
      <div className="flex flex-row w-full h-8 justify-between items-center">
        <div className="ml-3">
          <h3 className="font-sans text-gray-700">Saniru</h3>
        </div>
        <div className="mr-3">🔓</div>
      </div>
      <div className="text-2xs ml-3 text-gray-700 font-sans -mt-2">
        1 month ago
      </div>
    </div>
  );
}

export default Post;