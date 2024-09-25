"use client";
import { LoginForm } from "@/components/forms/auth.forms/login";
import { Bird } from "lucide-react";
import { useRouter } from "next/navigation";
interface PageProps {
  params: {
    slug: string;
  };
}
export default function LoginPage({ params }: PageProps) {
  const router = useRouter();
  const handleClick = async (password: string) => {
    const body = {
      password,
      email: decodeURIComponent(params.slug),
    };
    const resp = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        content: "application/json",
      },
    });
    const data = await resp.json();
    if (resp.status === 200) {
      router.push("/");
    }
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
