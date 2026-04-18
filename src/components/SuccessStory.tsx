import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import aboutImg from "@/assets/images/about.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
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
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

export const SuccessStory = () => {
  const prefersReduced = useReducedMotion();
  const v = (variant: any) => (prefersReduced ? undefined : variant);

  return (
    <section className="bg-[#f1f3ff] py-20 md:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3, margin: "0px 0px -80px 0px" }}
        variants={v(stagger)}
        className="max-w-[1200px] mx-auto px-6"
      >
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center justify-between">

          {/* Left Side: Image Card */}
          <motion.div variants={v(slideLeft)} className="w-full md:w-1/2 flex lg:justify-end">
            <div className="w-full max-w-[480px] aspect-[4/5] md:aspect-[3/4] rounded-[24px] overflow-hidden border border-[#ffffff]/60 relative">
              <img
                src={aboutImg}
                alt="Client Success Profile"
                className="w-full h-full object-cover grayscale-[10%]"
              />
              {/* Ambient edge lighting */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent opacity-80 pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Side: Text Content */}
          <motion.div variants={v(slideRight)} className="w-full md:w-1/2 flex flex-col justify-center">

            {/* Pill Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#dce2f7] rounded-full mb-8 w-max">
               <div className="w-1.5 h-1.5 rounded-full bg-[#2b2dff]" />
               <span className="text-[11px] md:text-xs font-bold text-[#2b2dff] tracking-widest uppercase mt-0.5">
                 Success Stories
               </span>
            </div>

            {/* Testimonial Quote */}
            <h3 className="text-[28px] md:text-4xl lg:text-[42px] font-bold text-[#1a1a1a] leading-[1.25] tracking-tight mb-8 xl:pr-10 relative">
              "Our scaling process was constantly hitting manual roadblocks. Now, we're not just faster, we're fundamentally more scalable."
            </h3>

            {/* Author Details */}
            <div className="mb-12">
              <p className="text-[18px] md:text-[20px] font-bold text-[#1a1a1a] mb-1">
                Rossys Bekam
              </p>
              <p className="text-[15px] font-medium text-[#666666]">
                Founder & CEO, CloudMetrics
              </p>
            </div>

            {/* CTA Button */}
            <div>
              <a href="/contact" className="inline-flex items-center gap-2.5 h-14 px-8 rounded-lg bg-primary text-white font-semibold text-[15px] shadow-sm hover:bg-primary/90 hover:shadow-[0_12px_28px_rgba(43,45,255,0.25)] hover:-translate-y-1 transition-all duration-300">
                Get Started Now <ArrowRight size={18} strokeWidth={2.5} />
              </a>
            </div>

          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};



