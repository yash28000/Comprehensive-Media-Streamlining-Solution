"use client";
import { UserProfile } from "@/components/pages/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { UploadCloudIcon } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function VideoUpload() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Selected file:", file);
      // You can handle the file upload logic here
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
    </div>
  );
}
