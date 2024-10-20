"use client";

import { useAppDispatch, useAppSelector } from "@/reducers/store";
import { setUserDetails } from "@/reducers/user/user.actions";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useQuery } from "react-query";

export default function UserAuthVerification({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoggedIn } = useAppSelector((root) => root.auth);
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const { data } = useQuery(
    "user",
    async () => {
      console.log("fetching user ...");
      const response = await fetch("/api/auth/login", {
        method: "GET",
        credentials: "include",
      });
      return await response.json();
    },
    {
      enabled: !isLoggedIn && !pathname.includes("auth"),
    }
  );
  useEffect(() => {
    if (data) {
      dispatch(setUserDetails(data.data.user));
    }
  }, [data]);
  return <>{children}</>;
}
