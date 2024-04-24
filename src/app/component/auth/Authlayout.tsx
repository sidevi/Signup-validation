"use client"
import React from "react"
import Mybg from "../Mybg"







type AuthlayoutProps = {  
children : React.ReactNode;





}



 


export default function Authlayout(  {children} :AuthlayoutProps){  

return(   

<  div className=" "> 
<Mybg/>

      
   
    {children}
</div>


)













}