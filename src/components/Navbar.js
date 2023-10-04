import React from "react";
import logo from "../assets/logo.svg";
import AuthProfileMenu from "./AuthProfileMenu";
import Authbutton from "./Authbutton";
import { Link } from "react-router-dom";
function Navbar() {
  const isAuthenticated = false;
  const isAuthbutton = false;
  return (
    <div>
      <div className="py-2 flex justify-between w-[100%] items-center h-[84px] px-16 ">
        <div >
         <Link to="/" className=" flex gap-2 items-center">
         <img src={logo} alt="logo" />
          <h4 className="font-bold text-base text-primary  font-inter">
            HelpMeOut
          </h4></Link>
        </div>

        <AuthProfileMenu isAuthenticated={isAuthenticated} />
        <Authbutton isAuthbutton={isAuthbutton} />
      </div>
    </div>
  );
}

export default Navbar;
