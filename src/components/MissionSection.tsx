import React from "react";
import { Target, Plus } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import saasImg from "@/assets/images/saas.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

export const MissionSection = () => {
  const prefersReduced = useReducedMotion();
  const v = (variant: any) => (prefersReduced ? undefined : variant);

  return (
    <section className="bg-[#f9f9ff] py-24 md:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.25, margin: "0px 0px -80px 0px" }}
        variants={v(stagger)}
        className="max-w-[1100px] mx-auto px-6"
      >
        <div className="flex flex-col lg:flex-row gap-6">

          {/* Left Card: Mission */}
          <motion.div
            variants={v(fadeUp)}
            className="relative w-full lg:w-[45%] rounded-[24px] overflow-hidden p-10 flex flex-col justify-between min-h-[460px] shadow-[0_8px_40px_rgba(43,45,255,0.15)] group"
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0b00da] via-[#2b2dff] to-[#4ba4fd] opacity-95 z-0"></div>

            {/* Beautiful Abstract Soft Blurs */}
            <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-[#4ba4fd] blur-[80px] rounded-full opacity-60 z-0 pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#0b00da] blur-[80px] rounded-full opacity-70 z-0 pointer-events-none" />

            {/* Top Content */}
            <div className="relative z-10 w-full">
              <div className="flex items-center gap-3 mb-8">
                <Target className="text-white w-8 h-8" strokeWidth={1.5} />
                <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Our mission</h2>
              </div>
              <p className="text-white/90 text-lg md:text-[20px] leading-relaxed font-light mt-4 pr-4">
                Empower startups and growing businesses with the tools, insights, and support they need to <span className="font-semibold text-white">scale smarter, move faster,</span> and build lasting success.
              </p>
            </div>

            {/* Bottom Elements */}
            <div className="relative z-10 flex justify-between items-end mt-auto pt-16">
              {/* Pluses */}
              <div className="flex gap-4 text-white/40 pb-2">
                <Plus size={16} />
                <Plus size={16} />
                <Plus size={16} />
              </div>

              {/* Floating Image */}
              <div className="absolute -bottom-4 -right-4 w-32 md:w-40 aspect-square rounded-[20px] overflow-hidden shadow-2xl transition-all duration-500 group-hover:-translate-y-2 group-hover:-translate-x-2">
                <img src={saasImg} alt="Workspace" className="w-full h-full object-cover grayscale-[10%]" />
              </div>
            </div>
          </motion.div>

          {/* Right Cards: Stats Grid */}
          <motion.div
            variants={v(stagger)}
            className="w-full lg:w-[55%] grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {[
              { stat: "900+", label: "Projects Supported", desc: "Helping teams move from idea to execution faster." },
              { stat: "85%", label: "Client Retention Rate", desc: "Long-term partnerships built on real results." },
              { stat: "98%", label: "Client Satisfaction", desc: "Consistently high ratings from clients across industries." },
              { stat: "30+", label: "Integrations Supported", desc: "Seamlessly connects with your favorite tools and platforms." },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={v(scaleUp)}
                className="bg-[#ffffff] rounded-[24px] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-border/40 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)] transition-all duration-300 flex flex-col justify-between min-h-[220px]"
              >
                <div>
                  <h3 className="text-4xl lg:text-5xl font-extrabold text-[#1a1a1a] mb-2 tracking-tight">{item.stat}</h3>
                  <p className="text-[#1a1a1a] font-semibold text-[15px] mb-6">{item.label}</p>
                </div>
                <p className="text-[#666666] text-[13px] leading-relaxed mt-auto">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};



