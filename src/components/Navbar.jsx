import logo from "../assets/logo.png";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex fixed container mx-auto bg-white lg:justify-evenly justify-between items-center top-0 z-[20] w-full left-0 right-0 ">
      <a href="/">
        <img className="w-40" src={logo} alt="logo" />
      </a>

      <div className=" justify-between items-center gap-3 hidden lg:flex">
        <ul className="flex space-x-6 text-lg font-semibold mt-4 ">
          <li className="hover:text-pink-600">
            <a href="/">home</a>
          </li>
          <li className="hover:text-pink-600">
            <a href="/#services">services</a>
          </li>
          <li className="hover:text-pink-600">
            <a href="/#pricing">pricing</a>
          </li>
          <li className="hover:text-pink-600">
            <a href="/#clients">clients</a>
          </li>
          <li className="hover:text-pink-600">
            <a href="/#news">news</a>
          </li>
          <li className="hover:text-pink-600">
            <a href="/#contact">contact</a>
          </li>
        </ul>
      </div>

      <div className="lg:block hidden">
        <button className="items-center bg-blue-600 text-white px-10 py-3 rounded-full font-semibold hover:bg-pink-600">
          Signup
        </button>
      </div>
      <button onClick={toggleMenu} className="lg:hidden text-3xl justify-center items-center cursor-pointer">
        <HiMenu />
      </button>
      {isMenuOpen && (
        
        <div className="bg-white mt-4 absolute left-0 right-0 top-[50px] flex justify-center items-center ">

          <ul className="flex flex-col lg:flex-row text-lg font-semibold capitalize my-6 mx-auto">
            <li className="hover:text-pink-600">
              <a href="/">home</a>
            </li>
            <li className="hover:text-pink-600">
              <a href="/#services">services</a>
            </li>
            <li className="hover:text-pink-600">
              <a href="/#pricing">pricing</a>
            </li>
            <li className="hover:text-pink-600">
              <a href="/#clients">clients</a>
            </li>
            <li className="hover:text-pink-600">
              <a href="/#news">news</a>
            </li>
            <li className="hover:text-pink-600">
              <a href="/#contact">contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
