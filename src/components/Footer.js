import React from "react"
import footerlogo  from "../assets/footerlogo.png"
import { footerLinks} from "../data/data"

function Footer() {
  return (
    <div className='flex justify-center items-center bg-primary px-16 py-10 flex-col'>
      <div className='flex justify-center items-start md:flex-row flex-col w-full'>
        <div className='flex-1 flex items-center gap-2 justify-start  mt-10'>
          <img
            src={footerlogo}
            className='w-[40x] h-[40px] object-contain'
            alt=''
          />
         <h4 className="font-bold text-base text-white  font-inter">
            HelpMeOut
          </h4>
        </div>
        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
          {footerLinks.map((item) => (
            <div className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
              <h4 className="font-sora font-semibold text-[18px] leading-[27px] text-[#FFF]">{item.title}</h4>
              <ul className="mt-4">
             {item.links.map((item)=>{
              return(
              <li className="font-workSans text-[#FFF] font-normal text-[16px] leading-[24px]  hover:text-secondary cursor-pointer mb-4">{item.name}</li>
              )
             })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    
    </div>
  )
}

export default Footer