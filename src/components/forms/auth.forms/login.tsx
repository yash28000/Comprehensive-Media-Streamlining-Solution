"use client";
import { Button } from "@/components/commons/button";
import { Input } from "@/components/commons/input";
import { InfoIcon, MoveRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
interface LoginFormProps {
  state: "info" | "auth";
  info?: string;
  onSubmit?: (e: string) => void;
}

export const LoginForm = ({ state, info, onSubmit }: LoginFormProps) => {
  const [input, setInput] = useState("");
  const router = useRouter();
  return (
    <div className="w-full max-w-[500px] h-full px-10 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-kanit">Log in to elvideos</h1>
      </div>
      <form
        className={`mt-2 space-y-5 border-t-[1px] ${
          state === "info" && "border-b-[1px]"
        } border-zinc-200 py-10`}
      >
        {state === "info" ? (
          <>
            <span>
              <label htmlFor="email" className="text-xs">
                Email
              </label>
              <Input
                id="email"
                type="email"
                classname="bg-zinc-100"
                value={input}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setInput(e.target.value)
                }
              />
            </span>
            <Button type="button" onClick={() => onSubmit && onSubmit(input)}>
              <span className="w-full flex items-center justify-between">
                <p className="font-extralight text-sm">Continue</p>
                <MoveRight size={20} />
              </span>
            </Button>
            <div className="flex items-center">
              <Input
                type="checkbox"
                id="remember"
                classname="size-3 rounded-none"
              />
              <label htmlFor="remember" className="text-sm ml-2">
                Remember me
              </label>
              <InfoIcon size={15} className="ml-2" />
            </div>
          </>
        ) : (
          <>
            <span>
              <label htmlFor="password" className="text-xs">
                Password
              </label>
              <Input
                id="password"
                type="password"
                classname="bg-zinc-100"
                value={input}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setInput(e.target.value)
                }
              />
            </span>
            <span className="text-xs">
              Logging in as {decodeURIComponent(info ?? "")}{" "}
              <Link href="/auth/login" className="underline text-blue-600 ml-1">
                Not you?
              </Link>
            </span>
            <Button type="button" onClick={() => onSubmit && onSubmit(input)}>
              <span className="w-full flex items-center justify-between">
                <p className="font-extralight text-sm">Log in</p>
                <MoveRight size={20} />
              </span>
            </Button>

            <div className="text-sm">
              <Link href="/forgot-password" className="underline text-blue-600">
                Forgot your password?
              </Link>
            </div>
          </>
        )}
      </form>
      {state === "info" && (
        <>
          <div className="py-7 border-b-[1px] border-zinc-200">
            <p className="text-sm mb-5 font-extralight">
              Don{"'"}t have an account?
            </p>
            <Button
              className="bg-transparent text-blue-600 outline"
              onClick={() => router.push("/auth/reg")}
            >
              <span className="w-full flex justify-between items-center">
                <p className="text-sm">Create your account</p>
                <MoveRight size={20} />
              </span>
            </Button>
          </div>
          <div className="text-sm my-5">
            Forgot your password?
            <Link
              href="/forgot-password"
              className="underline text-blue-600 ml-1"
            >
              Reset now
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
