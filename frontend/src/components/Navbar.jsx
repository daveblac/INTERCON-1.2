import React, {Fragment, useState} from "react";
import { Menu, Transition } from "@headlessui/react";
import { AiOutlineClose, AiOutlineLogout } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { HiMenuAlt3 } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Logout } from "../redux/userSlice";
import CustomButton from "./CustomButton";

const Navbar = () => {

  const user ={};
  const [isOpen, setIsOpen] = useState(false);
const handleCloseNavbar = () => {
  setIsOpen((prev) => !prev);
};


  return (
    <div className="relative bg-[#f7fdfd] z-50">
      <nav
        className="container mx-auto flex items-center justify-between p-5">
          <div>
            <Link to="/" className="text-green-600 font-bold text-xl">
            INTERCON<span className="text-blue-800">1.2</span>
            </Link>
          </div>
          <ul className="hidden lg:flex gap-10 text-base">
            <li> 
              <Link to= "/">Find Jobs</Link>
            </li>
            <li> 
              <Link to= "/">Companies</Link>
            </li>
            <li> 
              <Link to= "/upload-job">Upload Job</Link>
            </li>
            <li> 
              <Link to= "/about">About</Link>
            </li>
            
          </ul>
          <div className="hidden lg:bolck">
            {
              user?.token ?(
                <Link to="/user-auth">
                  <CustomButton
                  title="Sign In"

                  containerStyle=""/>
                  </Link>
              ):""
            }
          </div>
      </nav>
    </div>
  );
}

export default Navbar;
