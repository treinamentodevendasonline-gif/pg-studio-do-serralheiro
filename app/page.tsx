import { Audience } from "@/components/Audience";
import { Benefits } from "@/components/Benefits";
import { Calculators } from "@/components/Calculators";
import { Categories } from "@/components/Categories";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Offer } from "@/components/Offer";
import { StickyCta } from "@/components/StickyCta";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <Categories />
        <Benefits />
        <Audience />
        <Calculators />
        <Offer />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
