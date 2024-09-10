import { link } from "fs";
import Link from "next/link";

let menuOptions = [
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Privacy",
    link: "/privacy",
  },
  {
    name: "Terms of use",
    link: "/terms",
  },
  {
    name: "Cookie prefences",
    link: "/cookies",
  },
];
export const Footer = () => {
  return (
    <div className="lg:absolute bottom-0 lg:max-h-12 h-full px-4 py-2 w-screen flex flex-col lg:flex-row lg:items-center lg:justify-between bg-zinc-800 text-white">
      <ul className="flex md:flex-row flex-col md:items-center gap-5 lg:ml-3 border-b-[1px] md:py-2 py-4 lg:border-none border-zinc-500">
        {menuOptions.map((option, index) => (
          <li key={index} className="text-zinc-400 cursor-pointer">
            <Link href={option.link} className="text-sm">
              {option.name}
            </Link>
          </li>
        ))}
      </ul>
      <h3 className="lg:text-sm text-md text-zinc-300 md:py-2 py-4">
        Powered by elInfra Secure Verify
      </h3>
    </div>
  );
};
