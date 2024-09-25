import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "../ui/Navbar";

const inter = localFont({
  src: "./assets/fonts/InterVF.ttf",
  variable: "--font-inter",
});

const interExtraBold = localFont({
  src: "./assets/fonts/static/Inter-ExtraBold.ttf",
  variable: "--font-inter-extra-bold",
});

export const metadata: Metadata = {
  title: "Worker News",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${interExtraBold.variable} antialiased bg-off-white`}
      >
        <main className="px-4 xl:px-40 lg:px-32 md:px-16">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}