"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/reducers/store";
import { IVideo } from "@/services/videos/videos.types";
import Image from "next/image";
import { getDateString } from "@/utils/functions";
import Link from "next/link";

export const RecentUploads = () => {
  const { user } = useAppSelector((root) => root.user);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative z-10 w-full h-auto py-8 px-4 lg:px-10 border border-zinc-200 rounded-xl shadow-sm">
      <h1 className="text-lg font-bold">Recents</h1>

      <div className="mt-10 w-full overflow-hidden">
        <div
          ref={scrollContainerRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide"
        >
          {user?.uploads[0] &&
            user.uploads.map((video, index) => (
              <VideoCard key={index} video={video} userAvatar={user.avatar} />
            ))}
        </div>
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
    <div className="w-full max-w-[300px] hover:scale-105 transition-transform shadow-sm duration-200">
      <Link href={`/watch/${video._id}`}>
        <div className="relative w-full aspect-video">
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
        <div className="flex mt-3 items-start space-x-3">
          <div className="relative z-10 flex-shrink-0 flex items-center justify-center w-9 h-9 border border-zinc-200 rounded-full shadow-sm overflow-hidden">
            <Image
              src={userAvatar}
              alt="user"
              layout="fill"
              objectFit="cover"
              className="-z-10"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-medium truncate">{video.title}</h3>
            <p className="text-xs font-extralight text-zinc-600 mt-1">
              {getDateString(video.createdAt as unknown as string)}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default VideoCard;
