import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Image } from "@/components/ui/image";
import { ADDRESS, IMG, STATS } from "./data";
import usePointerSync from "./usePointerSync";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yMain = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const ySub = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0.4]);

  const { x, y } = usePointerSync();
  const mainX = useTransform(x, [-0.5, 0.5], [16, -16]);
  const mainY = useTransform(y, [-0.5, 0.5], [12, -12]);
  const subX = useTransform(x, [-0.5, 0.5], [-26, 26]);
  const subY = useTransform(y, [-0.5, 0.5], [-16, 16]);
  const thirdX = useTransform(x, [-0.5, 0.5], [22, -22]);
  const thirdY = useTransform(y, [-0.5, 0.5], [16, -16]);
  const typeX = useTransform(x, [-0.5, 0.5], [-8, 8]);

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-ink pt-28 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 grid-paper opacity-60" />
      <div className="pointer-events-none absolute -right-48 -top-40 h-[760px] w-[760px] rounded-full bg-[radial-gradient(circle,hsl(var(--oxblood)/0.34),transparent_62%)] blur-2xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-8 lg:pb-24">
        <motion.div style={{ x: typeX }}>
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.4em] text-bone/45">
            <span className="h-px w-10 bg-oxblood-light" />
            Bespoke fashion house · Est. 2016
          </div>

          <h1 className="mt-7 font-display text-[clamp(3.2rem,8.6vw,7.4rem)] font-normal leading-[0.86] tracking-[-0.02em] text-bone">
            Precision
            <span className="block italic text-oxblood-light">in style.</span>
          </h1>

          <p className="mt-7 max-w-md text-[15px] leading-[1.75] text-bone/60">
            Gabson drafts, cuts and finishes clothing to a single body — yours. Bespoke
            suiting, bridal and ceremonial wear, made by hand at our atelier in Wuse 2,
            Abuja.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              to="/book"
              className="group inline-flex items-center gap-3 bg-bone px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.26em] text-ink transition-colors hover:bg-oxblood hover:text-bone"
            >
              Book a fitting
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <a
              href="#lookbook"
              className="inline-flex items-center gap-3 border border-bone/20 px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.26em] text-bone/75 transition-colors hover:border-bone/50 hover:text-bone"
            >
              View the lookbook
            </a>
          </div>

          <div className="mt-12 flex items-start gap-2.5 text-bone/45">
            <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-oxblood-light" />
            <p className="font-mono text-[10px] uppercase leading-[1.9] tracking-[0.22em]">
              {ADDRESS.line1}
              <br />
              {ADDRESS.line2}
            </p>
          </div>
        </motion.div>

        <div className="relative mx-auto h-[500px] w-full max-w-[560px] sm:h-[600px] lg:h-[660px]">
          <motion.div style={{ y: yMain, opacity: fade }} className="absolute inset-0">
            <motion.div
              style={{ x: mainX, y: mainY, transformPerspective: 1200 }}
              className="absolute right-0 top-0 h-[84%] w-[74%]"
            >
              <div className="relative h-full w-full overflow-hidden border border-bone/15 bg-ink2 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)]">
                <Image
                  src={IMG.hallway}
                  alt="Couple in a bespoke black tuxedo and ivory gown walking through a stone hallway"
                  className="h-full w-full"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/5 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-bone/60">
                    Look 01 · The Ivory Procession
                  </p>
                </div>
                <span className="absolute left-4 top-4 font-mono text-[9px] uppercase tracking-[0.3em] text-bone/45">
                  GB · 001
                </span>
              </div>
            </motion.div>

            <motion.div
              style={{ x: subX, y: subY, transformPerspective: 1200 }}
              className="absolute bottom-0 left-0 h-[44%] w-[46%]"
            >
              <div className="relative h-full w-full overflow-hidden border border-bone/20 bg-ink2 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.95)]">
                <Image
                  src={IMG.kiss}
                  alt="Groom in a satin-lapel tuxedo kissing the bride's forehead"
                  className="h-full w-full"
                  focalPointY={0.4}
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                <span className="absolute bottom-3 left-3 font-mono text-[9px] uppercase tracking-[0.28em] text-bone/60">
                  Hand-finished
                </span>
              </div>
            </motion.div>

            <motion.div
              style={{ x: thirdX, y: thirdY, transformPerspective: 1200 }}
              className="absolute left-0 top-0 h-[33%] w-[31%]"
            >
              <div className="relative h-full w-full overflow-hidden border border-bone/15 bg-ink2 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.9)]">
                <Image
                  src={IMG.coralClose}
                  alt="Close study of tiered coral beadwork and a beaded headdress"
                  className="h-full w-full"
                  focalPointY={0.42}
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 to-transparent" />
                <span className="absolute bottom-2.5 left-2.5 font-mono text-[8px] uppercase tracking-[0.24em] text-bone/65">
                  Coral · detail
                </span>
              </div>
            </motion.div>

            <div className="absolute bottom-[38%] right-[2%] hidden items-center gap-2.5 sm:flex">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-gold" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-bone/55">
                Atelier open · by appointment
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 pb-10 sm:px-8">
        <dl className="grid grid-cols-2 gap-y-6 border-t border-bone/10 pt-7 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <dt className="font-display text-2xl text-bone sm:text-3xl">{stat.value}</dt>
              <dd className="mt-1 font-mono text-[9px] uppercase tracking-[0.24em] text-bone/40">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}