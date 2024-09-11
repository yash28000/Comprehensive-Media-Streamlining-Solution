"use client";
import Link from "next/link";
import { Button } from "../commons/button";
import { Input } from "../commons/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export const AccountInfoReg = () => {
  return (
    <Accordion type="single" collapsible className="border-t mt-5">
      <AccordionItem value="acc-info">
        <AccordionTrigger className=" px-2 text-zinc-700 py-3 outline-blue-500 data-[state=open]:focus:text-blue-600 data-[state=open]:focus:outline hover:no-underline">
          Account information
        </AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-2 mt-10 gap-5 px-2">
            <span>
              <label className="mb-2 text-xs font-extralight">Email</label>
              <Input
                type="email"
                classname="bg-zinc-100 border-zinc-400 mt-2"
                onChange={() => console.log("hello")}
              />
            </span>
            <span>
              <label className="mb-2 text-xs font-extralight">Password</label>
              <Input
                type="email"
                classname="bg-zinc-100 border-zinc-400 mt-2"
                onChange={() => console.log("hello")}
              />
            </span>
            <span>
              <label className="mb-2 text-xs font-extralight">First name</label>
              <Input
                type="email"
                classname="bg-zinc-100 border-zinc-400 mt-2"
                onChange={() => console.log("hello")}
              />
            </span>
            <span>
              <label className="mb-2 text-xs font-extralight">Last name</label>
              <Input
                type="email"
                classname="bg-zinc-100 border-zinc-400 mt-2"
                onChange={() => console.log("hello")}
              />
            </span>
            <Button
              type="submit"
              className="bg-transparent text-blue-600 outline mt-10"
            >
              Next
            </Button>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="verify-info">
        <AccordionTrigger className=" px-2 text-zinc-700 py-3 outline-blue-500 data-[state=open]:focus:text-blue-600 data-[state=open]:focus:outline hover:no-underline  disabled:text-zinc-400">
          Verify
        </AccordionTrigger>
        <AccordionContent>
          <div className="text-sm h-full font-thin px-2 mt-8">
            <h3 className="">
              We emailed a 7 digit code to{" "}
              <b className="font-bold">jatin.kumar@terradx.ai</b>
            </h3>
            <p>This code will expire in 30 minutes.</p>
            <div className="mt-5 w-full">
              <label className="text-xs font-extralight">
                Verification code
              </label>
              <Input type="text" classname="bg-zinc-100 mt-2" />
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
