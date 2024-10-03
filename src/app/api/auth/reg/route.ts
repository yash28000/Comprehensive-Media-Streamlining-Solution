import { NextRequest, NextResponse } from "next/server";
export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const body = await req.json();
    const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/verify`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await resp.json();
    const cookies = resp.headers.get("set-cookie");
    // if (cookies) {
    //   res.headers.set('set-cookie', cookies);
    // }
    return new NextResponse(JSON.stringify(data), {
      headers: {
        "set-cookie": cookies || "",
      },
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
};
