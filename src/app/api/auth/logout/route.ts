import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
export const GET = async (req: NextRequest) => {
  cookies().delete("accessToken");
  cookies().delete("refreshToken");
  return NextResponse.redirect(new URL("/auth/login", req.url));
};
