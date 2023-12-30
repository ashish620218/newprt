import React from "react";
import { FiAlignJustify } from "react-icons/fi";

const Header = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex items-center justify-center gap-3">
          <img src="./assets/Logo.svg"></img>
          <button className="h-8 bg-gradient-to-r from-red-500 to-pink-500 px-5 py-2 text-xs rounded-2xl">
            Hoterr Is Hiring
          </button>
        </div>
        <div>
          <FiAlignJustify />
        </div>
      </div>
    </>
  );
};
export default Header;
