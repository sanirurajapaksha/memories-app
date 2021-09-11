import React from "react";

function Header(props) {
  return (
    <div className="fixed flex w-full h-28 bg-indigo-500">
      <div className="flex w-full flex-row items-center justify-center">
        <span className="text-5xl font-sans font-bold">Memories App 💖</span>
      </div>
    </div>
  );
}

export default Header;
