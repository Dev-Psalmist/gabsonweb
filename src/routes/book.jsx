import { createFileRoute } from "@tanstack/react-router";
import { Image } from "@/components/ui/image";
import ScrollThread from "@/components/site/ScrollThread";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import ChatWidget from "@/components/site/ChatWidget";
import BookingForm from "@/components/site/BookingForm";
import { ADDRESS, EMAIL, IMG, PHONE_DISPLAY, WHATSAPP_LINK } from "@/components/site/data";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a fitting — Gabson" },
      {
        name: "description",
        content:
          "Request a fitting session at the Gabson atelier in Wuse 2, Abuja. Measurements, cloth selection and a plan for the garment.",
      },
    ],
  }),
  component: BookPage,
});

const STEPS = [
  { n: "01", title: "Measure", body: "One hour at the table. Thirty-two measurements, photographed for reference." },
  { n: "02", title: "Draft", body: "A pattern is drawn from your body — not adjusted from a size block." },
  { n: "03", title: "Fit", body: "Three fittings: shell, canvas, finished. Each one changes the next." },
  { n: "04", title: "Finish", body: "Hand-worked buttonholes, final press, boxed and delivered." },
];

function BookPage() {
  return (
    <div className="min-h-screen bg-ink">
      <ScrollThread />
      <SiteHeader />

      <main className="relative overflow-hidden pb-24 pt-28 sm:pt-32">
        <div className="pointer-events-none absolute inset-0 grid-paper opacity-40" />
        <div className="pointer-events-none absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,hsl(var(--oxblood)/0.28),transparent_65%)] blur-2xl" />

        <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.4em] text-bone/40">
              <span className="h-px w-10 bg-oxblood-light" />
              Fitting session
            </div>
            <h1 className="mt-6 font-display text-[clamp(2.6rem,6vw,4.6rem)] leading-[0.95] text-bone">
              Book the <span className="italic text-oxblood-light">table</span>.
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-[1.8] text-bone/55">
              Tell us the occasion and a date that suits you. The studio confirms within one
              working day by phone or WhatsApp, and nothing is payable until the cloth is
              chosen.
            </p>

            <div className="mt-8 overflow-hidden border border-bone/10 bg-ink2">
              <Image
                src={IMG.linenShirt}
                alt="Linen shirt on the stand with line-art embroidery, before delivery"
                className="aspect-[3/4] w-full"
                fittingType="fit"
              />
            </div>

            <ol className="mt-8 divide-y divide-bone/10 border-y border-bone/10">
              {STEPS.map((step) => (
                <li key={step.n} className="flex gap-4 py-4">
                  <span className="mt-1 font-mono text-[10px] tracking-[0.2em] text-oxblood-light">
                    {step.n}
                  </span>
                  <div>
                    <h2 className="font-display text-lg leading-tight text-bone">
                      {step.title}
                    </h2>
                    <p className="mt-1 text-[13px] leading-relaxed text-bone/45">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-7 space-y-1.5 font-mono text-[9px] uppercase leading-relaxed tracking-[0.22em] text-bone/35">
              <p>{ADDRESS.line1}, {ADDRESS.line2}</p>
              <p>
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="hover:text-bone">
                  {PHONE_DISPLAY}
                </a>
                {" · "}
                <a href={`mailto:${EMAIL}`} className="hover:text-bone">
                  {EMAIL}
                </a>
              </p>
            </div>
          </div>

          <BookingForm />
        </div>
      </main>

      <SiteFooter />
      <ChatWidget />
    </div>
  );
}