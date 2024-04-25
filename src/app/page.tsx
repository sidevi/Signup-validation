"use client"

import Image from "next/image";
import Signup from "./component/auth/Signup";
import { BrowserRouter } from "react-router-dom";

export default function Home() {
  return (
    <BrowserRouter>  
    
    <div>
      <Signup />
    
    </div>
      </BrowserRouter>

  );
}
