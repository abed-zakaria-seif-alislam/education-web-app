import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Pricing from "@/components/landing/Pricing";
import HowItWorks from "@/components/landing/HowItWorks";
import Footer from "@/components/landing/Footer";
import CallToAction from "@/components/landing/CallToAction";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-umedify-background">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <HowItWorks />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
