import type { Metadata } from "next";
import { Geist } from "next/font/google";
import NavHeader from "@/components/NavHeader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s — Miguel Tablado",
    default: "Miguel Tablado",
  },
  description: "Personal website of Miguel Tablado, CTO for Applications, Data & AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavHeader />
        {children}
      </body>
    </html>
  );
}
