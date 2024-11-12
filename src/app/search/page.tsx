"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import VideoCard from "@/components/Cards/recent.uploads";
import { IPartialUser } from "@/services/user/user.types";
import { MainHeader } from "@/components/header/main";
import { Sidebar } from "@/components/sidebar";
import { Separator } from "@/components/ui/separator";

export interface IVideo {
  _id: string;
  title: string;
  description: string;
  videoFile: string;
  thumbnail?: string;
  views: number;
  isPublished: boolean;
  owner: IPartialUser;
  createdAt: Date;
  updatedAt: Date;
}

export default function SearchPage() {
  const [sidebar, setSidebar] = useState(false);
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const [searchResults, setSearchResults] = useState<IVideo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!query) return;

      try {
        setLoading(true);
        const response = await fetch(
          `/api/search?q=${encodeURIComponent(query)}`
        );
        const data = await response.json();

        if (data.success) {
          setSearchResults(data.data.videoList);
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [query]);

  return (
    <>
      <div className="h-full relative w-screen flex">
        <aside className={sidebar ? "md:w-[300px] w-screen" : "hidden"}>
          <Sidebar setSidebar={(e) => setSidebar(e)} />
        </aside>
        <main>
          <header
            className={
              sidebar ? "md:w-[calc(100vw-300px)] md:block hidden" : "w-screen"
            }
          >
            <MainHeader setSidebar={(e) => setSidebar(e)} sidebar={sidebar} />
          </header>
          <section className="w-full px-5 py-2">
            <main className="mx-auto px-4 w-full py-6 min-h-screen">
              <div className="w-full mx-auto">
                {loading ? (
                  <div className="flex items-center justify-center py-20">
                    <div className="animate-pulse text-lg">Loading...</div>
                  </div>
                ) : (
                  <>
                    <header className="mb-3">
                      <h1 className="text-xl font-semibold mb-2">
                        Search Results for: {query}
                      </h1>
                      <p className="text-zinc-500">
                        Found {searchResults.length}{" "}
                        {searchResults.length === 1 ? "video" : "videos"}
                      </p>
                    </header>
                    <Separator/>

                    {searchResults.length === 0 ? (
                      <div className="flex flex-col items-center justify-center py-20">
                        <div className="text-center text-gray-500 space-y-4">
                          <p className="text-lg">
                            No videos found for "{query}"
                          </p>
                          <p className="text-sm text-zinc-400">
                            Try searching with different keywords
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="grid mt-5 grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-8">
                        {searchResults.map((video) => (
                          <div
                            key={video._id}
                            className="w-full flex justify-center"
                          >
                            <VideoCard
                              video={video}
                              userAvatar={video.owner.avatar}
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            </main>
          </section>
        </main>
      </div>
    </>
  );
}
