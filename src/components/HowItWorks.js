import React from "react";
import { feedback } from "../data/data";
import works from "../assets/works.svg"
function HowItWorks() {
  return (
   <div>
       <div className="bg-[#DEE1E6] w-[100%] h-[50px] mt-10" />
     <div className="mt-16 px-16">
      <h4 className="font-sora text-secondary text-[40px] text-center font-bold">
        How it works
      </h4>
      <div className="flex flex-wrap justify-between w-full  z-[1] relative">
        {feedback.map((item) => {
          return (
            <div className=" px-10 py-12 flex justify-center items-center flex-col max-w-[370px] my-5">
              <div className="p-2 flex justify-center items-center rounded-full w-[60px] h-[60px] bg-primary">
                <h6 className="text-[28px] font-bold text-[#FFF] font-inter">{item.step}</h6>
              </div>
              <h5 className=" text-primary text-[24px] font-semibold mt-6">
             {item.title}
              </h5>
              <p className="font-workSans font-normal text-base text-center leading-[30px] text-[#616163] my-4">
                {item.content}
              </p>
              <div>
                <img src={works}/>
              </div>
            </div>
          );
        })}
      </div>
      
    </div>
   </div>
  );
}

export default HowItWorks;
