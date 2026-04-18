import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import { SuccessStory } from "@/components/SuccessStory";
import { ServiceFeatureCards } from "@/components/ServiceFeatureCards";
import { CoreServicesGrid } from "@/components/CoreServicesGrid";
import { IntegrationSection } from "@/components/IntegrationSection";
import { ServicesFaq } from "@/components/ServicesFaq";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle, MessageSquare, Layers } from "lucide-react";
import { ScrollProgress } from "@/lib/animations";
import webAppImg from "@/assets/images/webapp.png";
import automation from "@/assets/images/automation.png";
import saas from "@/assets/images/saas.png";
import cloud from "@/assets/images/cloud.png";

const services = [
  {
    slug: "product-design",
    image: webAppImg,
    title: "Product Design & Experience Optimization",
    desc: "We craft intuitive, research-driven interfaces that turn complex workflows into seamless user experiences. Every pixel is designed to drive engagement, reduce friction, and maximize conversion for your SaaS product.",
    features: [
      "User research & journey mapping",
      "High-fidelity UI/UX prototyping",
      "Design system creation",
      "A/B testing & conversion optimization",
    ],
    cta: "Explore Design",
  },
  {
    slug: "saas-development",
    image: automation,
    title: "SaaS Development & Integration Setup",
    desc: "Full-stack SaaS development from zero to launch. We architect robust, multi-tenant platforms with billing, auth, analytics, and third-party integrations baked in from day one.",
    features: [
      "API-first architecture",
      "Secure multi-tenancy",
      "Automated billing & subscriptions",
      "Custom webhook & event systems",
    ],
    cta: "Explore SaaS",
  },
  {
    slug: "brand-identity",
    image: saas,
    title: "Brand Identity for Tech Startups",
    desc: "We help early-stage startups define and ship a brand identity that resonates — from visual systems and tone to pitch-ready assets that stand out in crowded markets.",
    features: [
      "Logo & visual identity systems",
      "Brand guidelines & tone of voice",
      "Pitch deck design",
      "Marketing asset creation",
    ],
    cta: "See Our Work",
  },
  {
    slug: "cloud-devops",
    image: cloud,
    title: "Cloud Infrastructure & DevOps",
    desc: "Scalable, resilient cloud architectures designed for reliability and cost efficiency, with continuous monitoring, CI/CD pipelines, and zero-downtime deployments.",
    features: [
      "Cloud migration & architecture",
      "DevOps & CI/CD pipelines",
      "Serverless computing",
      "24/7 monitoring & support",
    ],
    cta: "Learn More",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Alignment",
    desc: "We understand your vision, challenges, and business goals to shape a clear idea.",
    bg: "#f4f4ff",
  },
  {
    step: "02",
    title: "Design & Prototype",
    desc: "We create intuitive, scalable interfaces and workflows that reflect your goals.",
    bg: "#eef0ff",
  },
  {
    step: "03",
    title: "Build & Integrate",
    desc: "Our team brings designs to life with solid development and seamless integrations.",
    bg: "#e8ebff",
  },
  {
    step: "04",
    title: "Growth & Innovation",
    desc: "We help you add features and evolve capabilities as your business grows.",
    bg: "#e2e5ff",
  },
];

