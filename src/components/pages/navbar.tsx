import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, HelpCircle, Plus, Search } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { UserProfile } from "./avatar";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-[#f8f9fa] shadow-sm">
      <div className="flex items-center flex-1">
        <div className="relative w-full max-w-xl">
          <Search
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-700"
            size={20}
          />
          <Input
            type="search"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 w-[350px] border-slate-950"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <Button
          variant="outline"
          className="bg-[#1b4332] text-white cursor-pointer hover:bg-[#40916c] hover:text-white"
        >
          Upgrade
        </Button>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <HelpCircle size={25} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Help</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <Bell size={25} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Notifications</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <div className=" cursor-pointer">
          <UserProfile />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
