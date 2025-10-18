import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sport Clube Borbense - Official Website",
  description: "Official website of Sport Clube Borbense. Join our community and support our team since 1950.",
  keywords: ["football", "soccer", "sports", "club", "community", "Borbense"],
  authors: [{ name: "Sport Clube Borbense" }],
  openGraph: {
    title: "Sport Clube Borbense - Official Website",
    description: "Official website of Sport Clube Borbense. Join our community and support our team since 1950.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
