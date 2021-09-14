import React, { useRef, useState } from "react";
// import { useDispatch } from "react-redux";
import { createPost } from "../Redux/actions/postActions";

function EditCard() {
  const [selectedFile, setSelectedFile] = useState(null);

  const inputFile = useRef(null);

  // const dispatch = useDispatch();

  const onButtonClick = () => {
    inputFile.current.click();
  };

  const onSubmitClick = () => {
    var creator = document.getElementById("creator").value;
    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;
    var tags = document.getElementById("tags").value;

    var returnObj = {
      creator: creator,
      title: title,
      description: description,
      tags: tags,
      file: selectedFile,
    };

    createPost(returnObj);
  };

  const onClearButtonClick = () => {
    document.getElementById("creator").value = "";
    document.getElementById("myFile").value = "";
    document.getElementById("tags").value = "";
    document.getElementById("description").value = "";
    document.getElementById("title").value = "";
  };

  const onFileChange = (file) => {
    setSelectedFile(file.target.files[0]);
  };

  return (
    <div className="flex flex-col w-96 h-2/3 mt-10 bg-indigo-600 ml-10 rounded-3xl shadow-xl">
      <div className="flex w-full h-14 justify-center items-center font-sans font-bold text-xl">
        <h2>Create a new Memory 🤞</h2>
      </div>
      <div className="flex w-full h-full justify-center">
        <form encType="multipart/form-data" method="post">
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
          {/* Below input field is not displaying, just for reference */}
          <input
            type="file"
            id="myFile"
            name="filename"
            ref={inputFile}
            onChange={onFileChange}
            accept="image/*"
            className="opacity-0 w-px h-px"
          />
          {/*End of that nasty elemet */}
          <div className="flex flex-row space-x-2 mt-3 w-full h-12 justify-between">
            <div className="btn btn-accent w-1/2" onClick={onSubmitClick}>
              Submit
            </div>
            <div className="btn btn-accent w-1/2" onClick={onClearButtonClick}>
              Clear
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditCard;
