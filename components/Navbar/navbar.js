import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import schoolLogo from "../../assets/logo-sekolah.png";

const Navbar = ({}) => {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 border-b-2 border-fuchsia-600">
      <div className="flex items-center flex-shrink-0  mr-6">
        <Image src={schoolLogo} alt="logo sekolah" width="60" height="60" />
        <h2 className="ml-2 md:ml-5">Sekolah Islam Ulun Nuha</h2>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400  hover:border-white"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-full block  lg:flex lg:justify-end lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow">
          <Link href="/">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200  mr-4">
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200  mr-4">
              About
            </a>
          </Link>
          <Link href="/contact">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200  mr-4">
              Contact
            </a>
          </Link>
        </div>
        <div>
          <a
            href="#"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            Download
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
