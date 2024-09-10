"use client";
import { LoginForm } from "@/components/forms/auth.forms/login";
interface PageProps {
  params: {
    slug: string;
  };
}
export default function LoginPage({ params }: PageProps) {
  const handleClick = (password: string) => {
    console.log(password);
  };
  return (
    <div className="w-full lg:h-[calc(100vh-3rem)] h-[calc(100vh-200px)] grid grid-cols-3">
      <div className="lg:col-span-1 col-span-3 w-full flex justify-center items-center h-full">
        <LoginForm
          state="auth"
          info={params.slug}
          onSubmit={(e) => handleClick(e)}
        />
      </div>
      <div
        className="lg:col-span-2 lg:block hidden bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/illustration-final.svg')" }}
      ></div>
    </div>
  );
}
