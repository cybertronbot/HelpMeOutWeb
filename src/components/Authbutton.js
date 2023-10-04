import React, { useState } from "react";
import {Link} from "react-router-dom"
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
          <Link to="/auth/login">    Get Started</Link>
            </button>
          </div>
        
        </div>
 
       </div>
      )}
    </div>
  );
}

export default Authbutton;
