import { useState, useCallback } from "react";
import { ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import faq1 from "@/assets/images/faq-1.png";
import faq2 from "@/assets/images/faq-2.png";
import faq3 from "@/assets/images/faq-3.png";

/* ─── Types ─── */
interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  badge?: string;
  heading?: string;
  subtext?: string;
  items?: FaqItem[];
  images?: string[];
  className?: string;
}

/* ─── Default data ─── */
const defaultItems: FaqItem[] = [
  {
    question: "What services does Kadix Technologies offer?",
    answer:
      "We specialise in custom web & mobile app development, AI-powered automation, SaaS product engineering, and scalable cloud infrastructure. Every engagement is tailored to your specific business goals.",
  },
  {
    question: "How long does it take to build a product?",
    answer:
      "Timelines depend on scope. A focused MVP typically takes 6–10 weeks, while a full-scale platform can take 3–6 months. We'll map out a transparent timeline during our discovery phase so there are no surprises.",
  },
  {
    question: "Do you build custom solutions or use templates?",
    answer:
      "Everything we ship is custom-engineered. We don't reskin templates — we architect systems from the ground up using modern frameworks and best practices so your product stands apart.",
  },
  {
    question: "Can you help scale and maintain our product?",
    answer:
      "Absolutely. We offer ongoing maintenance, monitoring, and growth-stage engineering. Whether you need performance tuning, infrastructure scaling, or new feature development, we're here for the long run.",
  },
  {
    question: "Do you also build your own startups?",
    answer:
      "Yes. Kadix operates as both a studio and a venture builder. We incubate our own products alongside client work, which keeps our engineering sharp and ensures we understand the founder journey firsthand.",
  },
];

/* ─── Accordion Item ─── */
const AccordionItem = ({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <div
    className={cn(
      "rounded-2xl transition-all duration-300 group/item",
      isOpen
        ? "bg-gradient-to-r from-[#0b00da]/[0.04] to-[#4ba4fd]/[0.06] shadow-[0_0_0_1.5px_rgba(43,45,255,0.18)]"
        : "bg-[#f1f3ff] hover:bg-[#e8ebff] hover:shadow-md",
    )}
  >
    <button
      onClick={onToggle}
      aria-expanded={isOpen}
      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
    >
      <span
        className={cn(
          "text-[15px] font-semibold leading-snug transition-colors duration-200",
          isOpen ? "text-[#2b2dff]" : "text-[#1a1a1a]",
        )}
      >
        {item.question}
      </span>
      <span
        className={cn(
          "flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300",
          isOpen
            ? "bg-gradient-to-r from-[#0b00da] to-[#4ba4fd] text-white rotate-180"
            : "bg-[#dce2f7] text-[#666666]",
        )}
      >
        <ChevronDown className="h-4 w-4" />
      </span>
    </button>

    {/* Collapsible body */}
    <div
      className={cn(
        "grid transition-all duration-300 ease-in-out",
        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
      )}
    >
      <div className="overflow-hidden">
        <p className="px-6 pb-5 text-sm leading-relaxed text-[#666666]">
          {item.answer}
        </p>
      </div>
    </div>
  </div>
);

/* ─── Main component ─── */
const FaqSection = ({
  badge = "FAQs",
  heading = "Frequently asked\nquestions",
  subtext = "Everything you need to know about working with Kadix Technologies.",
  items = defaultItems,
  images = [faq1, faq2, faq3],
  className,
}: FaqSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const prefersReduced = useReducedMotion();

  const handleToggle = useCallback(
    (idx: number) => setOpenIndex((prev) => (prev === idx ? null : idx)),
    [],
  );

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const slideLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const staggerParent = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08, delayChildren: 0.15 },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const v = (variant: any) => (prefersReduced ? undefined : variant);

  return (
    <section
      id="faq"
      className={cn("py-20 md:py-28", className)}
      style={{ backgroundColor: "#f9f9ff" }}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* ─── LEFT: Image Grid ─── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25, margin: "0px 0px -60px 0px" }}
            variants={v(slideLeft)}
            className="grid grid-cols-2 gap-4"
          >
            {/* Top-left tall image */}
            <div className="row-span-2 overflow-hidden rounded-2xl shadow-lg">
              <img
                src={images[0]}
                alt="Abstract tech illustration — interconnected networks"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
            {/* Top-right */}
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src={images[1]}
                alt="Abstract tech illustration — layered interfaces"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
            {/* Bottom-right */}
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src={images[2]}
                alt="Abstract tech illustration — cloud architecture"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* ─── RIGHT: FAQs ─── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2, margin: "0px 0px -60px 0px" }}
            variants={v(staggerParent)}
            className="flex flex-col gap-6"
          >
            {/* Badge */}
            <motion.span variants={v(fadeUp)} className="inline-flex w-fit items-center rounded-full bg-[#dce2f7] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#2b2dff]">
              {badge}
            </motion.span>

            {/* Heading */}
            <motion.h2 variants={v(fadeUp)} className="text-3xl font-extrabold leading-tight text-[#1a1a1a] md:text-4xl lg:text-[42px] whitespace-pre-line">
              {heading}
            </motion.h2>

            {/* Subtext */}
            <motion.p variants={v(fadeUp)} className="max-w-md text-[15px] leading-relaxed text-[#666666]">
              {subtext}
            </motion.p>

            {/* Accordion list */}
            <div className="mt-2 flex flex-col gap-3">
              {items.map((item, idx) => (
                <motion.div key={idx} variants={v(staggerItem)}>
                  <AccordionItem
                    item={item}
                    isOpen={openIndex === idx}
                    onToggle={() => handleToggle(idx)}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { FaqSection };
