"use client";
import { MainHeader } from "@/components/header/main";
import { Sidebar } from "@/components/sidebar";
import { MainPageContent } from "@/components/pages/main";
import { useState } from "react";

const Home = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="h-full relative w-screen flex">
      <aside className={sidebar ? "md:w-[300px] w-screen" : "hidden"}>
        <Sidebar setSidebar={(e) => setSidebar(e)} />
      </aside>
      <main>
        <header
          className={sidebar ? "md:w-[calc(100vw-300px)] md:block hidden" : "w-screen"}
        >
          <MainHeader setSidebar={(e) => setSidebar(e)} sidebar={sidebar} />
        </header>
        <section className="px-5 py-2">
          <MainPageContent/>
        </section>
      </main>
    </div>
  );
};

export default Home;
