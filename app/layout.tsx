import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Optimizer Scorecard",
  description: "See how your battery optimizer really performs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
