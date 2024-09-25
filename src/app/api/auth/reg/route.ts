import { registerUser, verifyUser } from "@/services/auth.services";
import { serialize } from "cookie";
import { console } from "inspector";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const resp = await registerUser(body);
  const data = await resp.json();
  console.log(resp);
  return new NextResponse(JSON.stringify(data), {
    status: resp.status,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const GET = async (req: NextRequest) => {
  // Extract query parameters from the URL
  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get("id") || " ";
  const otp = searchParams.get("otp") || " "; // Convert OTP to a number

  // Call verifyUser with the extracted id and otp
  const resp = await verifyUser({ id, otp });

  // Get the response data
  const data = await resp.json();

  // If the response is successful, set the cookie and return the response
  if (resp.status === 200) {
    const serializedCookie = serialize("session", data["access_token"], {
      httpOnly: true,
      path: "/", // Ensure the cookie is available for all routes
      maxAge: 60 * 60 * 24 * 7, // Cookie expires in 1 week
      sameSite: "strict", // Helps prevent CSRF attacks
      secure: process.env.NODE_ENV === "production", // Use secure flag in production
    });

    return new NextResponse(JSON.stringify(data), {
      status: resp.status,
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": serializedCookie,
      },
    });
  }

  // Handle failure case
  return new NextResponse(JSON.stringify({ error: "Invalid ID or OTP" }), {
    status: resp.status,
  });
};
