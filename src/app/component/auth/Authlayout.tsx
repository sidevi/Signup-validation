"use client"
import React from "react"
import Mybg from "../Mybg"







type AuthlayoutProps = {  
children : React.ReactNode;





}



 


export default function Authlayout(  {children} :AuthlayoutProps){  

return(   

<  div className=" flex items-center justify-center w-full h-svh  bg-gradient-to-r from-pink-500 via-red-500 to-pink-50  "> 
<Mybg/>

      
   
    {children}
</div>


)













}