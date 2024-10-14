"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/reducers/store";
import { IVideo } from "@/services/videos/videos.types";
import Image from "next/image";
import { getDateString } from "@/utils/functions";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export const RecentUploads = () => {
  const { user } = useAppSelector((root) => root.user);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Scroll by the width of one card
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative z-10 w-full h-auto py-8 px-4 lg:px-10 border border-zinc-200 rounded-xl shadow-sm overflow-hidden">
      <h1 className="text-lg font-bold">Recents</h1>
      <div className="mt-10 w-full">
        <ScrollArea className="w-full -z-10" ref={scrollContainerRef}>
          <div className="flex space-x-4">
            {user?.uploads[0] &&
              user.uploads.map((video, index) => (
                <VideoCard key={index} video={video} userAvatar={user.avatar} />
              ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      <div className="absolute right-5 top-5 flex gap-1">
        <Button
          variant="outline"
          size="icon"
          className="hidden md:flex"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="hidden md:flex"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

function VideoCard({
  video,
  userAvatar,
}: {
  video: IVideo;
  userAvatar: string;
}) {
  return (
    <div className="w-[250px] sm:w-[300px] flex-shrink-0">
      <div className="relative w-full h-[140px] sm:h-[180px]">
        <Image
          src={
            video.thumbnail ||
            `${process.env.NEXT_PUBLIC_OUTPUT_BUCKET}/${video.videoFile}/thumbnail.jpg`
          }
          alt={video.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="flex mt-2 items-center space-x-2">
        <div className="relative z-10 flex items-center justify-center w-10 h-10 border border-zinc-200 rounded-full shadow-sm">
          <Image
            src={userAvatar}
            alt="user"
            width={20}
            height={20}
            className="-z-10"
          />
        </div>
        <span>
          <h3 className="text-sm">{video.title}</h3>
          <p className="text-xs font-extralight text-zinc-600">
            {getDateString(video.createdAt as unknown as string)}
          </p>
        </span>
      </div>
    </div>
  );
}
