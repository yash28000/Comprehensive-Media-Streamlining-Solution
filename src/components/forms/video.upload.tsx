import React, { useState, useRef } from "react";
import { Input } from "../ui/input";
import Image from "next/image";
import { Button } from "../ui/button";
import { useFormik } from "formik";
import { X } from "lucide-react";

export const VideoUploadForm = ({ videoFile }: { videoFile: File }) => {
  const [thumbUrl, setThumbUrl] = useState<string | null>(null);
  const [thumbFile, setThumbFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Selected file:", file);
      const fileUrl = URL.createObjectURL(file);
      setThumbUrl(fileUrl);
      setThumbFile(file);
    }
  };

  const removeThumbnail = () => {
    setThumbUrl(null);
    setThumbFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const uploadFormData = async (formData: FormData) => {
    try {
      setIsUploading(true);
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/video`, {
        // Replace with your API endpoint
        method: "POST",
        body: formData,
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Upload successful:", result);
      // Handle successful upload (e.g., show success message, redirect)
    } catch (error) {
      console.error("Upload failed:", error);
      // Handle error (e.g., show error message)
    } finally {
      setIsUploading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      title: videoFile.name,
      description: "",
    },
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("description", values.description);
      formData.append("video", videoFile);
      if (thumbFile) {
        formData.append("thumb", thumbFile);
      }
      uploadFormData(formData);
    },
  });

  return (
    <div className="w-full h-full">
      <form onSubmit={formik.handleSubmit} className="grid gap-4">
        <span className="grid w-full items-center grid-cols-4">
          <label htmlFor="title" className="col-span-1">
            Title
          </label>
          <Input
            id="title"
            name="title"
            placeholder="Title"
            className="col-span-3"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
        </span>
        <span className="grid w-full items-center grid-cols-4">
          <label htmlFor="description" className="col-span-1">
            Description
          </label>
          <Input
            id="description"
            name="description"
            placeholder="Description"
            className="col-span-3"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
        </span>
        <span className="grid w-full items-center grid-cols-4">
          <label htmlFor="thumb" className="col-span-1">
            Thumbnail
          </label>
          <div className="col-span-3">
            <Input
              ref={fileInputRef}
              id="thumb"
              type="file"
              accept="image/*"
              placeholder="Thumbnail"
              className={thumbUrl ? "hidden" : ""}
              onChange={handleFileChange}
            />
            {thumbUrl && (
              <div className="relative inline-block">
                <Image
                  src={thumbUrl}
                  alt="Thumbnail preview"
                  width={200}
                  height={200}
                  className="object-cover"
                />
                <button
                  type="button"
                  onClick={removeThumbnail}
                  className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"
                >
                  <X size={16} />
                </button>
              </div>
            )}
          </div>
        </span>
        <span>
          <Button type="submit" className="w-full" disabled={isUploading}>
            {isUploading ? "Uploading..." : "Upload"}
          </Button>
        </span>
      </form>
    </div>
  );
};
