"use client";
import { Provider } from "react-redux";
import { store } from "@/reducers/store";
import { Toaster } from "@/components/ui/toaster";
import UserAuthVerification from "./userAuth";
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Provider store={store}>
        <UserAuthVerification>{children}</UserAuthVerification>
        <Toaster />
      </Provider>
    </div>
  );
}
