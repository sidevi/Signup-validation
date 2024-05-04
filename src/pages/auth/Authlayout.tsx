import Image from "next/image";
import Mybg from "../../app/component/Mybg";

type AuthlayoutProps = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: AuthlayoutProps) {
  return (
    <div
      className="grid h-full grid-cols-2"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        height: "100vh",
      }}
    >
    

      <div
      className="bg-pink-500"
      >
      <Mybg/>
      </div>
      <div
      className="bg-pink-500"
      >
        {children}
      </div>
    </div>
  );
}
