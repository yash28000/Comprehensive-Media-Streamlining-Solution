import { getClientToken } from "@/utils/functions";
import { ILoginPayload, IRegPayload } from "./auth.types";

export const registerUser = (payload: IRegPayload) => {
  const body = {
    name: `${payload.firstName} ${payload.lastName}`,
    ...payload,
  };
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

export const verifyUser = (body: { id: string; otp: string }) => {
  console.log(body);
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/verify`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

export const userLogin = async (body: ILoginPayload) => {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(body),
  });
};
