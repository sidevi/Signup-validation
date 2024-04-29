import Image from "next/image";
import Mybg from "./Mybg";

type AuthlayoutProps = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: AuthlayoutProps) {
  return (
    <main className="flex  items-center bg-red-500">
			<Mybg/> 
			<div className="w-full">{children}</div>
		
		</main>
  );
}
