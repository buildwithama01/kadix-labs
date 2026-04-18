import { useState, useCallback } from "react";
import { ChevronDown, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";

/* ─── Types ─── */
interface FaqItem {
  question: string;
  answer: string;
}

interface ServicesFaqProps {
  className?: string;
}

/* ─── FAQ Data ─── */
const faqItems: FaqItem[] = [
  {
    question: "What is Startify and how can it benefit my team?",
    answer:
      "Kadix Technologies helps SaaS teams and startups build, automate, and scale their products faster. From custom web and mobile development to AI-powered workflow automation, we handle the technical heavy lifting so your team can focus on growth.",
  },
  {
    question: "Is your service suitable for teams?",
    answer:
      "Absolutely. Whether you're a solo founder or a 200+ person team, our solutions are designed to integrate seamlessly into your existing workflow. We provide dedicated project management, async collaboration, and transparent progress tracking throughout every engagement.",
  },
  {
    question: "Can I use Startify with other tools?",
    answer:
      "Yes. We build integrations that connect with 50+ platforms including Slack, Stripe, GitHub, Notion, and more. Our architecture-first approach ensures every integration is reliable, secure, and performant at scale — your stack, unified.",
  },
  {
    question: "How does the pricing work?",
    answer:
      "We offer flexible engagement models: fixed-scope projects, monthly retainers, and dedicated team placements. Every engagement starts with a free discovery call so we can scope the right approach for your budget and timeline. No hidden fees, no surprises.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. We offer ongoing maintenance, monitoring, and growth-stage engineering. Whether you need performance tuning, infrastructure scaling, or new feature development, we're here for the long run. Most clients engage with us well beyond the initial launch.",
  },
  {
    question: "What kind of apps or services can I build?",
    answer:
      "Almost anything digital. Custom SaaS platforms, mobile apps (iOS & Android), AI automation pipelines, e-commerce systems, fintech solutions, healthtech platforms, and internal tools. If it runs on code, we can build it — and make it beautiful.",
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
      "border-b border-[#e8e8f0] transition-all duration-300",
      isOpen && "bg-[#f9f9ff]"
    )}
  >
    <button
      onClick={onToggle}
      aria-expanded={isOpen}
      className="flex w-full items-center justify-between gap-4 px-0 py-5 text-left cursor-pointer group"
    >
      <span
        className={cn(
          "text-[15px] md:text-base font-semibold leading-snug transition-colors duration-200",
          isOpen ? "text-[#2b2dff]" : "text-[#1a1a1a] group-hover:text-[#2b2dff]"
        )}
      >
        {item.question}
      </span>
      <span
        className={cn(
          "flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300",
          isOpen
            ? "bg-gradient-to-r from-[#0b00da] to-[#4ba4fd] text-white rotate-45"
            : "bg-[#f1f3ff] text-[#666666] group-hover:bg-[#dce2f7]"
        )}
      >
        <Plus className="h-4 w-4" />
      </span>
    </button>

    {/* Collapsible body */}
    <div
      className={cn(
        "grid transition-all duration-300 ease-in-out",
        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      )}
    >
      <div className="overflow-hidden">
        <p className="pb-5 text-sm leading-relaxed text-[#666666] max-w-2xl">
          {item.answer}
        </p>
      </div>
    </div>
  </div>
);

/* ── Animation Variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

/* ─── Services FAQ — Two-column Layout ─── */
export const ServicesFaq = ({ className }: ServicesFaqProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const prefersReduced = useReducedMotion();
  const v = (variant: any) => (prefersReduced ? undefined : variant);

  const handleToggle = useCallback(
    (idx: number) => setOpenIndex((prev) => (prev === idx ? null : idx)),
    []
  );

  const midpoint = Math.ceil(faqItems.length / 2);
  const leftColumn = faqItems.slice(0, midpoint);
  const rightColumn = faqItems.slice(midpoint);

  return (
    <section
      id="services-faq"
      className={cn("py-20 md:py-28 bg-[#f9f9ff]", className)}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.35, margin: "0px 0px -100px 0px" }}
          variants={v(fadeUp)}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#dce2f7] rounded-full mb-5 w-max mx-auto">
            <div className="w-1.5 h-1.5 rounded-full bg-[#2b2dff]" />
            <span className="text-[11px] md:text-xs font-bold text-[#2b2dff] tracking-widest uppercase">
              FAQs
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a] tracking-tight">
            Got Questions?
          </h2>
        </motion.div>

        {/* Two-column FAQ Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2, margin: "0px 0px -60px 0px" }}
          variants={v(stagger)}
          className="grid md:grid-cols-2 gap-x-12 lg:gap-x-20"
        >
          {/* Left Column */}
          <motion.div variants={v(fadeUp)}>
            {leftColumn.map((item, idx) => (
              <AccordionItem
                key={idx}
                item={item}
                isOpen={openIndex === idx}
                onToggle={() => handleToggle(idx)}
              />
            ))}
          </motion.div>

          {/* Right Column */}
          <motion.div variants={v(fadeUp)}>
            {rightColumn.map((item, idx) => {
              const globalIdx = midpoint + idx;
              return (
                <AccordionItem
                  key={globalIdx}
                  item={item}
                  isOpen={openIndex === globalIdx}
                  onToggle={() => handleToggle(globalIdx)}
                />
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};



