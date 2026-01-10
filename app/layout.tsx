import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navigation from "@/components/Navigation";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abhishek Patel – Full-Stack Engineer, Writer & Athlete",
  description:
    "Personal portfolio and writings by Abhishek Patel. A full-stack engineer who builds reliable systems and writes about life, spirituality, and lived experience.",
  keywords: [
    "Abhishek Patel",
    "Full Stack Engineer",
    "Portfolio",
    "Writings",
    "Personal Blog",
  ],
  authors: [{ name: "Abhishek Patel" }],
  creator: "Abhishek Patel",
  icons: {
    icon: "/images/favicon_logo2.png",
    shortcut: "/images/favicon_logo2.png",
    apple: "/images/favicon_logo2.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com",
    title: "Abhishek Patel – Full-Stack Engineer, Writer & Athlete",
    description: "Personal portfolio and writings by Abhishek Patel",
    siteName: "Abhishek Patel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Patel – Full-Stack Engineer, Writer & Athlete",
    description: "Personal portfolio and writings by Abhishek Patel",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <Navigation />
        <div className="pt-[73px]">{children}</div>
      </body>
    </html>
  );
}
