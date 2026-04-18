import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import founder1 from "@/assets/images/about.png";
import founder2 from "@/assets/images/saas.png";

const teamData = [
  {
    name: "Alex Chen",
    role: "Co-Founder & CEO",
    slug: "alex-chen",
    imgSrc: founder1,
    gradient: "from-[#0b00da]/20 to-[#4ba4fd]/20"
  },
  {
    name: "Jordan Patel",
    role: "Co-Founder & CTO",
    slug: "jordan-patel",
    imgSrc: founder2,
    gradient: "from-[#4ba4fd]/20 to-[#dce2f7]/50"
  }
];

const headerVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36, scale: 0.94 },
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
    transition: { staggerChildren: 0.15, delayChildren: 0.25 },
  },
};

export const TeamPreview = () => {
  const prefersReduced = useReducedMotion();
  const v = (variant: any) => (prefersReduced ? undefined : variant);

  return (
    <section className="bg-[#f9f9ff] py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center md:items-start">

          {/* Left Column: Heading & Description */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.35, margin: "0px 0px -100px 0px" }}
            variants={v(headerVariants)}
            className="w-full md:w-1/3 flex flex-col pt-4 md:pt-12 text-center md:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] leading-tight mb-6 tracking-tight">
              Meet the team
            </h2>
            <p className="text-lg text-[#666666] leading-relaxed mb-8">
              We are a team of passionate engineers, designers, and strategists dedicated to turning bold ideas into beautifully crafted digital realities.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center justify-center md:justify-start gap-2 text-[#2b2dff] font-semibold hover:opacity-80 transition-opacity"
            >
              Learn more about us <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* Right Column: Team Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25, margin: "0px 0px -80px 0px" }}
            variants={v(stagger)}
            className="w-full md:w-2/3"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {teamData.map((member, index) => (
                <motion.div key={index} variants={v(cardVariants)}>
                  <Link
                    to={`/about/${member.slug}`}
                    className="group block bg-[#ffffff] rounded-[24px] p-4 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-border/40 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-300"
                  >
                    <div className="relative w-full aspect-[4/5] rounded-[16px] overflow-hidden mb-5 bg-[#f1f3ff]">
                      {/* Soft gradient overlay */}
                      <div className={`absolute inset-0 z-10 bg-gradient-to-tr ${member.gradient} mix-blend-multiply opacity-60 group-hover:opacity-30 transition-opacity duration-300`} />
                      <img
                        src={member.imgSrc}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </div>
                    <div className="px-2 pb-2">
                      <h3 className="text-xl font-bold text-[#1a1a1a] mb-1 group-hover:text-[#2b2dff] transition-colors">{member.name}</h3>
                      <p className="text-[15px] font-medium text-[#666666]">{member.role}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};



