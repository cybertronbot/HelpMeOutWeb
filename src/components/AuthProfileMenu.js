import React, { useState } from "react";

function AuthProfileMenu({ isAuthenticated }) {
  return (
    <div>
      {isAuthenticated ? (
        <div></div>
      ) : (
       <div className="flex justify-between w-[100%]">
         <div >
          {" "}
          <nav>
            <ul className="flex gap-7 font-workSans font-semibold text-base">
              <li>Features</li>
              <li>How It Works</li>
            </ul>
            
          </nav>
        
        </div>
 
       </div>
      )}
    </div>
  );
}

export default AuthProfileMenu;
