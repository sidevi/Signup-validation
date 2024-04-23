"use client";
import Image from "next/image";
import signup from "../../../../public/images/signup.jpg";
import Authlayout from "../auth/Authlayout";
import Link from "next/link"
export default function Signup() {
  
  return (
<Authlayout>
<section className=" ">    
  
  <div className="    flex items-center justify-center w-full h-svh  bg-gradient-to-r from-pink-500 via-red-500 to-pink-50 ">  
  {/* flex justify-center items-center h-screen px-6  */}
<div className=" w-full xl:w-3/4 lg:w-11/12 flex sm:flex  ">    

<div className=" w-full h-auto   hidden lg:block lg:w-fit  bg-cover rounded-b-lg">
        <Image
          src={signup}
          alt="signup"
          width={1000} 
          height={1000}
          className="bg-cover rounded-l-lg"
        />
      </div>
<div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none ">   
    <div className="text-center  my-9 ">   

okosun
<Link href="./"> signup </Link>
    </div>
  you welcome
 
  </div> 


</div>


  </div>


  
    
    
    
    
    
    
    
    
    
    
    
    
      {/* <div className="  ">
        <h3>
          Welcome to Classroom
          Join over 10,000 learners over the world and enjoy online education!
          Create an account
          Already have an account?
          Log in
        </h3>
      </div>

    

    </div>

 */}




    
    
 
  
  
  
  
  
  
  
    </section>
    </Authlayout>
   

    ) 
}
