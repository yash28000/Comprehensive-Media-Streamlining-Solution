"use client";
import { Provider } from "react-redux";
import { store } from "@/reducers/store";
import { Toaster } from "@/components/ui/toaster";
import { useEffect } from "react";
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Provider store={store}>{children}
        <Toaster/>
      </Provider>
    </div>
  );
}
