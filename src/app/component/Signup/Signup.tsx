//   import Image from "next/image";     
// import  signup  from "../assests/signup.jpg"




// export default function Signup() {
//   return (
//     <div className=" flex">  
// <div>   




// </div>

// <div>   
// <img src={signup} alt="Sign Up" /> 
// </div>


//     </div>


//   );
// }




"use client"
//   );
// }
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
          {/* <Image src={signup} alt="signup" layout="fill" objectFit="cover" />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <div className="bg-pink-100 flex-col rounded-2xl shadow-lg max-w-3xl p-5 items-center grid gap-4 sm:p-10 md:p-16">
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">Welcome to Classroom</h1>
              <h2 className="text-xs sm:text-sm md:text-base mt-4 text-white">Join over 10,000 learners worldwide and enjoy online education!</h2>
              <button className="py-2 px-5 bg-pink-900 border rounded-xl hover:scale-110 duration-300 text-black">Create an account</button>
              <h1 className="text-sm sm:text-base md:text-lg mt-4 text-white">Already have an account? <Link href="/login">Login In</Link></h1>
            </div>
          </div> */}
         {/* <div className="flex justify-center items-center w-screen h-screen z-[-1]">
        <div className="bg-pink-100 flex-col rounded-2xl shadow-lg max-w-3xl p-5 items-center grid gap-4 sm:p-10 md:p-16">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">Welcome to Classroom</h1>
          <h2 className="text-xs sm:text-sm md:text-base mt-4 text-white">Join over 10,000 learners worldwide and enjoy online education!</h2>
          <button className="py-2 px-5 bg-pink-900 border rounded-xl hover:scale-110 duration-300 text-black">Create an account</button>
          <h1 className="text-sm sm:text-base md:text-lg mt-4 text-white">Already have an account? <Link href="/login">Login In</Link></h1>
        </div>
      </div>
    
      
      
      <div>
          <Image src={signup} alt="signup" width={900} height={300} />
        </div>
      
        
        
        </div> */}
     <div className="relative w-full h-screen flex justify-center items-center">
  {/* Image */}
  <Image src={signup} alt="signup" layout="fill" objectFit="cover" />

  {/* Form input */}
  <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-opacity-50 bg-gray-900">
    <div className="bg-pink-100 flex-col rounded-2xl shadow-lg max-w-3xl p-5 items-center grid gap-4 sm:p-10 md:p-16 z-10">
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">Welcome to Classroom</h1>
      <h2 className="text-xs sm:text-sm md:text-base mt-4 text-white">Join over 10,000 learners worldwide and enjoy online education!</h2>
      <button className="py-2 px-5 bg-pink-900 border rounded-xl hover:scale-110 duration-300 text-black">Create an account</button>
      <h1 className="text-sm sm:text-base md:text-lg mt-4 text-white">Already have an account? <Link href="/login">Login In</Link></h1>
    </div>
  </div>
</div>
</div>
     
     
     
     
     
     
      ) : (
      
      
      <>
        <div className=" bg-gradient-to-r from-pink-300 to-white flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        <div className="bg-pink-100 flex-col rounded-2xl shadow-lg max-w-3xl p-5 items-center grid gap-4 sm:p-10 md:p-16">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">Welcome to Classroom</h1>
          <h2 className="text-xs sm:text-sm md:text-base mt-4 text-white">Join over 10,000 learners worldwide and enjoy online education!</h2>
          <button className="py-2 px-5 bg-pink-900 border rounded-xl hover:scale-110 duration-300 text-black">Create an account</button>
          <h1 className="text-sm sm:text-base md:text-lg mt-4 text-white">Already have an account? <Link href="/login">Login In</Link></h1>
        </div>
      </div>
    
      
      
      <div className="hidden md:block">
          <Image src={signup} alt="signup" width={900} height={300} />
        </div>
      
      </>
      )}
    </section>
  );
}
