import { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import OurValues from "@/components/about/OurValues";
import TeamSection from "@/components/about/TeamSection";
import Certifications from "@/components/about/Certifications";
import CTA from "@/components/CTA";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | Azpire Advisory - Dubai's Trusted Accounting & Advisory Firm",
  description:
    "Learn about Azpire Advisory, Dubai's premier accounting and business advisory firm. Meet our team of certified experts dedicated to helping SMEs achieve financial excellence.",
  keywords: [
    "about Azpire Advisory",
    "Dubai accounting firm",
    "UAE business advisory",
    "certified accountants Dubai",
    "Xero partner UAE",
    "QuickBooks advisor Dubai",
    "financial consultants UAE",
  ],
  openGraph: {
    title: "About Azpire Advisory | Dubai's Trusted Financial Partner",
    description:
      "Discover how Azpire Advisory helps SMEs transform financial complexity into strategic clarity with expert accounting, tax, and advisory services.",
    type: "website",
    locale: "en_AE",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutHero />
      <OurStory />
      <OurValues />
      <TeamSection />
      <Certifications />
      <CTA />
      <Footer />
    </main>
  );
}
