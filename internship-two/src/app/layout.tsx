import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/sections/Header"; // imported the header section


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Internship 2",
  description: "My second project for Internship",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <Header /> // the common header section
      {children}
      </body>
    </html>
  );
}
