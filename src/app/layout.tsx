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
    url: "https://aashirwadbuilders.in",
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
  icons: {
    apple: "/logo.png",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Aashirwad Builders",
              "url": "https://aashirwadbuilders.in",
              "logo": "https://aashirwadbuilders.in/logo.png"
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
