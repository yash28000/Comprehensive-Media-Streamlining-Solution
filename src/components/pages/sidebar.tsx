"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import {
  ChartColumnIncreasing,
  House,
  LayoutDashboard,
  LibraryBig,
  Monitor,
  Video,
} from "lucide-react";
import { Collapse } from "./collapse";
import { Progress } from "../ui/progress";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

const Sidebar = ({ className }: SidebarProps) => {
  return (
    <div
      className={cn(
        "fixed top-0 left-0 h-screen w-64  bg-background",
        className
      )}
    >
      <div className="flex flex-col h-full">
        <div className="flex-grow space-y-4 py-4">
          <div className="px-3 py-2">
            <h1 className="font-playwrite-de-grund text-xl font-bold mb-3 ml-3">
              elVideos
            </h1>
            <div className="space-y-1">
              <Button
                variant="secondary"
                className="w-full justify-start gap-4"
              >
                <House size={20} />
                Home
              </Button>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="px-3 py-2">
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start gap-4">
                <LibraryBig size={20} />
                Library
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-4">
                <Video size={20} />
                Live Events
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-4">
                <LayoutDashboard size={20} />
                Showcases
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-4">
                <ChartColumnIncreasing size={20} />
                Analytics
              </Button>
            </div>
          </div>

          <Separator className="my-3" />
          <div className="px-2 py-1">
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start gap-4">
                <Monitor size={20} />
                Watch
              </Button>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="px-3 py-4 mt-auto">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p>Get more videos</p>
                <Button className="bg-[#023e8a]">Upgrade</Button>
              </div>
              <div className="flex-col items-center justify-center gap-3 space-y-2">
                <Progress value={33} />
                <span className="flex items-center justify-between">
                  <p>Limit</p>
                  <p>0 of 1gb</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
