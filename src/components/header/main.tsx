import { Bell, Earth, HelpCircle, MenuIcon, Search } from "lucide-react";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { Input } from "../commons/input";
import { Button } from "../ui/button";
import { UserProfile } from "../pages/avatar";

export const MainHeader = ({
  setSidebar,
  sidebar,
}: {
  setSidebar: (e: boolean) => void;
  sidebar: boolean;
}) => {
  return (
    <div className="w-full h-16">
      <div className="h-full w-full items-center flex px-2 justify-between">
        <div className="flex items-center space-x-5 w-full">
          <span
            className={
              !sidebar ? "space-x-1 h-full flex items-center" : "hidden"
            }
          >
            <Button
              variant="link"
              className="text-sm"
              onClick={() => setSidebar(!sidebar)}
            >
              <MenuIcon size={25} />
            </Button>
            <Link
              href="/"
              className="lg:text-2xl md:text-2xl text-lg font-semibold flex items-center"
            >
              el
              <span className="font-bold lg:text-2xl md:text-2xl text-lg md:block font-kanit">
                videos
              </span>
            </Link>
          </span>
          <div className="group hidden md:flex w-full h-10 rounded-md max-w-[500px] py-1 pl-3 items-center border-[1px] border-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <Earth size={20} />
            <Separator orientation="vertical" className="ml-3" />
            <Input classname="border-none focus:ring-0 h-8 rounded-md max-w-[500px] w-full" />
            <Button variant="link" className="text-sm">
              <Search size={20} />
            </Button>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <Button variant="link" className="text-sm block md:hidden size-10">
            <Search size={20} />
          </Button>
          <span className="rounded-md p-[0.4rem] text-xs bg-purple-600 text-white cursor-pointer">
            Upgrade
          </span>
          <Button variant="link" className="size-10 p-0">
            <HelpCircle size={20} />
          </Button>
          <Button variant="link" className="size-10 p-0">
            <Bell size={20} />
          </Button>
          <UserProfile />
        </div>
      </div>
      <Separator />
    </div>
  );
};
