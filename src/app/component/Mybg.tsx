import Image from "next/image";
import signup from "./../.../../../../public/images/signup.jpg";

export default function Mybg() {
  return (
    <div
      style={{
        width: "100%",
      }}
      className=" "
    >
      <Image
        src={signup}
        alt="signup"
        width={1000}
        height={1000}
        className=""
      />
    </div>
  );
}