/* ── Shared animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
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

const scaleUp = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const Services = () => {
  const prefersReduced = useReducedMotion();
  const v = (variant: any) => (prefersReduced ? undefined : variant);

  return (
    <PageLayout>
      <ScrollProgress />

      {/* ── HERO SECTION ── */}
      <PageHero
        title={
          <>
            Services That Accelerate Growth
            <br />
            <span className="bg-gradient-to-r from-[#0b00da] to-[#4ba4fd] bg-clip-text text-transparent">
              for SaaS Teams
            </span>
          </>
        }
        description="Full-stack product design, development, and scaling solutions built to help modern SaaS companies ship faster and grow smarter."
      />

      {/* ── SERVICE SECTIONS (Alternating Layout) ── */}
      {services.map((s, i) => (
        <section
          key={s.title}
          className={i % 2 === 0 ? "bg-[#f9f9ff]" : "bg-[#f1f3ff]"}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25, margin: "0px 0px -80px 0px" }}
            variants={v(stagger)}
            className="max-w-[1200px] mx-auto px-6 py-20 md:py-28"
          >
            <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Text Column */}
              <motion.div
                variants={v(i % 2 === 0 ? slideLeft : slideRight)}
                className={i % 2 !== 0 ? "md:order-2" : ""}
              >
                <h2 className="text-2xl md:text-3xl lg:text-[34px] font-extrabold text-[#1a1a1a] leading-tight tracking-tight mb-5">
                  {s.title}
                </h2>
                <p className="text-[15px] md:text-base text-[#666666] leading-relaxed mb-6">
                  {s.desc}
                </p>
                <ul className="space-y-3 mb-8">
                  {s.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-[14px] text-[#1a1a1a] font-medium"
                    >
                      <CheckCircle
                        size={17}
                        className="text-[#2b2dff] shrink-0 mt-0.5"
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/services/${s.slug}`}
                  className="inline-flex items-center gap-2 h-11 px-6 text-sm font-semibold text-white rounded-lg bg-primary hover:bg-primary/90 hover:shadow-[0_8px_24px_rgba(43,45,255,0.22)] hover:scale-[1.02] transition-all duration-300"
                >
                  {s.cta} <ArrowRight size={14} />
                </Link>
              </motion.div>

              {/* Image Column */}
              <motion.div
                variants={v(i % 2 === 0 ? slideRight : slideLeft)}
                className={i % 2 !== 0 ? "md:order-1" : ""}
              >
                <div className="w-full aspect-[4/3] rounded-[20px] overflow-hidden border border-[#e8e8f0]">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>
      ))}

      {/* ── FEATURE CARDS SECTION ── */}
      <ServiceFeatureCards />

      {/* ── SUCCESS STORIES ── */}
      <SuccessStory />

      {/* ── CORE SERVICES GRID ── */}
      <CoreServicesGrid />

      {/* ── INTEGRATION SECTION ── */}
      <IntegrationSection />

      {/* ── PROCESS — Sticky Stacking Cards ── */}
      <section className="bg-[#f9f9ff] py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.35, margin: "0px 0px -100px 0px" }}
            variants={v(fadeUp)}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#dce2f7] rounded-full mb-5 w-max mx-auto">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2b2dff]" />
              <span className="text-[11px] font-bold text-[#2b2dff] tracking-widest uppercase">
                Our Process
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a] tracking-tight">
              How We Work
            </h2>
            <p className="mt-3 text-[#666666] max-w-lg mx-auto text-base">
              A proven process built for speed, clarity, and quality.
            </p>
          </motion.div>

          <div className="relative">
            {processSteps.map((p, i) => (
              <motion.div
                key={p.step}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.4 }}
                variants={v(scaleUp)}
                className="sticky"
                style={{
                  top: `${100 + i * 40}px`,
                  zIndex: i + 1,
                  marginBottom: i < processSteps.length - 1 ? "60px" : "0",
                }}
              >
                <div
                  className="rounded-3xl px-8 py-10 md:px-14 md:py-14"
                  style={{ backgroundColor: p.bg }}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                    <span className="text-5xl md:text-6xl font-black bg-gradient-to-r from-[#0b00da] to-[#4ba4fd] bg-clip-text text-transparent leading-none shrink-0">
                      {p.step}
                    </span>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-[#1a1a1a]">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-base text-[#666666] leading-relaxed max-w-xl">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            <div className="h-[100px]" aria-hidden />
          </div>
        </div>
      </section>

      {/* ── SERVICES FAQ ── */}
      <ServicesFaq />

      {/* ── BOTTOM CTA ── */}
      <section className="py-20 md:py-28 bg-[#f1f3ff]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3, margin: "0px 0px -80px 0px" }}
          variants={v(fadeUp)}
          className="max-w-[1200px] mx-auto px-6"
        >
          <div className="bg-white rounded-[20px] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 border border-[#e8e8f0]">
            {/* LEFT SIDE CONTENT */}
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-flex items-center rounded-full bg-[#dce2f7] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#2b2dff] mb-4 md:mb-6">
                Get Started
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1a1a1a] leading-tight mb-4 md:mb-6 whitespace-pre-line">
                Let's build something{"\n"}that scales.
              </h2>
              <p className="text-base text-[#666666] leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 md:mb-10">
                Work with Kadix Technologies to design, build, and scale your next product with modern development and AI-driven solutions.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-8 text-white font-semibold rounded-lg bg-primary hover:bg-primary/90 hover:shadow-[0_8px_24px_rgba(43,45,255,0.22)] hover:scale-[1.02] transition-all duration-300"
                >
                  Start a Project
                </Link>
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-8 text-[#1a1a1a] font-semibold rounded-lg bg-[#dce2f7] hover:bg-[#cfd7f5] hover:scale-[1.02] transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE CONTENT */}
            <div className="w-full lg:w-[460px] flex flex-col gap-4">
              <Link
                to="/contact"
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 rounded-2xl bg-[#f1f3ff] relative"
              >
                <div className="flex items-start sm:items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-[#2b2dff] shrink-0">
                    <MessageSquare size={20} />
                  </div>
                  <div className="flex-1 pr-6">
                    <h3 className="font-bold text-[#1a1a1a] text-[17px]">Project Consultation</h3>
                    <p className="text-[14px] text-[#666666] mt-1 line-clamp-2 sm:line-clamp-none max-w-[260px] leading-snug">
                      Tell us about your idea and we'll help you plan and execute it.
                    </p>
                  </div>
                </div>
                <ArrowRight size={20} className="text-[#666666] absolute right-6 top-1/2 -translate-y-1/2 hidden sm:block" />
                <ArrowRight size={20} className="text-[#666666] mt-4 sm:hidden" />
              </Link>

              <Link
                to="/work"
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 rounded-2xl bg-[#f1f3ff] relative"
              >
                <div className="flex items-start sm:items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-[#2b2dff] shrink-0">
                    <Layers size={20} />
                  </div>
                  <div className="flex-1 pr-6">
                    <h3 className="font-bold text-[#1a1a1a] text-[17px]">Explore Our Work</h3>
                    <p className="text-[14px] text-[#666666] mt-1 line-clamp-2 sm:line-clamp-none max-w-[260px] leading-snug">
                      See how we've helped businesses build and scale products.
                    </p>
                  </div>
                </div>
                <ArrowRight size={20} className="text-[#666666] absolute right-6 top-1/2 -translate-y-1/2 hidden sm:block" />
                <ArrowRight size={20} className="text-[#666666] mt-4 sm:hidden" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </PageLayout>
  );
};

export default Services;



