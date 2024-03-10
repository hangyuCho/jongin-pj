import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "playlist",
  description: "playlist by youtube",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={[inter.className, 'flex justify-center h-full bg-black text-white'].join(" ")}>
        <div className="w-[375px]">{children}</div>
      </body>
    </html>
  );
}
