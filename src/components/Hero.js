import React from "react";
import { Button } from "./button/button";
import arrow from "../assets/arrow-right.svg";
import bg from "../assets/bg.png";
import bg1 from "../assets/bg1.png";
import bg2 from "../assets/bg2.png";
import bg3 from "../assets/bg3.png";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="">
      <div className="flex sm:flex-row flex-col items-center sm:px-16 px-6 py-20 ">
        <div className="flex flex-1 ">
          <div className="">
            <h1 className="sm:text-[50px] text-[40px] text-secondary font-bold font-sora w-[400px]  leading-[56px] ">
              Show Them <br className="sm:hidden flex"/> Don’t Just Tell
            </h1>
            <p className="text-[rgba(0, 0, 0, 0.75)] font-inter text-base w-[400px] mb-10 mt-5 ">
              Help your friends and loved ones by creating and sending videos on
              how to get things done on a website.
            </p>
            <Link>
              <Button variant="primary" imgSrc={arrow} imgAlt="google">
                Install HelpMeOut
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-1 h-[448px]">
          <div>
            <div className="flex flex-1 h-[448px]">
              <div>
                <div className="flex flex-1 h-[448px]">
                  <div className="flex gap-5">
                    <div className="flex flex-col justify-between ">
                      <img
                        src={bg3}
                        className="w-[448px] h-[214px] object-cover rounded-[6px]"
                      />
                        <div className="relative">
                      <img
                        src={bg1}
                        className="w-[448px] h-[214px] object-cover rounded-[6px] "
                      />

                      <img
                        src={bg}
                        className="absolute -bottom-[70px] right-[43px] -z-10"
                      />
                    </div>
                    </div>

                    <div className="relative">
                      <img
                        src={bg2}
                        className="w-[448px] h-[448px] object-cover rounded-[6px] "
                      />

                      <img
                        src={bg}
                        className="absolute -top-[52px] left-[43px] -z-10"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
