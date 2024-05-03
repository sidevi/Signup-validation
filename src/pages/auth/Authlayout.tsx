
import Image from "next/image";
import Mybg from "../../app/component/Mybg";

type AuthlayoutProps = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: AuthlayoutProps) {
  return (
    <main className="grid h-{100px}">
      <Mybg />
      <div className="bg-red-500">{children}</div>
    </main>
  );
}
