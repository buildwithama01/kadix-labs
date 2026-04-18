import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import aboutImg from "@/assets/images/about.png";
import saasImg from "@/assets/images/saas.png";
import webappImg from "@/assets/images/webapp.png";

const timelineData = [
  {
    date: "30-06-2025",
    text: "In 2021, we saw first transaction on a Kadix card, marking the beginning of our journey. That same year, we set the stage for everything that followed.",
    img: webappImg
  },
  {
    date: "21-01-2024",
    text: "In 2021, we saw first transaction on a Kadix card, marking the beginning of our journey. That same year, we set the stage for everything that followed.",
    img: saasImg
  },
  {
    date: "30-05-2023",
    text: "In 2021, we saw first transaction on a Kadix card, marking the beginning of our journey. That same year, we set the stage for everything that followed.",
    img: aboutImg
  }
];

/** Variants for each timeline item */
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

export const OurStoryTimeline = () => {
  const prefersReduced = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);

  // Animate the vertical line drawing as user scrolls through section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const lineScaleY = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  const v = (variant: any) => (prefersReduced ? undefined : variant);

  return (
    <section ref={sectionRef} className="bg-[#f9f9ff] py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-6 relative">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.35, margin: "0px 0px -100px 0px" }}
          variants={v(itemVariants)}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#1a1a1a]">
            Our story
          </h2>
        </motion.div>

        <div className="relative">
          {/* Animated Vertical Line — draws as user scrolls */}
          <motion.div
            className="absolute left-[20px] lg:left-1/2 top-4 bottom-4 w-[1px] bg-[#c3ccf1] -translate-x-1/2 z-0 origin-top"
            style={prefersReduced ? undefined : { scaleY: lineScaleY }}
          />

          {/* Timeline Items */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2, margin: "0px 0px -60px 0px" }}
            variants={v(stagger)}
            className="space-y-16 lg:space-y-32"
          >
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  variants={v({
                    hidden: {
                      opacity: 0,
                      x: isEven ? -40 : 40,
                    },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                    },
                  })}
                  className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-20 pl-10 lg:pl-0"
                >
                  {/* Dot */}
                  <div className="absolute left-[20px] lg:left-1/2 top-24 lg:top-1/2 w-2.5 h-2.5 bg-[#1a1a1a] rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_0_8px_#f9f9ff] z-10" />

                  {/* Image Column */}
                  <div className={`w-full lg:w-[45%] ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="bg-[#ffffff] rounded-[24px] p-3 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-border/40 hover:-translate-y-1 transition-transform duration-300">
                      <div className="w-full aspect-[4/3] rounded-[16px] overflow-hidden bg-[#f1f3ff]">
                        <img
                          src={item.img}
                          alt={`Milestone ${item.date}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-out grayscale-[10%]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Text Column */}
                  <div className={`w-full lg:w-[45%] flex flex-col justify-center pt-2 lg:pt-0 ${isEven ? 'lg:order-2 lg:text-left lg:items-start' : 'lg:order-1 lg:text-right lg:items-end'}`}>
                    <h3 className="text-[22px] sm:text-[28px] font-bold text-[#1a1a1a] mb-3">
                      {item.date}
                    </h3>
                    <p className="text-[#666666] leading-relaxed text-sm sm:text-base mb-6 md:max-w-md">
                      {item.text}
                    </p>
                    <button className="px-6 py-2 rounded-lg border border-border/70 bg-transparent text-[#666666] text-sm font-semibold hover:bg-[#dce2f7]/50 hover:text-[#1a1a1a] transition-all">
                      Learn More
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
};



