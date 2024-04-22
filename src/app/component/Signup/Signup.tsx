"use client";
import Image from "next/image";
import signup from "../../../../public/images/signup.jpg";


export default function Signup() {
  
  return (

<section className=" ">    
  
  <div className="flex justify-center items-center h-screen px-6   bg-gradient-to-r from-pink-500 via-red-500 to-pink-50 ">  

<div className="w-full xl:w-3/4 lg:w-11/12 flex sm:flex  ">    


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
      
   

    ) 
}
