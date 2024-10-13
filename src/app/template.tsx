"use client";
import { Provider } from "react-redux";
import { store } from "@/reducers/store";
import { Toaster } from "@/components/ui/toaster";
import UserAuthVerification from "./userAuth";
import { QueryClient, QueryClientProvider } from "react-query";
export default function Template({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <div>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <UserAuthVerification>{children}</UserAuthVerification>
        </QueryClientProvider>
        <Toaster />
      </Provider>
    </div>
  );
}
