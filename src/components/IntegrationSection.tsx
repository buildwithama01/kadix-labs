import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import integrationImg from "@/assets/images/world-globe.png";

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

export const IntegrationSection = () => {
  const prefersReduced = useReducedMotion();
  const v = (variant: any) => (prefersReduced ? undefined : variant);

  return (
    <section className="py-20 md:py-28 bg-[#f9f9ff]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3, margin: "0px 0px -80px 0px" }}
        variants={v(stagger)}
        className="max-w-[1200px] mx-auto px-6"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text Content */}
          <motion.div variants={v(slideLeft)}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#dce2f7] rounded-full mb-6 w-max">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2b2dff]" />
              <span className="text-[11px] font-bold text-[#2b2dff] tracking-widest uppercase">
                Integrations
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold text-[#1a1a1a] leading-tight tracking-tight mb-6">
              Effortlessly link Startify with the tools your team already uses.
            </h2>

            <p className="text-[#666666] text-base md:text-lg leading-relaxed mb-5 max-w-lg">
              We build integrations that connect your workflows to 50+ services seamlessly. From payment processors to communication platforms — your stack, unified.
            </p>

            <p className="text-[#666666] text-[15px] leading-relaxed mb-8 max-w-lg">
              Our architecture-first approach ensures every integration is reliable, secure, and performant at scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 h-12 px-7 text-sm font-semibold text-white rounded-lg bg-primary hover:bg-primary/90 hover:shadow-[0_8px_24px_rgba(43,45,255,0.22)] hover:scale-[1.02] transition-all duration-300"
              >
                Let's Integrate <ArrowRight size={15} />
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center justify-center gap-2 h-12 px-7 text-sm font-semibold text-[#1a1a1a] rounded-lg bg-[#dce2f7] hover:bg-[#cfd7f5] transition-all duration-300"
              >
                See Our Work
              </Link>
            </div>
          </motion.div>

          {/* Right: Integration Image */}
          <motion.div
            variants={v(slideRight)}
            className="relative w-full h-[300px] md:h-[450px] lg:h-[480px] rounded-[28px] overflow-hidden bg-[#f1f3ff] border border-[#e8e8f0]"
          >
            <img
              src={integrationImg}
              alt="Integration Map"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};



