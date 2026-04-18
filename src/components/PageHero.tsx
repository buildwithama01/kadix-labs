import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface PageHeroProps {
  title: React.ReactNode;
  description: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * Orchestrated hero entrance:
 * badge/grain → title → description → children
 * Uses staggerChildren for sequential reveal.
 */
const heroVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const PageHero = ({ title, description, children }: PageHeroProps) => {
  const prefersReduced = useReducedMotion();
  const variants = prefersReduced ? undefined : heroVariants;
  const child = prefersReduced ? undefined : childVariants;

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={variants}
      className="max-w-[1200px] mx-auto text-center relative overflow-hidden bg-[#e8ebff] pt-36 pb-28 md:pt-48 md:pb-36 rounded-b-[40px] mb-16"
    >
      {/* Grainy Noise Overlay */}
      <div
        className="absolute inset-0 opacity-[0.8] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.h1
          variants={child}
          className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-[#1a1a1a] tracking-tight leading-tight"
        >
          {title}
        </motion.h1>
        <motion.p
          variants={child}
          className="mt-6 text-base md:text-lg text-[#4a4a4a] leading-relaxed whitespace-pre-line"
        >
          {description}
        </motion.p>
        {children && (
          <motion.div variants={child} className="mt-12 md:mt-16">
            {children}
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default PageHero;


