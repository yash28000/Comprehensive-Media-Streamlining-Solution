import { userLogin } from "@/utils/auth.services/auth.service";
import { NextRequest, NextResponse } from "next/server";
import { serialize } from "cookie";
export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const resp = await userLogin(body);
  const data = await resp.json();
  if (resp.status === 200) {
    const serialized = serialize("session", data["access_token"], {
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
  }
  return new NextResponse(JSON.stringify(data));
};
