import type { Metadata } from "next";
import { Bebas_Neue, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-label",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GNARLY MTB Nepal • Signature Himalayan Expeditions & Enduro",
  description:
    "Local riders, expert guides, Himalayan big mountain riding. Premium MTB expeditions in Lower Mustang, Upper Mustang & Everest region.",
  keywords: [
    "MTB Nepal",
    "Mountain Biking Nepal",
    "Mustang MTB",
    "Himalayan Enduro",
    "Everest MTB",
    "GNARLY",
  ],
  authors: [{ name: "GNARLY PVT. LTD." }],
  openGraph: {
    title: "GNARLY MTB Nepal • Signature Himalayan Expeditions & Enduro",
    description:
      "Local riders, expert guides, Himalayan big mountain riding. Premium MTB expeditions in Lower Mustang, Upper Mustang & Everest region.",
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
    <html
      lang="en"
      className={`${bebasNeue.variable} ${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="min-h-screen bg-[#FAF9F6] text-[#111111] selection:bg-[#FF4D1C] selection:text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
