import Sidebar from "@/components/pages/sidebar";
import { Separator } from "@/components/ui/separator";

const Home = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-[0.8]">
        {" "}
        <Sidebar />
      </div>
      <Separator orientation="vertical" className="h-full text-black" />
      <div className="flex-[4] ">
        <h1> Main Area</h1>
      </div>
    </div>
  );
};

export default Home;
