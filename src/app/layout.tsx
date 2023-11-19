import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="flex flex-col gap-24 px-5 py-10 bg-neutral-900 lg:px-40">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
