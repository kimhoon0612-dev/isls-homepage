import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Providers } from "@/components/Providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "ISLS - International Society of Liver Surgeons",
  description: "Official website of the International Society of Liver Surgeons",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-gray-50 text-gray-900`}>
        <Providers>
          <Navbar />
          <main className="min-h-screen pt-20">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
