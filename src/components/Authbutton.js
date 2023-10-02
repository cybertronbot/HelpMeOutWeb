import React, { useState } from "react";

function Authbutton({ isAuthbutton}) {
  return (
    <div>
      {isAuthbutton ? (
        <div>yes</div>
      ) : (
       <div className="flex justify-between w-[100%]">
         <div >
          {" "}
          <div>
            <button className="font-sora text-base text-primary">
              Get Started
            </button>
          </div>
        
        </div>
 
       </div>
      )}
    </div>
  );
}

export default Authbutton;
