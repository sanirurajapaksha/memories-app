import React, { useRef } from "react";

function EditCard(props) {
  const inputFile = useRef(null);

  const onButtonClick = () => {
    inputFile.current.click();
  };

  return (
    <div className="flex flex-col w-96 mt-10 bg-indigo-600 ml-10 rounded-3xl shadow-xl">
      <div className="flex w-full h-14 justify-center items-center font-sans font-bold text-xl">
        <h2>Create a new Memory 🤞</h2>
      </div>
      <div className="flex w-full h-full justify-center">
        <form>
          <div>
            <label className="flex mb-2 font-sans font-bold">Creator</label>
          </div>
          <input
            id="creator"
            type="text"
            placeholder="Creator Name"
            className="flex w-80 h-9 px-3 mb-3 text-gray-800 rounded-lg focus:outline-white border-2 border-gray-200 shadow-md"
          />
          <div>
            <label className="flex mb-2 font-sans font-bold">Title</label>
          </div>
          <input
            id="title"
            type="text"
            placeholder="Title"
            className="flex w-80 h-9 px-3 mb-3 text-gray-800 rounded-lg focus:outline-white border-2 border-gray-200 shadow-md"
          />
          <div>
            <label className="flex mb-2 font-sans font-bold">Description</label>
          </div>
          <textarea
            id="description"
            type="text"
            placeholder="Description"
            className="flex w-80 h-20 px-3 mb-3 text-gray-800 rounded-lg focus:outline-white border-2 border-gray-200 shadow-md"
          />
          <div>
            <label className="flex mb-2 font-sans font-bold">
              Tags (comma separated)
            </label>
          </div>
          <input
            id="tags"
            type="text"
            placeholder="hello,saniru,travel"
            className="flex w-80 h-9 px-3 mb-3 text-gray-800 rounded-lg focus:outline-white border-2 border-gray-200 shadow-md"
          />
          <div className="btn mt-3 w-32" onClick={onButtonClick}>
            Choose Files
          </div>
          {/* Below input file is not displaying, just for reference */}
          <input
            type="file"
            id="myFile"
            name="filename"
            ref={inputFile}
            className="opacity-0 w-px h-px"
          />
          {/*End of that nasty elemet */}
          <div className="flex flex-row space-x-2 mt-3 w-full h-12 justify-between">
            <div className="btn btn-accent w-1/2">Submit</div>
            <div className="btn btn-accent w-1/2">Clear</div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditCard;
