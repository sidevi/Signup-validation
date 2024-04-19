"use client";

import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive"; 




export default function Signup() {
  
  const isSmallScreen = useMediaQuery({ query: "(max-width: 640px)" });
  
  
  return (
    <section className="  bg-hero-pattern   flex items-center min-h-screen justify-center">

      
 
{isSmallScreen ? (
<>
<div className="  flex flex-col items-center justify-between min-h-screen  bg-cover bg-center bg-no-repeat h-screen ">
  
  
  
<div className="relative w-full"> 


<div className="text-center ">  

<p> how to make wealth</p>
</div>

 </div> 
  
</div>

</>
     
     
     
      ) : (
      
      
      <>
         

<div className="">        
  
  
  
<div className=" ">            
               

               nn
               
               </div>
       </div>











      </>
      )}
    </section>
  );
}
