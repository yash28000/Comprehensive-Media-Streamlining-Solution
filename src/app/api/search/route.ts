import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");

  if (!query) {
    return NextResponse.json({ 
      statusCode: 400, 
      message: "Search query is required",
      success: false 
    });
  }

  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/video/published`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Cookie: request.headers.get("cookie") || "",
      },
    }
  );

  const data = await resp.json();

  // Filter videos based on search query
  const filteredVideos = data.data.videoList.filter((video: any) =>
    video.title.toLowerCase().includes(query.toLowerCase())
  );
  console.log(filteredVideos);
  return NextResponse.json({
    statusCode: 200,
    message: "Search results fetched successfully",
    data: {
      videoList: filteredVideos
    },
    success: true
  });
}
