"use client";
import { Input } from "@/components/commons/input";
import { VideoUploadForm } from "@/components/forms/video.upload";
import { UserProfile } from "@/components/pages/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useAppDispatch } from "@/reducers/store";
import { SelectedVideoUpload } from "@/reducers/videos/videos.action";
import { IMetaVideoStore } from "@/services/videos/videos.types";
import { UploadCloudIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function VideoUpload() {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const [file, setFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const router = useRouter();
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Selected file:", file);
      const fileUrl = URL.createObjectURL(file);
      setFile(file);
      setFileUrl(fileUrl);
    }
  };

  return (
    <div className="w-screen">
      <header className="w-full h-16">
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          accept="video/*" // Restrict file type to video only
          onChange={handleFileChange}
        />
        <div className="w-full flex items-center h-full justify-between px-2 pl-5">
          <Link href="/" className="text-2xl font-semibold flex items-center">
            el
            <span className="font-bold hidden md:block font-kanit">videos</span>
          </Link>
          <div className="flex items-center">
            <Separator orientation="vertical" className="mr-3 h-10" />
            <UserProfile />
          </div>
        </div>
        <Separator />
      </header>
      {!fileUrl && (
        <main className="w-full max-w-[700px] mx-auto h-auto p-3 shadow-md rounded-lg mt-10">
          <div className="w-full h border-dotted border border-zinc-300 p-3 flex flex-col items-center">
            <UploadCloudIcon size={100} />
            <h1 className="text-lg font-bold mt-5">Upload your video</h1>
            <p className="text-sm text-gray-500">
              Drag and drop your video here or click to upload
            </p>
            <Button
              variant="outline"
              className="mt-5"
              onClick={() => inputRef.current?.click()}
            >
              Upload
            </Button>
          </div>
        </main>
      )}
      {fileUrl && file && (
        <div className="flex flex-col items-center space-y-5">
          <div className="w-full max-w-[700px] mx-auto mt-5">
            <video
              src={fileUrl}
              autoPlay
              className="w-full h-auto rounded-md"
            />
          </div>
          {/* <div className="max-w-[700px] w-full rounded-md border py-3 px-5">
            <p className="text-xl font-extralight my-5">Enter Video Details</p>
            <VideoUploadForm videoFile={file} />
          </div> */}
          <Card className="max-w-[700px] w-full">
            <CardHeader>
              <CardTitle>Enter Video Details</CardTitle>
            </CardHeader>
            <Separator/>
            <CardContent className="mt-5">
              <VideoUploadForm videoFile={file} />
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
