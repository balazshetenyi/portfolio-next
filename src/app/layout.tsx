import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Balazs Hetenyi - Senior Software Developer",
  description:
    "Senior Software Developer at Wellcome Sanger Institute. Building reliable, scalable, and human-centred software from data-driven cloud systems to intuitive user interfaces.",
  keywords: [
    "software developer",
    "software engineer",
    "frontend engineer",
    "full-stack",
    "AWS",
    "Python",
    "React",
    "Balazs Hetenyi",
  ],
  authors: [{ name: "Balazs Hetenyi" }],
  openGraph: {
    title: "Balazs Hetenyi - Senior Software Developer",
    description:
      "Senior Software Developer specializing in full-stack development, cloud systems, and software engineering education.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
