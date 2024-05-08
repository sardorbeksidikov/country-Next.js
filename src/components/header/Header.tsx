import React from "react";

import { MdOutlineDarkMode } from "react-icons/md";
import "./Header.scss";

const Header = () => {
  return (
    <header className="container">
      <div className="header">
        <div>
          <h1>Where in the world?</h1>
        </div>
        <div>
          <h5>
            {""}
            <MdOutlineDarkMode />
            Dark Mode
          </h5>
        </div>
      </div>
      <div>
        <div>
          <input type="text" placeholder="Search" />
        </div>
        <div>
          <div className="relative">
            <button className="px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:bg-gray-700">
              Dropdown
            </button>

            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 hidden">
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                Item 1
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                Item 2
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                Item 3
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
