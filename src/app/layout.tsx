import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aashirwad Builders - Luxury Real Estate",
  description: "Aashirwad Builders - Where luxury finds a home. Office: F-39, Govindam Tower, Kalwar Road, Jaipur, 302012.",
  keywords: ["real estate", "luxury apartments", "Aashirwad Builders", "villas", "property", "buy home", "real estate in jaipur", "best builders in jaipur", "apartments in jaipur", "villas in jaipur", "plots in jaipur", "land in jaipur", "land for sale in jaipur", "plot for sale in jaipur","residential plots for sale in jaipur","residential plots in jaipur","residential plots in kalwar road jaipur","residential plots in kalanaka jaipur", "vaishali west villas","builders", "colonizers", "built on your own pace",],
  authors: [{ name: "Aashirwad Builders" }],
  openGraph: {
    title: "Aashirwad Builders - Luxury Real Estate",
    description: "Aashirwad Builders - Where Luxury Finds a Home. Office: F-39, Govindam Tower, Kalwar Road, Jaipur, 302012.",
    url: "https://www.aashirwadbuilders.in",
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
    description: "Aashirwad Builders - Where Luxury Finds a Home. Office: F-39, Govindam Tower, Kalwar Road, Jaipur, 302012.",
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
              "url": "https://www.aashirwadbuilders.in",
              "logo": "https://www.aashirwadbuilders.in/logo.png"
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
