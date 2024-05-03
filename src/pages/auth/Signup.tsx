

import Link from "next/link";
import Authlayout from "@/pages/auth/Authlayout";

export default function Signup() {
  return (
    <Authlayout>
      <div className=" grid h-{100ox} bg-red-400">
        promise
        <Link href="/auth/New" className="bg-black"> PROMISE</Link>
      </div>
    </Authlayout>
  );
}
