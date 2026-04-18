import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer end-to-end software development, including custom web and mobile applications, AI-powered automation, cloud infrastructure design, and UX/UI design consulting."
  },
  {
    question: "What industries do you work with?",
    answer: "We partner with ambitious companies across various industries including Fintech, Healthcare, E-commerce, SaaS, and Logistics. We love tackling complex problems regardless of the domain."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on complexity. A typical MVP takes anywhere from 4 to 8 weeks, while enterprise platforms can take 3 to 6 months to define, build, and scale."
  },
  {
    question: "Do you offer custom designs or use templates?",
    answer: "We specialize in fully custom, premium designs tailored to your brand identity. We do not rely on pre-made templates, ensuring your product stands out perfectly in the market."
  },
  {
    question: "How much do your services cost?",
    answer: "We offer both fixed-price contracts for well-defined scopes and time-and-materials engagement. Pricing strictly depends on project scale, timeline, and required resources."
  },
  {
    question: "Can I request revisions?",
    answer: "Absolutely. Our agile process incorporates regular feedback loops. We provide dedicated sprint reviews to ensure the product perfectly aligns with your expectations."
  }
];

/* ── Animation Variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

export const ContactFaq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const prefersReduced = useReducedMotion();
  const v = (variant: any) => (prefersReduced ? undefined : variant);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-[1100px] mx-auto px-6 mb-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.25, margin: "0px 0px -80px 0px" }}
        variants={v(stagger)}
        className="flex flex-col lg:flex-row gap-12 lg:gap-24"
      >

        {/* Left Side: Heading */}
        <motion.div variants={v(slideLeft)} className="lg:w-1/3 pt-4">
          <h2 className="text-5xl md:text-6xl font-normal tracking-tight text-[#1a1a1a]">
            FA<span className="text-[#2b2dff]">Qs</span>
          </h2>
        </motion.div>

        {/* Right Side: Accordion */}
        <motion.div variants={v(slideRight)} className="lg:w-2/3">
          <div className="bg-white rounded-xl border border-border/40 shadow-[0_2px_12px_rgba(0,0,0,0.02)] overflow-hidden">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`border-b border-border/40 last:border-b-0 transition-colors duration-300 ${isOpen ? 'bg-[#f1f3ff]' : 'bg-white hover:bg-[#f9f9ff]'}`}
                >
                  <button
                    className="w-full flex items-center justify-between p-6 md:px-8 md:py-6 text-left focus:outline-none focus-visible:bg-[#f1f3ff] transition-colors"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-base md:text-[17px] font-semibold text-[#1a1a1a] pr-4">
                      {faq.question}
                    </span>
                    <div className="shrink-0 text-[#1a1a1a] transition-transform duration-300">
                      {isOpen ? <Minus size={20} strokeWidth={1.5} /> : <Plus size={20} strokeWidth={1.5} />}
                    </div>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 md:px-8 md:pb-8 text-[#666666] leading-relaxed text-sm md:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};



