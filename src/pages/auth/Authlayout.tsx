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
      {/* <Mybg /> */}
      {/* <div   className="bg-green-500 w-full h-full">jdkk</div> */}

      <div
        style={{
          background: "green",
          height: "100%",
          width: "100%",
        }}
      >
      <Mybg/>
      </div>
      <div
        style={{
          background: "red",
          height: "100%",
          width: "100%",
          overflow: "auto",
        }}
      >
        {children}
      </div>
    </div>
  );
}
