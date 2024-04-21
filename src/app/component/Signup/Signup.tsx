"use client";
import Image from "next/image";
import signup from "../../../../public/images/signup.jpg";


export default function Signup() {
  
  return (
  <section className="lg:bg-gray-50 min-h-screen flex items-center justify-center ">    
  
  
  <div className="relative bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center overflow-hidden  sm:flex p-13">

  
      <div className=" z-10 ">
        <h3>
          Welcome to Classroom
          Join over 10,000 learners over the world and enjoy online education!
          Create an account
          Already have an account?
          Log in
        </h3>
      </div>

    
      <div className=" absolute top-0 right-0 z-0 ">
        <Image
          src={signup}
          alt="signup"
          width={1000}
          height={1000}
          className="bg-cover"
        />
      </div>

    </div>






    
    
 
  
  
  
  
  
  
  
    </section>
      
   

    ) 
}
