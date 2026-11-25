import { createFileRoute } from "@tanstack/react-router";
import ScrollThread from "@/components/site/ScrollThread";
import SiteHeader from "@/components/site/SiteHeader";
import Hero from "@/components/site/Hero";
import Ticker from "@/components/site/Ticker";
import Lookbook from "@/components/site/Lookbook";
import CommissionsStrip from "@/components/site/CommissionsStrip";
import Atelier from "@/components/site/Atelier";
import FabricLibrary from "@/components/site/FabricLibrary";
import Testimonials from "@/components/site/Testimonials";
import Journal from "@/components/site/Journal";
import BookingBanner from "@/components/site/BookingBanner";
import Studio from "@/components/site/Studio";
import SiteFooter from "@/components/site/SiteFooter";
import ChatWidget from "@/components/site/ChatWidget";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gabson — Precision in Style | Bespoke Tailoring, Abuja" },
      {
        name: "description",
        content:
          "Gabson is a bespoke fashion house and consulting studio in Wuse 2, Abuja. Hand-drafted suits, bridal and ceremonial wear, built to measure.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-ink">
      <ScrollThread />
      <SiteHeader />
      <main>
        <Hero />
        <Ticker />
        <Lookbook />
        <CommissionsStrip />
        <Atelier />
        <FabricLibrary />
        <Testimonials />
        <Journal />
        <BookingBanner />
        <Studio />
      </main>
      <SiteFooter />
      <ChatWidget />
    </div>
  );
}