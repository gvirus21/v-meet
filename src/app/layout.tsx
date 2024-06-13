import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "./navbar";
import { Toaster } from "@/components/ui/toaster";
import StreamClientProvider from "@/providers/StreamClientProvider";

import "./globals.css";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "V Meet",
  description: "Your go to Video Conference app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <StreamClientProvider>
          <Navbar />
          <Toaster />
          {children}
          </StreamClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
