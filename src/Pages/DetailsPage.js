import React from "react";
import play from "../assets/play.png";
import volume from "../assets/volume.png";
import setting from "../assets/setting.png";
import Edit from "../assets/edit.svg";
import Copy from "../assets/copy.svg";
import Facebook from "../assets/Facebook.svg";
import Whatsapp from "../assets/whatsapp.svg";
import Telegram from "../assets/telegram.svg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/button/button";
import video1 from "../assets/video1.png";

const DetailsPage = () => {
  return (
    <>
      <div clsssName="">
        <Navbar />

        <section className="grid grid-cols-7 gap-10 px-16 mt-10">
          <div className="col-span-3">
            <div className="flex flex-col  w-[700px]">
              <div>
                <h1 className="font-bold text-[40px] text-secondary font-sora">
                  Your video is ready!
                </h1>
              </div>
              <p className="font-sora text-[#727272] mt-4">Name</p>
              <div className="flex gap-6 items-center">
                <p className="font-semibold text-[#413C6D] font-sora text-[18px]">
                  Untitled_Video_20232509
                </p>
                <img src={Edit} alt="edit-icon" />
              </div>

              <div className="rounded-[16px] flex items-center bg-[#dcdcdf] h-[60px] w-[500px] px-3 mt-14">
                <input
                  type="text"
                  className="w-full h-full p-2 outline-none bg-[#b6b3c620] text-sm placeholder-black placeholder:text-sm font-sora"
                  placeholder="Enter email of receiver"
                />
                <button className=" bg-[#605C84] px-[16px] py-[8px] text-white rounded-[8px] cursor-pointer font-sora">
                  Send
                </button>
              </div>

              <div className="mt-10">
                <p className="text-sora text-secondary mb-2 font-semibold">
                  Video Url
                </p>
                <div className="rounded-[16px] flex justify-between items-center border border-[#929292] h-[60px] w-[500px] px-3  ">
                  <p className="text-sm font-sora">
                    https://www.helpmeout/Untitled_Video_20232509
                  </p>
                  <button className="font-sora border border-[#120B48] px-[14px] py-[8px]  rounded-[8px] cursor-pointer text-sm flex gap-2">
                    <img className="" src={Copy} alt="" />
                    Copy
                  </button>
                </div>
              </div>

              <div className="mt-12 text-[14px] font-semibold">
                <p className="mb-2">Share your video</p>
                <div className="flex items-center gap-4 font-inter">
                  <button className="rounded-lg border-2 px-4 flex py-[8px] gap-1">
                    <img src={Facebook} alt="" />
                    Facebook
                  </button>
                  <button className="rounded-lg border-2 px-4 flex py-[8px] gap-1">
                    <img src={Whatsapp} alt="" />
                    Whatsapp
                  </button>
                  <button className="rounded-lg border-2 px-4 flex py-[8px]  gap-1">
                    <img src={Telegram} alt="" />
                    Telegram
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-4 ">
            <div>
              <img className="rounded-[8px]" src={video1} />
            </div>
            <div className="flex justify-between items-center py-3 px-8">
              <h5>0:30 / 3:00</h5>
              <div className="flex items-center gap-10">
                <div className="flex flex-col items-center">
                  <img  className="w-[24px]" src={play} />
                  <h6>Play</h6>
                </div>
                <div className="flex flex-col items-center">
                  <img className="w-[24px]" src={volume} />
                  <h6>Volume</h6>
                </div>
                <div className="flex flex-col items-center">
                  <img className="w-[24px]" src={setting} />
                  <h6>Settings</h6>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="flex justify-center items-center flex-col gap-7 mt-32">
          <h4 className="text-center text-secondary font-sora text-[20px] font-semibold">
            To ensure the availability and privacy of your video,
            <br />
            we recommend saving it to your account.
          </h4>
          <Button
            variant="primary"
            paddingLess="true"
            className="px-5 py-[10px]"
          >
            Save Video
          </Button>
          <h4 className="text-primary font-sora font-semibold text-[22px] mb-7">
            <span className="text-[#7E7E7E]">Don’t have an account?</span>
            Create account
          </h4>
        </div>
        <div className="bg-[#DEE1E6] w-[100%] h-[50px] " />
        <Footer />
      </div>
    </>
  );
};

export default DetailsPage;
