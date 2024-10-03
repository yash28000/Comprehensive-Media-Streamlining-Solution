"use client";
import { AccountInfoReg } from "@/components/accordians/account.information.create";
import { Button } from "@/components/commons/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const RegForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [otp, setOtp] = useState("");
  useEffect(() => {
    if (otp.length > 3) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [otp]);
  const handleClick = async () => {
    const resp = await fetch(`/api/auth/reg`, {
      method: "POST",
      body: JSON.stringify({ userId: id, otp }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (resp.status === 200) {
      router.push("/");
    }
  };
  return (
    <div className="w-full px-10 py-10">
      <h1 className="text-3xl font-kanit">Create a elInfra account</h1>
      <p className="text-sm mt-2">
        Already have an elinfra account?
        <Link href="/auth/login" className="ml-1 text-blue-600 underline">
          log in
        </Link>
      </p>
      <AccountInfoReg setOtp={(e) => setOtp(e)} setId={(e) => setId(e)} />
      <Button disabled={disabled} className="mt-3" onClick={handleClick}>
        Submit
      </Button>
    </div>
  );
};
