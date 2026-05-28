import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aashirwad Builders - Luxury Real Estate",
  description: "Find your dream home with Aashirwad Builders. Premium luxury real estate, apartments, and villas.",
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
