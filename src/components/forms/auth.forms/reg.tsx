import { AccountInfoReg } from "@/components/accordians/account.information.create";
import Link from "next/link";

export const RegForm = () => {
  return (
    <div className="w-full px-10 py-10">
      <h1 className="text-3xl font-kanit">Create a elInfra account</h1>
      <p className="text-sm mt-2">Already have an elinfra account?
        <Link href="/auth/login" className="ml-1 text-blue-600 underline">
          log in
        </Link>
      </p>
      <AccountInfoReg/>
    </div>
  );
};
