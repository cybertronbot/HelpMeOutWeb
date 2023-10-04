import React from "react";

import Edit from "../assets/edit.svg";
import Copy from "../assets/copy.svg";
import Facebook from "../assets/Facebook.svg";
import Whatsapp from "../assets/whatsapp.svg";
import Telegram from "../assets/telegram.svg";
import Navbar from "../components/Navbar";

const DetailsPage = () => {
  return (
    <>
      <div clsssName="">
        <Navbar />

        <section className="flex px-16 mt-10">
          <div className="flex flex-col  w-[700px]">
            <div>
              <h1 className="font-bold text-[40px] text-secondary font-sora">
                Your video is ready!
              </h1>
            </div>
            <p className="font-sora text-[#727272] ">Name</p>
            <div className="flex gap-6 items-center">
              <p className="font-semibold text-[#413C6D] font-sora text-[20px]">
                Untitled_Video_20232509
              </p>
              <img src={Edit} alt="edit-icon" />
            </div>

            <div className="rounded-[16px] flex items-center bg-[#dcdcdf] h-[60px] w-[500px] px-4 mt-14">
              <input
                type="text"
                className="w-full h-full p-2 outline-none bg-[#b6b3c620] placeholder-black"
                placeholder="Enter email of receiver"
              />
              <button className=" bg-[#605C84] w-[90px] h-[40px] text-white rounded-[8px] cursor-pointer">
                Send
              </button>
            </div>

            <div>
              <p>Video Url</p>
              <div className="rounded-lg border gap-4 flex items-center p-4 w-[500px]">
                <p>https://www.helpmeout/Untitled_Video_20232509</p>
                <button className="px-4 py-2 flex items-center gap-1 text-[#605C84] border-2 rounded cursor-pointer">
                  <img src={Copy} alt="" />
                  Copy
                </button>
              </div>
            </div>

            <div>
              <p>Share your video</p>
              <div className="flex items-center gap-4">
                <button className="rounded-lg border-2 px-4 flex py-3 gap-1">
                  <img src={Facebook} alt="" />
                  Facebook
                </button>
                <button className="rounded-lg border-2 px-4 flex py-3 gap-1">
                  <img src={Whatsapp} alt="" />
                  Whatsapp
                </button>
                <button className="rounded-lg border-2 px-4 flex py-3 gap-1">
                  <img src={Telegram} alt="" />
                  Telegram
                </button>
              </div>
            </div>
          </div>
          <div className="h-[600px] border border-y border-black mx-2"></div>
          <div>Video</div>
        </section>
      </div>
    </>
  );
};

export default DetailsPage;
