import { getCookie } from "cookies-next";
import { NextRequest, NextResponse } from "next/server";

// Check if we're on the client side
export const isClient = () => typeof window !== "undefined";

// Retrieve token on the client side
export const getClientToken = () => {
  if (isClient()) {
    const authToken = getCookie("session");
    console.log("Client token:", authToken); // Debugging log

    if (authToken) {
      try {
        return JSON.parse(authToken as string); // Attempt to parse the token
      } catch (error) {
        console.error("Error parsing client token:", error);
        return authToken; // Return raw token if parsing fails
      }
    }
  }
  return null; // Return null if no token is found
};

// Retrieve token on the server side
export const getServerToken = (req: NextRequest, res: NextResponse) => {
  const cookie = getCookie("session", { req, res });
  if (cookie) {
    try {
      return JSON.parse(cookie as string); // Parse the token
    } catch (error) {
      console.error("Error parsing server token:", error);
      return cookie; // Return raw token if parsing fails
    }
  }
  return null; // Return null if no token is found
};
