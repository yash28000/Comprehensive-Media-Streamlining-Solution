import { NextResponse } from "next/server";

export async function POST(
  request: Request,
  { params }: { params: { videoId: string } }
) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/video/${params.videoId}/view`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie: request.headers.get("cookie") || "",
        },
      }
    );

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to increment view count",
      },
      { status: 500 }
    );
  }
} 