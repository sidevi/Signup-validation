  import Image from "next/image";
import signup from "./../.../../../../public/images/signup.jpg"


  export  default  function  Mybg(){  

    return(  


        <div className="  w-fit">
        <Image
          src={signup}
          alt="signup"
          width={1000} 
          height={1000}
          className="bg-cover rounded-l-lg"
        />
      </div>
    )




  }