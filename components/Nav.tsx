import React from "react";
import { BsSearch } from "react-icons/bs";

const Nav: React.FC = () => {
  return (
    <nav className=" py-4 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Website Name */}
        <a href="/">
          <h1 className="text-3xl font-bold mb-4 md:mb-0 md:mr-10">
            S.R. Stationery
          </h1>
        </a>

        {/* Search Bar */}
        <a href="/search">
          <div className="flex flex-row items-center">
            <BsSearch className="text-2xl text-gray-800 cursor-pointer" />
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
