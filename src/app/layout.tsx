import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/sections/Header" // imported the header component 
import Footer from "../components/sections/Footer" // imported the header component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Internship 1", // title of the page
  description: "Landing Page Project for my Internship", // additional metadata
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{backgroundColor: "#020817"}}>
      <Header /> { /* The Header Component */ }
      {children} {/* The entire page specific to a route */}
      <Footer />
      </body>
    </html>
  );
}
