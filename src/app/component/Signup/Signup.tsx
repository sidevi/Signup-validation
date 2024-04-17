"use client";

import Image from "next/image";
import Link from "next/link";
import signup from "../../../../public/img/signup.jpg"
import { useMediaQuery } from "react-responsive"; 




export default function Signup() {
  
  const isSmallScreen = useMediaQuery({ query: "(max-width: 640px)" });
  
  
  return (
    <section className="  w-[500px]  h-[500px] bg-cover bg-right  flex items-center min-h-screen justify-center">

      
 
{isSmallScreen ? (
<>
<div className="  flex flex-col items-center justify-between min-h-screen  bg-cover bg-center bg-no-repeat h-screen ">
  
  
  
<div className="hero--content"> 
<div className="  absolute -z-10 w-full">            

<Image src={signup} alt="signup" className=" "   fill={true}  />

</div>

<div className="text-center ">  

<p> how to make wealth</p>
</div>

 </div> 
  
</div>

</>
     
     
     
      ) : (
      
      
      <>
         
{/* <div className="bg-image    bg-cover bg-center h-screen flex justify-center items-center" >
    
    
      <div className="   bg-cover   rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to Our App</h1>
        <p className="text-lg mb-6">Discover amazing features tailored just for you.</p>
        
        
        
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md text-lg hover:bg-blue-600">Get Started</button>
     
     
     
     
     
      </div>
   
   
   
    </div> */}

<main className=" flex flex-col items-center justify-between">   



</main>









      </>
      )}
    </section>
  );
}
