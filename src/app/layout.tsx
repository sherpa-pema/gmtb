import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#FCFCFC] text-[#09090B] selection:bg-[#FF4D1C] selection:text-white font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}


