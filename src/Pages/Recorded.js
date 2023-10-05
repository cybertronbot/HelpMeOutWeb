import React from "react";
import logo from "../assets/logo.svg";
import AuthProfileMenu from "../components/AuthProfileMenu";
import Authbutton from "../components/Authbutton";
import video from "../assets/video.png"

function Recorded() {
  const isAuthenticated = true;
  const isAuthbutton = false;
  return (
    <div>
      <div className="py-2 flex justify-between w-[100%] items-center h-[84px] px-16 ">
        <div className=" flex gap-2 items-center">
          <img src={logo} alt="logo" />
          <h4 className="font-bold text-base text-primary  font-inter">
            HelpMeOut
          </h4>
        </div>

        <AuthProfileMenu isAuthenticated={isAuthenticated} />
        <Authbutton isAuthbutton={isAuthbutton} />
      </div>
      <div className="px-16">
        {" "}
        <h4 className="font-sora text-secondary text-[28px] font-bold">
          Hello, John Mark
        </h4>
        <h6 className="font-workSans text-secondary my-2">
          Here are your recorded videos
        </h6>
      </div>
      <div className="flex md:flex-row  gap-10 flex-col px-16">
       
        <div className="  ">
          <img src={video} />
        </div>
        <div className="">
          <img src={video} />
        </div>
       
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default Recorded;
