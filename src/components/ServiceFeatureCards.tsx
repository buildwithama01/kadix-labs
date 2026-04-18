import { motion, useReducedMotion } from "framer-motion";
import webAppImg from "@/assets/images/webapp.png";
import automationImg from "@/assets/images/automation.png";

const features = [
  {
    title: "Effortless Workflow Automation",
    description:
      "Eliminate repetitive tasks and unlock your team's potential with intelligent automations that run 24/7 — no code required.",
    image: webAppImg,
  },
  {
    title: "SaaS Development & Integration Setup",
    description:
      "Ship production-ready SaaS products with integrated billing, auth, analytics, and third-party connectors from day one.",
    image: automationImg,
  },
];

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const ServiceFeatureCards = () => {
  const prefersReduced = useReducedMotion();
  const v = (variant: any) => (prefersReduced ? undefined : variant);

  return (
    <section className="py-20 md:py-28 bg-[#f9f9ff]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.35, margin: "0px 0px -100px 0px" }}
          variants={v(headerVariants)}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <p className="text-[#666666] text-lg leading-relaxed">
            Our core services are designed to empower modern{" "}
            <span className="text-[#1a1a1a] font-semibold">SaaS teams</span> and{" "}
            <span className="text-[#1a1a1a] font-semibold">ambitious startups</span>.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25, margin: "0px 0px -80px 0px" }}
          variants={v(stagger)}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={v(cardVariants)}
              className="bg-[#ffffff] rounded-[20px] border border-[#e8e8f0] overflow-hidden"
            >
              {/* Card Header */}
              <div className="p-8 pb-6">
                <h3 className="text-2xl lg:text-[26px] font-bold text-[#1a1a1a] leading-snug mb-4">
                  {feature.title}
                </h3>
                <p className="text-[15px] text-[#666666] leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Card Image */}
              <div className="relative h-[280px] p-6 lg:p-8 flex items-center justify-center bg-[#ffffff]">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover rounded-[20px] border border-[#e8e8f0]"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};



