"use client";
import { useAppSelector } from "@/reducers/store";

export default function DetailsPage() {
  const { selectedVideo } = useAppSelector((root) => root.video);
  console.log(selectedVideo);
  return <div>Enter video Details: {selectedVideo?.[0]?.name}</div>;
}
