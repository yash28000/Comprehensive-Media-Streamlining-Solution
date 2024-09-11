import { ILoginPayload } from "./auth.types";

export const userLogin = async (body: ILoginPayload) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/api/v1/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );
  const data = await response.json();
  return data;
};
