import type { Metadata } from "next";
import { Rubik_Glitch, Alegreya, Alkatra } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// const glitch = Rubik_Glitch({
//   subsets: ["latin"],
//   weight: "400",
//   variable: "--font-glitch",
// });

const alegreya = Alegreya({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-alegreya",
});
const alkatra = Alkatra({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-alkatra",
});


export const metadata: Metadata = {
  title: "Cricket-Dashboard",
  description: "Dashboard of Cricket analytics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${alegreya.variable} `}>
      <body>
        {children}
      </body>
    </html>
  );
}
