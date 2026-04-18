import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Lightbulb, Eye, ShieldCheck } from "lucide-react";
import aboutImg from "@/assets/images/about.png";
import saasImg from "@/assets/images/saas.png";
import webappImg from "@/assets/images/webapp.png";

const visionCards = [
  {
    title: "Innovation First",
    description: "Driven by an unwavering commitment to innovation, we continuously refine and evolve our platform to deliver.",
    icon: Lightbulb,
    img: aboutImg,
  },
  {
    title: "Transparency Always",
    description: "We firmly believe that trust and clarity are not just ideals, but the essential foundation and guiding principle for every decision.",
    icon: Eye,
    img: saasImg,
  },
  {
    title: "Reliability You Can Count On",
    description: "From performance to security, we build with trust in mind. Kadix ensures consistent uptime and dependable support when you need them most.",
    icon: ShieldCheck,
    img: webappImg,
  }
];

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const VisionSection = () => {
  const prefersReduced = useReducedMotion();
  const v = (variant: any) => (prefersReduced ? undefined : variant);

  return (
    <section className="bg-[#f1f3ff] py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header Area */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.35, margin: "0px 0px -100px 0px" }}
          variants={v(headerVariants)}
          className="flex flex-col items-center text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#dce2f7] rounded-full mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#2b2dff]" />
            <span className="text-[11px] font-bold text-[#2b2dff] tracking-widest uppercase mt-0.5">
              Our Vision
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] max-w-2xl leading-tight tracking-tight">
            Ensuring Our Users Can Grow Sustainably
          </h2>
        </motion.div>

        {/* Vision Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25, margin: "0px 0px -80px 0px" }}
          variants={v(stagger)}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {visionCards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={v(cardVariants)}
              className="group bg-[#ffffff] rounded-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-border/40 overflow-hidden hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col"
            >
              {/* Top Image */}
              <div className="w-full h-[220px] relative overflow-hidden bg-[#e8ebff]">
                <div className="absolute inset-0 bg-[#2b2dff]/5 mix-blend-color z-10 opacity-60 group-hover:opacity-0 transition-opacity duration-300" />
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover grayscale-[15%] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Content */}
              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <card.icon strokeWidth={1.5} className="w-8 h-8 text-[#2b2dff] mb-6" />
                <h3 className="text-[22px] font-semibold text-[#1a1a1a] mb-3">
                  {card.title}
                </h3>
                <p className="text-[#666666] leading-relaxed text-[15px]">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};



