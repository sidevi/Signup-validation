import Image from "next/image";
import Mybg from "./Mybg";

type AuthlayoutProps = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: AuthlayoutProps) {
  return (
    <main className="">
			<Mybg/> 
			<div className="bg-red-500">{children}</div>
		
		</main>
  );
}
