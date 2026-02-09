import PublicNavBar from "@/components/PublicNavBar";
import React from "react";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative">
      <PublicNavBar />
      <section className="pt-36">{children}</section>
    </main>
  );
}
