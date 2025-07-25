import React from "react";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative">
      <section className="pt-36">{children}</section>
    </main>
  );
}
