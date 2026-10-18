import Header from "@/components/Header";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Contact Us | Azpire Advisory - Book a Free Consultation",
    description: "Get in touch with Azpire Advisory for tailored accounting, tax, and business advisory services in Dubai. Book your free consultation today.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <div className="pt-20">
                <Contact />
                <FAQ />
            </div>
            <Footer />
        </main>
    );
}
