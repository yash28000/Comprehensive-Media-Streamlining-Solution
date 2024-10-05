"use client";
import Link from "next/link";
import { Input } from "../commons/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { AuthInfoForm } from "../forms/auth.forms/auth.info.form";
import { useEffect, useRef, useState } from "react";

export const AccountInfoReg = ({
  setOtp,
  setId
}: {
  setOtp: (e: string) => void;
  setId: (e: string) => void;
}) => {
  const [verifyDisabled, setVerifyDisabled] = useState(true);
  const [email, setEmail] = useState("");
  const [opt, setOtps] = useState("");
  const infoRef = useRef<HTMLButtonElement>(null);
  const verifyRef = useRef<HTMLButtonElement>(null);
  const handleClick = () => {
    infoRef.current?.click();
    verifyRef.current?.click();
  };
  useEffect(() => {
    handleClick();
  }, [verifyDisabled]);
  return (
    <Accordion type="single" collapsible className="border-t mt-5">
      <AccordionItem value="acc-info">
        <AccordionTrigger
          ref={infoRef}
          className=" px-2 text-zinc-700 py-3 outline-blue-500 data-[state=open]:focus:text-blue-600 data-[state=open]:focus:outline hover:no-underline"
        >
          Account information
        </AccordionTrigger>
        <AccordionContent asChild>
          <AuthInfoForm
            onChange={(e) => setVerifyDisabled(e)}
            setEmail={(e) => setEmail(e)}
            setId={(e) => setId(e)}
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="verify-info" disabled={verifyDisabled}>
        <AccordionTrigger
          ref={verifyRef}
          className=" px-2 text-zinc-700 py-3 outline-blue-500 data-[state=open]:focus:text-blue-600 data-[state=open]:focus:outline hover:no-underline  disabled:text-zinc-400"
        >
          Verify
        </AccordionTrigger>
        <AccordionContent>
          <div className="text-sm h-full font-thin px-2 mt-8">
            <h3 className="">
              We emailed a 7 digit code to <b className="font-bold">{email}</b>
            </h3>
            <p>This code will expire in 30 minutes.</p>
            <div className="mt-5 w-full">
              <label className="text-xs font-extralight">
                Verification code
              </label>
              <Input
                type="text"
                classname="bg-zinc-100 mt-2"
                value={opt}
                onChange={(e) => {
                  setOtps((e.target as HTMLInputElement).value);
                  setOtp((e.target as HTMLInputElement).value);
                }}
              />
            </div>
            <p className="text-zinc-600 my-3">
              Didn{"'"}t receive the email? Check your spam filter for an email
              <br />
              from noreply.el.videos@gmail.com.
            </p>

            <Link href="/api/send/code" className="text-blue-500 underline">
              Resend code
            </Link>
            <p className="my-3 mt-5">
              I accept the product
              <Link href="/terms" className="text-blue-500 underline ml-1">
                Terms and Conditions.
              </Link>
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
