import React from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';
import aboutImg from "@/assets/images/about.png";
import saasImg from "@/assets/images/saas.png";
import webappImg from "@/assets/images/webapp.png";
import PageHero from "@/components/PageHero";

/**
 * Stagger variant for the 3-card image grid.
 * Each card fades up + scales in with a slight delay.
 */
const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.6 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const AboutHero = () => {
  const prefersReduced = useReducedMotion();

  return (
    <PageHero
      title={
        <>
          Innovating the Future of <br className="hidden md:block" /> SaaS Growth and Performance
        </>
      }
      description="Startify was created with one goal — to empower startups and SaaS teams to scale faster, smarter, and without complexity. We believe that great software should simplify."
    >
      {/* 3-Card Header Images with stagger animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3, margin: "0px 0px -80px 0px" }}
        variants={prefersReduced ? undefined : gridVariants}
        className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-8 w-full mx-auto max-w-[1000px]"
      >
        {[
          { src: aboutImg, alt: "Workspace Focus", offsetClass: "" },
          { src: saasImg, alt: "Team Collaboration", offsetClass: "mt-0 sm:-mt-8" },
          { src: webappImg, alt: "Productivity", offsetClass: "" },
        ].map((img, i) => (
          <motion.div
            key={i}
            variants={prefersReduced ? undefined : cardVariants}
            className={`w-full aspect-[4/5] sm:aspect-square md:aspect-[4/5] rounded-[24px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition-all duration-500 bg-[#f1f3ff] ${img.offsetClass}`}
          >
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover grayscale-[10%]" />
          </motion.div>
        ))}
      </motion.div>
    </PageHero>
  );
};


