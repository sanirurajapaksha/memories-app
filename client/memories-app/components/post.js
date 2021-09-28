import React from "react";
import { CircularProgress } from "@material-ui/core";

function Post(props) {
  return !props.postState.length ? (
    <CircularProgress color="inherit" size={100} />
  ) : (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 mt-10 ml-9"></div>
  );
}

export default Post;

// {/* <div className="flex flex-col w-80 h-96 bg-white rounded-2xl">
//         <div className="flex flex-row w-full h-8 justify-between items-center">
//           <div className="ml-3">
//             <h3 className="font-sans text-gray-700">Saniru</h3>
//           </div>
//           <div className="mr-3">🔓</div>
//         </div>
//         <div className="text-2xs ml-3 text-gray-700 font-sans -mt-2">
//           1 month ago
//         </div>
//         <div className="mt-2 w-full h-44 bg-green-200"></div>
//         {/*Image goes here */}
//         <div className="flex w-72 h-6 ml-2 mt-1 text-gray-700 text-sm font-sans">
//           Tags, goes here, tadatada
//         </div>
//         <div className="flex h-6 ml-2 text-gray-700 text-xl font-sans font-bold">
//           Title, goes here, tadatada
//         </div>
//         <div className="flex h-14 ml-2 mt-1 text-gray-700 text-base font-sans overflow-y-auto">
//           Description, goes here, tadatada and this is the description
//         </div>
//         <div className="flex flex-row mb-2 w-full h-10 justify-between items-center">
//           <div className="btn btn-sm btn-primary w-24 ml-3 text-lg">👍 10</div>
//           <div className="btn btn-sm btn-primary w-24 mr-3 text-lg">✌</div>
//         </div>
//       </div> */}

// {/* <div className="flex flex-col w-80 h-96 bg-white rounded-2xl">
//         <div className="flex flex-row w-full h-8 justify-between items-center">
//           <div className="ml-3">
//             <h3 className="font-sans text-gray-700">Saniru</h3>
//           </div>
//           <div className="mr-3">🔓</div>
//         </div>
//         <div className="text-2xs ml-3 text-gray-700 font-sans -mt-2">
//           1 month ago
//         </div>
//         <div className="mt-2 w-full h-44 bg-green-200"></div>
//         {/*Image goes here */}
//         <div className="flex w-72 h-6 ml-2 mt-1 text-gray-700 text-sm font-sans">
//           Tags, goes here, tadatada
//         </div>
//         <div className="flex h-6 ml-2 text-gray-700 text-xl font-sans font-bold">
//           Title, goes here, tadatada
//         </div>
//         <div className="flex h-14 ml-2 mt-1 text-gray-700 text-base font-sans overflow-y-auto">
//           Description, goes here, tadatada and this is the description
//         </div>
//         <div className="flex flex-row mb-2 w-full h-10 justify-between items-center">
//           <div className="btn btn-sm btn-primary w-24 ml-3 text-lg">👍 10</div>
//           <div className="btn btn-sm btn-primary w-24 mr-3 text-lg">✌</div>
//         </div>
//       </div>
//       <div className="flex flex-col w-80 h-96 bg-white rounded-2xl">
//         <div className="flex flex-row w-full h-8 justify-between items-center">
//           <div className="ml-3">
//             <h3 className="font-sans text-gray-700">Saniru</h3>
//           </div>
//           <div className="mr-3">🔓</div>
//         </div>
//         <div className="text-2xs ml-3 text-gray-700 font-sans -mt-2">
//           1 month ago
//         </div>
//         <div className="mt-2 w-full h-44 bg-green-200"></div>
//         {/*Image goes here */}
//         <div className="flex w-72 h-6 ml-2 mt-1 text-gray-700 text-sm font-sans">
//           Tags, goes here, tadatada
//         </div>
//         <div className="flex h-6 ml-2 text-gray-700 text-xl font-sans font-bold">
//           Title, goes here, tadatada
//         </div>
//         <div className="flex h-14 ml-2 mt-1 text-gray-700 text-base font-sans overflow-y-auto">
//           Description, goes here, tadatada and this is the description
//         </div>
//         <div className="flex flex-row mb-2 w-full h-10 justify-between items-center">
//           <div className="btn btn-sm btn-primary w-24 ml-3 text-lg">👍 10</div>
//           <div className="btn btn-sm btn-primary w-24 mr-3 text-lg">✌</div>
//         </div>
//       </div>
//       <div className="flex flex-col w-80 h-96 bg-white rounded-2xl">
//         <div className="flex flex-row w-full h-8 justify-between items-center">
//           <div className="ml-3">
//             <h3 className="font-sans text-gray-700">Saniru</h3>
//           </div>
//           <div className="mr-3">🔓</div>
//         </div>
//         <div className="text-2xs ml-3 text-gray-700 font-sans -mt-2">
//           1 month ago
//         </div>
//         <div className="mt-2 w-full h-44 bg-green-200"></div>
//         {/*Image goes here */}
//         <div className="flex w-72 h-6 ml-2 mt-1 text-gray-700 text-sm font-sans">
//           Tags, goes here, tadatada
//         </div>
//         <div className="flex h-6 ml-2 text-gray-700 text-xl font-sans font-bold">
//           Title, goes here, tadatada
//         </div>
//         <div className="flex h-14 ml-2 mt-1 text-gray-700 text-base font-sans overflow-y-auto">
//           Description, goes here, tadatada and this is the description
//         </div>
//         <div className="flex flex-row mb-2 w-full h-10 justify-between items-center">
//           <div className="btn btn-sm btn-primary w-24 ml-3 text-lg">👍 10</div>
//           <div className="btn btn-sm btn-primary w-24 mr-3 text-lg">✌</div>
//         </div>
//       </div> */}
