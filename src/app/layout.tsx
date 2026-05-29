import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aashirwad Builders - Luxury Real Estate",
  description: "Find your dream home with Aashirwad Builders. Premium luxury real estate, apartments, and villas.",
  keywords: ["real estate", "luxury apartments", "Aashirwad Builders", "villas", "property", "buy home"],
  authors: [{ name: "Aashirwad Builders" }],
  openGraph: {
    title: "Aashirwad Builders - Luxury Real Estate",
    description: "Find your dream home with Aashirwad Builders. Premium luxury real estate, apartments, and villas.",
    url: "https://aashirwadbuilders.com",
    siteName: "Aashirwad Builders",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aashirwad Builders - Luxury Real Estate",
    description: "Find your dream home with Aashirwad Builders. Premium luxury real estate, apartments, and villas.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
