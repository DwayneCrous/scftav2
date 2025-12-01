import HeroSection from "@/components/hero-section";
import Features from "@/components/features-4";
import FAQsThree from "@/components/faqs-3";
import CallToAction from "@/components/call-to-action";
import FooterSection from "@/components/footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Features />
      <FAQsThree />
      <CallToAction />
      <FooterSection />
    </div>
  );
}
