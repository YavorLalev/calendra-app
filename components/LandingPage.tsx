"use client";
import { SignIn } from "@clerk/nextjs";

import Image from "next/image";
export default function LandingPage() {
  return (
    <main className="flex items-center p-10 gap-24 animate-fade-in max-md:flex-col max-md:text-center max-md:items-center">
      <section className="flex flex-col items-center">
        <Image src="/assets/logo.svg" width={300} height={300} alt="logo" />
        <h1 className="text-2xl font-black lg:text-3xl">Friday on my mind</h1>
        <p className="font-extralight">
          Book your meetings and don't forget about Friday
        </p>
        <div className="mt-6">
          <Image
            src="/assets/planning.svg"
            width={500}
            height={500}
            alt="Team planning illustration"
          />
        </div>
      </section>
      {/* Clerk Sign-In Component*/}
      <div className="mt-2">
        <SignIn
          routing="hash" //Keeps sign-in UI on the same page using hash-based routing
        />
      </div>
    </main>
  );
}
