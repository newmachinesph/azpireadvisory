import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://azpireadvisory.com"),
  title: "Azpire Advisory | Expert Accounting, Tax & Advisory Services for SMEs",
  description:
    "Azpire Advisory provides expert accounting, tax compliance, and business advisory services tailored for SMEs in Dubai, UAE. Partner with us for tailored financial strategies that drive growth.",
  keywords: [
    "accounting services Dubai",
    "tax advisory UAE",
    "SME accounting",
    "business advisory",
    "financial strategy",
    "Xero partner",
    "QuickBooks partner",
    "Dubai accountants",
  ],
  authors: [{ name: "Azpire Advisory" }],
  creator: "Azpire Advisory",
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://azpireadvisory.com",
    siteName: "Azpire Advisory",
    title: "Azpire Advisory | Expert Accounting, Tax & Advisory Services",
    description:
      "Expert accounting and business advisory services for SMEs in Dubai. Tailored financial strategies that drive growth.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Azpire Advisory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Azpire Advisory | Accounting, Tax & Advisory",
    description: "Expert accounting and business advisory services for SMEs in Dubai.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
