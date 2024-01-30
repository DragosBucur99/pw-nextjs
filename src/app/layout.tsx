import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import ToastProvider from "./toast.provider";

export const metadata: Metadata = {
  title: "Dragos Portfolio",
  description: "Software Development Engineer in Test",
};

import { Providers } from "./providers";
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
    <html lang="en" className={`${poppins.className} dark`}>
      <body className="bg-neutral-900">
        <Nav />
        <ToastProvider>
          <Providers>
            {children}
            <Footer />
          </Providers>
        </ToastProvider>
      </body>
    </html>
  );
}
