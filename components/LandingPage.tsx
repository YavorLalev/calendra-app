import { SignIn } from "@clerk/nextjs";
import { dark, neobrutalism, shadesOfPurple } from "@clerk/themes";
import Image from "next/image";
export default function LandingPage() {
  return (
    <main className="flex items-center p-10 gap-24 animate-fade-in max-md:flex-col">
      <section className="flex flex-col items-center">
        <Image src="/assets/logo.svg" width={200} height={200} alt="logo" />
        <h1 className="text-2x1 font-black lg:text-3x1">Friday on my mind</h1>
        <p className="font-extralight">
          Book your meetings and don't forget about Friday
        </p>
        <Image src="/assets/planning.svg" width={300} height={300} alt="Logo" />
      </section>
      {/* Clerk Sign-In Component with custom theme */}
      <div className="mt-3">
        <SignIn
          routing="hash" //Keeps sign-in UI on the same page using hash-based routing
        />
      </div>
    </main>
  );
}
