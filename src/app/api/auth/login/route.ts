import { userLogin } from "@/utils/auth.services/auth.service";
import { NextRequest, NextResponse } from "next/server";
import { serialize } from "cookie";
export const POST = async (req: NextRequest, res: NextResponse) => {
  const body = await req.json();
  const resp = await userLogin(body);
  const serialized = serialize("session", resp.access.token, {
    httpOnly: true,
    sameSite: "strict",
    path: "/",
  });
  return new NextResponse(
    JSON.stringify({
      status: true,
    }),
    {
      headers: {
        "Set-Cookie": serialized,
      },
    }
  );
};
