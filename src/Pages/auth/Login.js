import React from "react";
import logo from "../../assets/logo.svg";
import google from "../../assets/Google svg.svg";
import or from "../../assets/or.png";
function Login() {
  return (
    <div>
      <div className="px-16 py-10">
        {" "}
        <div className=" flex gap-2 items-center">
          <img src={logo} alt="logo" />
          <h4 className="font-bold text-base text-primary  font-inter">
            HelpMeOut
          </h4>
        </div>
        <div className="w-[100%] flex justify-center items-center">
          <div className=" w-[35%] h-[80vh] flex justify-center  ">
            <form>
              <h4 className="text-secondary font-inter font-bold text-[26px] text-center mb-2">
                Log in or Sign up
              </h4>
              <p className="text-center font-inter text-[#434343] text-sm mb-8">
                Join millions of others in sharing successful moves on
                HelpMeOut.
              </p>
              <button className="w-[100%] flex justify-center gap-[16px] items-center text-lg h-[48px] border-[1px] border-secondary rounded-[12px] ">
                <img src={google} alt="google" />
                <h5> Login with Google</h5>
              </button>
              <button className="w-[100%] flex justify-center gap-[16px] items-center text-lg h-[48px] border-[1px] border-secondary text-secondary rounded-[12px] mt-6">
                <img src={google} alt="google" />
                <h5> Login with Google</h5>
              </button>
              <img src={or} className="my-5" />
              <div className="mb-4 font-workSans">
              <label className="mb-[12px] text-sm font-medium">
                Email 
              </label>
              <input
                className="sm:h-[48px] h-[42px] pl-2 outline-none w-[100%] text-[#FFF] placeholder:text-[#FFF] placeholder:text-sm border-[1px] border-[#B6B3C6] rounded-[12px]"
                type="text"
              
              />
            </div>
              <div className="mb-4 font-workSans">
              <label className="mb-[12px] text-sm font-medium">
               Password
              </label>
              <input
                className="sm:h-[48px] h-[42px] pl-2 outline-none w-[100%] text-[#FFF] placeholder:text-[#FFF] placeholder:text-sm border-[1px] border-[#B6B3C6] rounded-[12px]"
                type="text"
              
              />
            </div>
       
              <button
             
                className="w-[100%] h-[48px] bg-primary text-base text-workSans rounded-[8px] text-white"
              >
               Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
