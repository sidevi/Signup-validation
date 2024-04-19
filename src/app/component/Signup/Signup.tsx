"use client";
import Image from "next/image";
import signup from "../../../../public/images/signup.jpg";
import { useMediaQuery } from "react-responsive";

export default function Signup() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 640px)" });
  return (
    <div className="  relative ">
      
        <div className=" flex  md:hidden">
          <div className="relative flex flex-basis-1/2 w-70 h-full px-6 justify-center flex-col mx-auto rounded-lg overflow-hidden">
            <Image
              src={signup}
              alt="signup"
              width={1000}
              height={1000}
              className="bg-cover"
            />

            <footer className=" absolute">i love God</footer>
          </div>
        </div>
      
       
        <div className="  md:flex items-center hidden "> 
            
            follow  



            <div>  <Image 
              src={signup}
              alt="signup"
              width={1000}
              height={1000}
              className="bg-cover"
            /></div>  
        </div>
    
    </div>
  );
}
