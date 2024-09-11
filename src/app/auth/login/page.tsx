"use client";
import { LoginForm } from "@/components/forms/auth.forms/login";
import { useRouter } from "next/navigation";
//@ts-ignore
export default function LoginPage() {
  const router = useRouter();
  const handleClick = (email: string) => {
    console.log(email);
    router.push(`/auth/login/${email}`);
  };
  return (
    <div className="w-full h-[calc(100vh-3rem)] grid grid-cols-3">
      <div className="lg:col-span-1 col-span-3 w-full flex justify-center items-center h-full">
        <LoginForm state="info" onSubmit={(e) => handleClick(e)} />
      </div>
      <div
        className="lg:col-span-2 lg:block hidden "
        style={{ backgroundImage: "url('/illustration-final.svg')" }}
      ></div>
    </div>
  );
}
