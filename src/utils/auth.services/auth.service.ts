import { ILoginPayload } from "./auth.types";

export const userLogin = async (body: ILoginPayload) => {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(body),
  });
};
