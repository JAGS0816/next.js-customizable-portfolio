import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abraham García's Portfolio",
  description: "Custom Web Scraping, Data Science, FullStack Developing and Mechatronic Engineering services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="">
      <Providers>
        <body className={inter.className}>
          <Navbar/>
          {children}
        </body>
      </Providers>
    </html>
  )
}
