import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { useAppSelector } from "@/reducers/store";
import { IVideo } from "@/services/videos/videos.types";
import Image from "next/image";
import { getDateString } from "@/utils/functions";

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
    <div className="border-[1px] relative border-zinc-200 shadow-sm py-8 px-10 rounded-xl h-auto">
      <h1 className="text-lg font-bold">Recents</h1>
      <div className="mt-10 overflow-hidden w-full">
        <div
          ref={scrollContainerRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {user?.uploads[0] &&
            user.uploads.map((video, index) => (
              <VideoCard key={index} video={video} userAvatar={user.avatar} />
            ))}
        </div>
      </div>
      
      <div className="flex gap-1 absolute right-5 top-5">
        <Button
          variant="link"
          className="bg-zinc-100 p-0 size-8"
          onClick={() => scroll("left")}
        >
          <ChevronLeft size={20} />
        </Button>
        <Button
          variant="link"
          className="bg-zinc-100 p-0 size-8"
          onClick={() => scroll("right")}
        >
          <ChevronRight size={20} />
        </Button>
      </div>
    </div>
  );
};

const VideoCard = ({
  video,
  userAvatar,
}: {
  video: IVideo;
  userAvatar: string;
}) => {
  return (
    <div className="w-[300px] flex-shrink-0 scroll-snap-align-start">
      <div className="relative w-[300px] h-[200px]">
        <Image
          src={
            video.thumbnail
              ? video.thumbnail
              : `${process.env.NEXT_PUBLIC_OUTPUT_BUCKET}/${video.videoFile}/thumbnail.jpg`
          }
          alt={video.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex mt-2 items-center space-x-2">
        <div className="size-10 rounded-full border-[1px] relative z-10 border-zinc-200 flex items-center justify-center shadow-sm">
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
};