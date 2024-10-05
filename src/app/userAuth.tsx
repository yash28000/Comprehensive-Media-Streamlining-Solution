"use client";

import { useAppDispatch, useAppSelector } from "@/reducers/store";
import { setUserDetails } from "@/reducers/user/user.actions";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function UserAuthVerification({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoggedIn } = useAppSelector((root) => root.auth);
  const dispatch = useAppDispatch();
  const pathname = usePathname()
  useEffect(() => {
    if (!isLoggedIn && !pathname.includes("auth")) {
      dispatch(setUserDetails());
    }
  }, [isLoggedIn]);
  return <>{children}</>;
}
