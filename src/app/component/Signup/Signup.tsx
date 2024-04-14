




"use client";

import Image from "next/image";
import Link from "next/link";
import signup from "../assests/img/signup.jpg"
import { useMediaQuery } from "react-responsive"; 




export default function Signup() {
  
  const isSmallScreen = useMediaQuery({ query: "(max-width: 640px)" });
  
  
  return (
    <section className="bg-gradient-to-r from-pink-300 to-white flex items-center min-h-screen justify-center">

      

{isSmallScreen ? (
  <div className="relative">

<div className="bg-gradient-to-r from-pink-300 to-white flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
  
  <div className="bg-gradient-to-r from-pink-300 to-white flex rounded-2xl shadow-lg max-w-3xl p-5 items-center relative z-10">
    <div className="bg-pink-100 flex-col rounded-2xl shadow-lg max-w-3xl p-5 items-center grid gap-4 sm:p-10 md:p-16">
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
        Welcome to Classroom
      </h1>
      <h2 className="text-xs sm:text-sm md:text-base mt-4 text-white">
        Join over 10,000 learners worldwide and enjoy online education!
      </h2>
      <button className="py-2 px-5 bg-pink-900 border rounded-xl hover:scale-110 duration-300 text-black">
        Create an account
      </button>
      <h1 className="text-sm sm:text-base md:text-lg mt-4 text-white">
        Already have an account? <Link href="/login">Login In</Link>
      </h1>
    </div>
  </div>
  
  <div className="hidden md:block absolute inset-0 z-0">
    <Image src={signup} alt="signup" width={900} height={300} className="object-cover w-full h-full" />
  </div>
</div>
</div>

     
     
     
      ) : (
      
      
      <>
        


<div className="  flex  justify-between ">  

<div className="flex  items-center justify-between "> promise</div>



 
<div className="">
    <Image src={signup} alt="signup" width={600} height={600} className="rounded-xl" />
  </div>


</div>



      </>
      )}
    </section>
  );
}
