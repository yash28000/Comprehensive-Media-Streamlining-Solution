"use client";
import { MainHeader } from "@/components/header/main";
import { Sidebar } from "@/components/sidebar";
import { useState, useEffect, useRef } from "react";
import { IVideo } from "@/services/videos/videos.types";
import { getDateString } from "@/utils/functions";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "@videojs/http-streaming";
import "@silvermine/videojs-quality-selector/dist/css/quality-selector.css";
import type Player from "video.js/dist/types/player";

export default function WatchPage({ params }: { params: { videoId: string } }) {
  const [sidebar, setSidebar] = useState(false);
  const [video, setVideo] = useState<IVideo | null>(null);
  const [loading, setLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<Player | null>(null);

  useEffect(() => {
    const loadQualitySelector = async () => {
      const qualitySelector = (await import('@silvermine/videojs-quality-selector')).default;
      qualitySelector(videojs);
    };
    loadQualitySelector();
  }, []);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/video/id/${params.videoId}`,
          {
            credentials: "include",
          }
        );
        const data = await response.json();
        console.log(data.data);
        if (data.success) {
          setVideo(data.data.video);
        }
      } catch (error) {
        console.error("Error fetching video:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();
  }, [params.videoId]);

  useEffect(() => {
    if (videoRef.current && video) {
      if (!playerRef.current) {
        const player = videojs(videoRef.current, {
          controls: true,
          fluid: true,
          responsive: true,
          aspectRatio: '16:9',
          html5: {
            vhs: {
              overrideNative: true,
              enableLowInitialPlaylist: true,
              allowSeeksWithinUnsafeLiveWindow: true,
              handlePartialData: true,
            },
            nativeAudioTracks: false,
            nativeVideoTracks: false,
          },
          controlBar: {
            children: [
              'playToggle',
              'volumePanel',
              'currentTimeDisplay',
              'timeDivider',
              'durationDisplay',
              'progressControl',
              'playbackRateMenuButton',
              'qualitySelector',
              'fullscreenToggle',
            ],
            volumePanel: {
              inline: false,
              volumeControl: {
                vertical: true,
              },
            },
          },
        });

        const qualities = [
          {
            src: `${process.env.NEXT_PUBLIC_OUTPUT_BUCKET}/${video.videoFile}/master.m3u8`,
            type: 'application/x-mpegURL',
            label: 'Auto',
          },{
            src: `${process.env.NEXT_PUBLIC_OUTPUT_BUCKET}/${video.videoFile}/1080p/index.m3u8`,
            type: 'application/x-mpegURL',
            label: '1080p',
          },{
            src: `${process.env.NEXT_PUBLIC_OUTPUT_BUCKET}/${video.videoFile}/720p/index.m3u8`,
            type: 'application/x-mpegURL',
            label: '720p',
            selected: true,
          },
          {
            src: `${process.env.NEXT_PUBLIC_OUTPUT_BUCKET}/${video.videoFile}/480p/index.m3u8`,
            type: 'application/x-mpegURL',
            label: '480p',
          }
        ];

        player.src(qualities);
        // player.controlBar.addChild('QualitySelector');

        player.on('ready', () => {
          console.log('Player is ready');
          const playPromise = player?.play();
          if (playPromise !== undefined) {
            playPromise.catch((error: Error) => {
              console.log('Playback failed:', error);
            });
          }
        });

        player.on('error', (error: unknown) => {
          console.log('Player error:', error);
        });

        playerRef.current = player;
      }
    }

    // return () => {
    //   if (playerRef.current) {
    //     playerRef.current.dispose();
    //     playerRef.current = null;
    //   }
    // };
  }, [video]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-pulse text-lg">Loading...</div>
      </div>
    );
  }

  if (!video) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-lg">Video not found</div>
      </div>
    );
  }

  return (
    <div className="h-full relative w-screen flex">
      <aside className={sidebar ? "md:w-[300px] w-screen" : "hidden"}>
        <Sidebar setSidebar={(e) => setSidebar(e)} />
      </aside>
      <main className="flex-1">
        <header
          className={
            sidebar ? "md:w-[calc(100vw-300px)] md:block hidden" : "w-screen"
          }
        >
          <MainHeader setSidebar={(e) => setSidebar(e)} sidebar={sidebar} />
        </header>

        <div className="max-w-[1280px] mx-auto px-4">
          <div className="aspect-video relative w-full overflow-hidden bg-black">
            <video
              ref={videoRef}
              className="video-js vjs-big-play-centered vjs-theme-city"
              playsInline
              controls
            />
          </div>

          <div className="mt-4">
            <h1 className="text-xl font-semibold">{video.title}</h1>

            <div className="flex items-center mt-4 space-x-4">
              <div className="flex items-center space-x-2">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  {/* <Image
                    src={video.owner.avatar}
                    alt={video.owner.username}
                    layout="fill"
                    objectFit="cover"
                  /> */}
                </div>
                <div>
                  {/* <p className="font-medium">{video.owner.username}</p> */}
                  <p className="text-sm text-zinc-500">
                    {getDateString(video.createdAt as unknown as string)}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-sm text-zinc-500">
                <span>{video.views} views</span>
              </div>
            </div>

            <div className="mt-6 bg-zinc-50 p-4 rounded-lg">
              <p className="text-sm whitespace-pre-wrap">{video.description}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
