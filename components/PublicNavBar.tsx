import Link from "next/link";
import Image from "next/image";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
export default function PublicNavBar() {
  return (
    <nav className="flex justify-between items-center fixed z-50 w-full h-20 bg-amber-200 px-10 gap-3">
      <Link
        href="/login"
        className="flex items-center gap-1 hover:scale-120 duration-500"
      >
        <Image src="/assets/Logo.svg" width={60} height={60} alt="Logo" />
      </Link>
      <section className="sticky top-0 flex justify-between">
        <div className="flex flex-1 max-sm:gap-0 sm:gap-6">
          <SignInButton>
            <Button className="bg-blue-500 hover:bg-blue-700 border border-blue-700 text-white font-bold py-2 px-4 rounded-2xl cursor-pointer hover:scale-120 duration-500">
              Login
            </Button>
          </SignInButton>
          <SignUpButton>
            <Button className="bg-white hover:bg-gray-100 border border-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-2xl cursor-pointer hover:scale-120 duration-500">
              Register
            </Button>
          </SignUpButton>
        </div>
      </section>
    </nav>
  );
}
