import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, Download, PenTool, Video, Tv } from "lucide-react";
import { Input } from "../ui/input";

const HomeContent = () => {
  return (
    <div className="p-3 space-y-6">
      <div className="flex items-center justify-between">
        <ActionButton
          icon={<Upload size={24} />}
          label="Upload"
          subLabel="from computer"
          color="bg-sky-500"
        />
        <ActionButton
          icon={<Download size={24} />}
          label="Import"
          subLabel="from Drive and more"
          color="bg-amber-500"
        />
        <ActionButton
          icon={<PenTool size={24} />}
          label="Create"
          subLabel="new or from template"
          color="bg-blue-500"
        />
        <ActionButton
          icon={<Video size={24} />}
          label="Record"
          subLabel="screen or webcam"
          color="bg-red-500"
        />
        <ActionButton
          icon={<Tv size={24} />}
          label="Host"
          subLabel="event or webinar"
          color="bg-teal-600"
        />
      </div>

      <Card className="border-2 border-dashed border-gray-300">
        <CardContent className="flex flex-col items-center justify-center py-20">
          <Upload size={48} className="text-gray-400 mb-4" />
          <p className="text-lg text-gray-600 mb-2">
            Drag and drop videos to upload or select videos
          </p>
          <p className="text-sm text-gray-500 mb-4">from your device</p>
          <Button className="relative z-10">
            Select files
            <input id="file-upload" type="file" className="hidden" />
          </Button>

          {/* Hidden file input */}
        </CardContent>
      </Card>
    </div>
  );
};

const ActionButton = ({ icon, label, subLabel, color }: any) => (
  <Button
    variant="outline"
    className="flex flex-col items-center p-4 h-auto whitespace-normal w-[220px]"
  >
    <div className={`${color} text-white p-2 rounded-lg mb-2`}>{icon}</div>
    <span className="font-semibold">{label}</span>
    <span className="text-xs text-gray-500">{subLabel}</span>
  </Button>
);

export default HomeContent;
