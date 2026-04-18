import { useRef, useState, useCallback, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import webAppImg from "@/assets/images/webapp.png";
import automation from "@/assets/images/automation.png";
import saas from "@/assets/images/saas.png";
import cloud from "@/assets/images/cloud.png";

interface Feature {
  id: string;
  heading: string;
  description: string;
  image: string;
  url: string;
}

interface Feature73Props {
  title?: string;
  description?: string;
  buttonUrl?: string;
  buttonText?: string;
  features?: Feature[];
  className?: string;
}

const Feature73 = ({
  title = "Comprehensive solutions,\nbuilt for you",
  description = "We deliver cutting-edge digital products powered by modern technology and human-centred engineering.",
  buttonUrl = "/services",
  buttonText = "Explore all services",
  features = [
    {
      id: "feature-1",
      heading: "Web & App Development",
      description:
        "Custom web and mobile applications built with modern frameworks for blazing performance, scale, and exceptional user experiences.",
      image: webAppImg,
      url: "/services",
    },
    {
      id: "feature-2",
      heading: "AI Automation",
      description:
        "Intelligent automation systems that eliminate repetitive tasks, surface insights, and unlock new capabilities across your operations.",
      image: automation,
      url: "/services",
    },
    {
      id: "feature-3",
      heading: "SaaS & Product Dev",
      description:
        "End-to-end product development for SaaS platforms — from concept to launch and sustainable growth alongside your team.",
      image: saas,
      url: "/services",
    },
    {
      id: "feature-4",
      heading: "Cloud Infrastructure",
      description:
        "Scalable, resilient cloud architectures designed for reliability and cost efficiency, with continuous monitoring and support.",
      image: cloud,
      url: "/services",
    },
  ],
  className,
}: Feature73Props) => {
  const prefersReduced = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const staggerCards = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const cardPop = {
    hidden: { opacity: 0, y: 32, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const v = (variant: any) => (prefersReduced ? undefined : variant);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const CARD_GAP = 24; // px — keep in sync with gap-6

  const getCardWidth = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 320;
    const card = track.querySelector<HTMLElement>("[data-card]");
    return card ? card.offsetWidth + CARD_GAP : 320;
  }, []);

  const updateArrows = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setCanPrev(track.scrollLeft > 4);
    setCanNext(track.scrollLeft + track.offsetWidth < track.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener("scroll", updateArrows, { passive: true });
    updateArrows();
    return () => track.removeEventListener("scroll", updateArrows);
  }, [updateArrows]);

  const scrollTo = (dir: "prev" | "next") => {
    const track = trackRef.current;
    if (!track) return;
    const cardW = getCardWidth();
    const delta = dir === "next" ? cardW : -cardW;
    track.scrollBy({ left: delta, behavior: "smooth" });

    setActiveIndex((prev) => {
      const next = dir === "next" ? prev + 1 : prev - 1;
      return Math.max(0, Math.min(features.length - 1, next));
    });
  };

  // Progress bar width
  const visibleCount = 3; // cards visible on desktop
  const progressPct = Math.min(
    100,
    ((activeIndex + visibleCount) / features.length) * 100,
  );

  return (
    <section className={cn("py-20 md:py-28 bg-[#f0f0f0]", className)}>
      <div className="max-w-[1200px] mx-auto px-6">
        {/* ─── Header row ─── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.35, margin: "0px 0px -80px 0px" }}
          variants={v(fadeUp)}
          className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12"
        >
          {/* Left: big title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight max-w-sm whitespace-pre-line">
            {title}
          </h2>

          {/* Right: description + link */}
          <div className="md:max-w-xs flex flex-col items-start gap-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
            {buttonUrl && (
              <Link
                to={buttonUrl}
                className="text-sm font-semibold text-foreground underline underline-offset-4 hover:opacity-70 transition-opacity"
              >
                {buttonText}
              </Link>
            )}
          </div>
        </motion.div>

        {/* ─── Scrollable card track ─── */}
        <motion.div
          ref={trackRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15, margin: "0px 0px -60px 0px" }}
          variants={v(staggerCards)}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-2"
          style={{ scrollbarWidth: "none" }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              data-card
              variants={v(cardPop)}
              className="flex-shrink-0 w-[calc(33.333%-16px)] min-w-[260px] flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm group"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={feature.image}
                  alt={feature.heading}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 px-6 py-7 gap-4">
                <h3 className="text-lg font-bold text-foreground leading-snug">
                  {feature.heading}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {feature.description}
                </p>
                <Link
                  to={feature.url}
                  className="self-start mt-1 inline-flex items-center px-5 py-2.5 rounded-lg bg-foreground text-background text-sm font-semibold hover:opacity-80 transition-opacity"
                >
                  Learn more
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ─── Footer: progress bar + nav arrows ─── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={v(fadeUp)}
          className="mt-8 flex items-center justify-between gap-4"
        >
          {/* Progress bar */}
          <div className="flex-1 max-w-xs h-[3px] rounded-full bg-border overflow-hidden">
            <div
              className="h-full bg-foreground rounded-full transition-all duration-300"
              style={{ width: `${progressPct}%` }}
            />
          </div>

          {/* Arrow buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo("prev")}
              disabled={!canPrev}
              aria-label="Previous service"
              className={cn(
                "w-10 h-10 rounded-full border border-border flex items-center justify-center transition-all duration-200",
                canPrev
                  ? "bg-background hover:bg-foreground hover:text-background hover:border-foreground"
                  : "opacity-30 cursor-not-allowed bg-background",
              )}
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollTo("next")}
              disabled={!canNext}
              aria-label="Next service"
              className={cn(
                "w-10 h-10 rounded-full border border-border flex items-center justify-center transition-all duration-200",
                canNext
                  ? "bg-background hover:bg-foreground hover:text-background hover:border-foreground"
                  : "opacity-30 cursor-not-allowed bg-background",
              )}
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { Feature73 };
