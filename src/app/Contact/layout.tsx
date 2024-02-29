import React from "react";

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  async function rawFormData() {
    "use server";
  }
  return <div>{children}</div>;
}
