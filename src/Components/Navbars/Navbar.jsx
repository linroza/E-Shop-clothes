import React from "react";
import DarkMode from "../Navbars/DarkMode.jsx";
import logo from "../../assets/react.svg";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa6";

const Menu = [
  {
    id: 1,
    Name: "Home",
    link: "/#",
  },
  {
    id: 2,
    Name: "To Reted",
    link: "/#services",
  },
  {
    id: 3,
    Name: "Kids Wear",
    link: "/#",
  },
  {
    id: 4,
    Name: "Men Wear",
    link: "/#",
  },
];
const DopdownLinks = [
  {
    id: 1,
    Name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    Name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    Name: "Top Rated",
    link: "/#",
  },
];
const Navbar = ({handleOrderPopup}) => {
  return (
    <div className="shadow-md bg-white dark:text-white dark:bg-gray-900  duration-200 relative z-40">
      {/* upper navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center ">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={logo} alt="logo" className="w-10 " />
            </a>
          </div>
          {/* Search Bar */}
          <div className="flex justify-between items-center gap-4 ">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
              />
              <FaSearch className="text-gray-500 group-hover:text-primary absolute top-1/2  -translate-y-1/2 right-3" />
            </div>
            <div>
              {/* Add to card button  */}
              <button
                onClick={() => handleOrderPopup()}
                className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
              >
                <span className="group-hover:block hidden transition-all duration-200">
                  order
                </span>
                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer " />
              </button>
            </div>
            <DarkMode />
          </div>
          <div>
          </div>
        </div>
      </div>
       {/* lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center ">
        <ul className="sm:flex hidden items-center gap-4 ">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="d-inline-block px-4 hover:text-primary duration-200"
              >
                {data.Name}{" "}
              </a>
            </li>
          ))}
          {/* Simple Dropdown and Links */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2 ">
              Trending Products
              <span>
                <FaCaretDown className="transition-all duuration-200 group-hover:rotate-180"></FaCaretDown>
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2  shadow-md ">
              <ul>
                {DopdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 text-black"
                    >
                      {data.Name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
