import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/mycomponents/Whatsapp";

import ScrollToTop from "@/mycomponents/ScrolltoTop";

import Footer from "@/mycomponents/Footer";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Add the weights you need
  variable: "--font-poppins", // Define a CSS variable name
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Best real estate deals in Mumbai.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`} suppressHydrationWarning>
      <body
        className={`min-h-full w-full overflow-x-hidden ${poppins.className}`}
      >
        {children}
        <ScrollToTop />
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
