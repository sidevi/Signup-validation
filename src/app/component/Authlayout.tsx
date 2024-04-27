import Image from "next/image"
import Mybg from "./Mybg"

type Authlayoutprop = {  
children : React.ReactNode;


}

export  default function Authlayout ({children}:Authlayoutprop) {   



    return( 
        <div className=" flex items-center justify-center w-full h-svh">  
<Mybg/>
         
            <div className=" bg-black"> {children} </div>
        </div>
    )
}