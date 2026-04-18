import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Twitter } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import founder1 from "@/assets/images/about.png";
import founder2 from "@/assets/images/saas.png";
import founder3 from "@/assets/images/webapp.png";

const teamMembers = [
  {
    name: "Alex Chen",
    role: "Co-Founder & CEO",
    slug: "alex-chen",
    img: founder1
  },
  {
    name: "Jordan Patel",
    role: "Co-Founder & CTO",
    slug: "jordan-patel",
    img: founder2
  }
];

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

export const TeamSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const v = (variant: any) => (prefersReduced ? undefined : variant);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[#f9f9ff] py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto pl-6 lg:pl-8 pr-6 lg:pr-0">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

          {/* Left Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.35, margin: "0px 0px -100px 0px" }}
            variants={v(headerVariants)}
            className="w-full lg:w-1/3 flex flex-col justify-center lg:pr-10 lg:pb-12"
          >
            <h2 className="text-[40px] md:text-5xl lg:text-6xl font-medium tracking-tight text-[#1a1a1a] mb-10">
              Global Team
            </h2>
            <div className="flex gap-4">
              <button
                onClick={scrollLeft}
                className="w-12 h-12 rounded-[14px] bg-[#ffffff] border border-[#e5e7eb] text-[#1a1a1a] flex items-center justify-center hover:bg-[#f1f3ff] hover:border-[#dce2f7] transition-all shadow-sm"
              >
                <ChevronLeft size={24} strokeWidth={1.5} />
              </button>
              <button
                onClick={scrollRight}
                className="w-12 h-12 rounded-[14px] bg-[#ffffff] border border-[#e5e7eb] text-[#1a1a1a] flex items-center justify-center hover:bg-[#f1f3ff] hover:border-[#dce2f7] transition-all shadow-sm"
              >
                <ChevronRight size={24} strokeWidth={1.5} />
              </button>
            </div>
          </motion.div>

          {/* Right Column (Scrollable Cards) */}
          <div className="w-full lg:w-2/3 relative">
            {/* Fade on the right edge */}
            <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#f9f9ff] to-transparent z-10 pointer-events-none" />

            <motion.div
              ref={scrollContainerRef}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3, margin: "0px 0px -80px 0px" }}
              variants={v(stagger)}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 lg:pr-24"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {teamMembers.map((member, idx) => (
                <motion.div
                  key={idx}
                  variants={v(cardVariants)}
                  className="min-w-[280px] sm:min-w-[320px] snap-center shrink-0 group relative overflow-hidden rounded-[24px] aspect-[4/5] bg-[#f1f3ff] shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-border/40 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300"
                >
                  {/* Background Image */}
                  <img
                    src={member.img}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[10%]"
                  />

                  {/* Base Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 pointer-events-none" />

                  {/* Bottom Overlay Box */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="backdrop-blur-xl bg-black/30 border border-white/10 rounded-[16px] p-5 flex items-center justify-between overflow-hidden relative">
                      <div className="flex flex-col relative z-10">
                        <span className="text-[19px] font-bold text-white mb-0.5 tracking-tight">{member.name}</span>
                        <span className="text-[14px] text-white/80 font-medium mb-3">{member.role}</span>
                        <Link
                          to={`/about/${member.slug}`}
                          className="text-[13px] font-semibold text-[#4ba4fd] hover:text-white transition-colors flex xl:opacity-0 xl:-translate-y-2 xl:group-hover:opacity-100 xl:group-hover:translate-y-0 duration-300 ease-out"
                        >
                          View Story →
                        </Link>
                      </div>

                      <a href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#1a1a1a] hover:bg-[#2b2dff] hover:text-white transition-colors shrink-0 relative z-10 shadow-sm">
                        <Twitter size={15} className="fill-current" />
                      </a>
                    </div>
                  </div>

                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};


