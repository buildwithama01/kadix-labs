import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import cloudImg from "@/assets/images/cloud.png";
import saasImg from "@/assets/images/saas.png";
import automationImg from "@/assets/images/automation.png";

const coreServices = [
  {
    image: automationImg,
    title: "Seamless Operations",
    description:
      "Team's daily work with templates built for efficiency. It is structured to simplify navigation.",
  },
  {
    image: saasImg,
    title: "Built for Scale",
    description:
      "A new SaaS or scaling to thousands of customers, Startify grows with you.",
  },
  {
    image: cloudImg,
    title: "Trusted Design Practice",
    description:
      "Polished, research-driven UI/UX that converts visitors into loyal users. Every pixel earns its place.",
  },
];

const headerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.25 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const CoreServicesGrid = () => {
  const prefersReduced = useReducedMotion();
  const v = (variant: any) => (prefersReduced ? undefined : variant);

  return (
    <section className="py-20 md:py-28 bg-[#f1f3ff]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.35, margin: "0px 0px -100px 0px" }}
          variants={v(headerVariants)}
          className="mb-12 max-w-2xl"
        >
          <p className="text-[#666666] text-lg leading-relaxed mb-6">
            Our core services are designed to empower modern{" "}
            <span className="text-[#1a1a1a] font-semibold">SaaS teams</span> and{" "}
            <span className="text-[#1a1a1a] font-semibold">ambitious startups</span>.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 h-11 px-6 text-sm font-semibold text-white rounded-lg bg-primary hover:bg-primary/90 hover:shadow-[0_8px_24px_rgba(43,45,255,0.22)] hover:scale-[1.02] transition-all duration-300"
          >
            Get Started <ArrowRight size={15} />
          </Link>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25, margin: "0px 0px -80px 0px" }}
          variants={v(stagger)}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {coreServices.map((service, i) => (
            <motion.div
              key={i}
              variants={v(cardVariants)}
              className="bg-[#ffffff] rounded-[20px] border border-[#e8e8f0] p-6 sm:p-8"
            >
              {/* Card Image */}
              <div className="mb-6">
                <div className="w-[140px] h-[85px] rounded-xl overflow-hidden shadow-sm">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Card Content */}
              <div>
                <h3 className="text-[20px] font-bold text-[#1a1a1a] mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="text-[15px] text-[#4a4a4a] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};



