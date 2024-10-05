import Link from "next/link";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import {
  ArrowLeft,
  ChartColumnIncreasing,
  House,
  LayoutDashboard,
  LibraryBig,
  Video,
} from "lucide-react";

export const Sidebar = ({
  setSidebar,
}: {
  setSidebar: (e: boolean) => void;
}) => {
  return (
    <div className="h-screen md:relative w-full border-r-[1px] py-2 px-5 border-zinc-200">
      <div className="py-2 flex items-center justify-between group">
        <Link href="/" className="text-2xl font-semibold">
          el<span className="font-bold font-kanit">videos</span>
        </Link>
        <Button
          variant="link"
          className="text-sm group-hover:block md:hidden p-0 size-5"
          onClick={() => setSidebar(false)}
        >
          <ArrowLeft size={20} />
        </Button>
      </div>
      <div className="space-y-2 mt-2">
        <div className="space-y-1">
          <Button variant="secondary" className="w-full justify-start gap-4">
            <House size={20} />
            Home
          </Button>
        </div>
        <Separator />
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
      {/* <div className="absolute bottom-2 left-0 w-full px-5 rounded-md bg-zinc-200 h-[150px]">
        <div className="w-full bg-white rounded-lg h-full p-2 px-5">
            <p className="text-sm font-bold">Storage</p>
        </div>
      </div> */}
    </div>
  );
};
