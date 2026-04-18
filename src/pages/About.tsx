import PageLayout from "@/components/PageLayout";
import SectionWrapper from "@/components/SectionWrapper";
import { AboutHero } from "@/components/AboutHero";
import { OurStoryTimeline } from "@/components/OurStoryTimeline";
import { MissionSection } from "@/components/MissionSection";
import { VisionSection } from "@/components/VisionSection";
import { TeamSection } from "@/components/TeamSection";
import { Link, useParams } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight, ArrowLeft, Sparkles, Quote, Linkedin, Twitter, Globe, BookOpen, Lightbulb, Rocket, Target, Users } from "lucide-react";
import { ScrollProgress } from "@/lib/animations";
import { useRef } from "react";
import founder1 from "@/assets/images/about.png";
import founder2 from "@/assets/images/saas.png";
import automationImg from "@/assets/images/automation.png";
import cloudImg from "@/assets/images/cloud.png";
import webappImg from "@/assets/images/webapp.png";

const founders = [
  {
    slug: "alex-chen",
    name: "Alex Chen",
    role: "Co-Founder & CEO",
    tagline: "Building the future of digital product development.",
    img: founder1,
    quote: "Great products aren't built in isolation — they emerge from deep understanding of the people who use them and the markets they serve.",
    story: [
      "Alex has spent over a decade building and scaling digital products across industries ranging from fintech to healthcare. Before co-founding Kadix Labs, he led product teams at high-growth startups and consulted for Fortune 500 companies on their digital transformation journeys.",
      "His approach combines deep technical understanding with business acumen, ensuring every product decision is grounded in both user empathy and market reality. At Kadix, Alex drives the strategic vision and oversees client partnerships, bringing a relentless focus on outcomes over outputs.",
      "Under his leadership, Kadix Labs has grown from a two-person consultancy into a full-service product studio serving clients across three continents — all while maintaining the craft and care of a boutique team.",
    ],
    philosophy: {
      title: "Product-Led Growth",
      description: "Alex believes the best marketing is an exceptional product. His philosophy centers on building things people genuinely love — then letting word-of-mouth do the rest.",
      icon: Rocket,
    },
    skills: [
      { name: "Product Strategy", level: 97 },
      { name: "Business Development", level: 92 },
      { name: "Leadership & Culture", level: 95 },
      { name: "Growth Marketing", level: 88 },
      { name: "UX Thinking", level: 85 },
      { name: "Fundraising", level: 90 },
    ],
    projects: [
      {
        name: "FinFlow Dashboard",
        description: "A real-time financial analytics platform serving 200+ enterprise clients.",
        img: cloudImg,
      },
      {
        name: "Project Aurora",
        description: "An AI-powered customer success platform reducing churn by 40%.",
        img: automationImg,
      },
    ],
    socials: {
      linkedin: "#",
      twitter: "#",
      website: "#",
    },
  },
  {
    slug: "jordan-patel",
    name: "Jordan Patel",
    role: "Co-Founder & CTO",
    tagline: "Engineering elegant solutions to complex problems.",
    img: founder2,
    quote: "The best architecture is the one you barely notice — it just works, scales, and stays out of the way so the team can focus on what matters.",
    story: [
      "Jordan is an engineer at heart with a deep love for clean architecture and elegant technical solutions. With experience at leading technology companies and a background in AI research from Stanford, he brings a rare combination of academic rigor and practical engineering expertise.",
      "At Kadix Labs, Jordan leads the entire engineering organization. He's responsible for the technical vision, infrastructure decisions, and the engineering culture that enables the team to ship high-quality software at startup speed without compromising on reliability.",
      "His passion for mentorship has shaped Kadix's engineering culture — one where code reviews are learning opportunities, technical debt is addressed proactively, and every engineer is empowered to make architectural decisions within their domain.",
    ],
    philosophy: {
      title: "Simplicity at Scale",
      description: "Jordan believes that true engineering excellence isn't about complexity — it's about finding the simplest solution that meets today's needs while leaving room for tomorrow's growth.",
      icon: Lightbulb,
    },
    skills: [
      { name: "Software Architecture", level: 98 },
      { name: "AI & Machine Learning", level: 94 },
      { name: "Cloud Infrastructure", level: 96 },
      { name: "Team Building", level: 90 },
      { name: "System Design", level: 97 },
      { name: "DevOps & CI/CD", level: 88 },
    ],
    projects: [
      {
        name: "MedConnect Platform",
        description: "A HIPAA-compliant telehealth platform processing 50K+ consultations monthly.",
        img: webappImg,
      },
      {
        name: "Project Nexus",
        description: "A micro-services orchestration layer powering real-time data pipelines.",
        img: cloudImg,
      },
    ],
    socials: {
      linkedin: "#",
      twitter: "#",
      website: "#",
    },
  },
];

/* ── Shared Animation Variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
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

const heroStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const heroChild = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ── Animated Skill Bar component ── */
const SkillBar = ({ name, level }: { name: string; level: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <div ref={ref}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-[14px] font-medium text-[#1a1a1a]">{name}</span>
        <span className="text-[12px] font-semibold text-[#2b2dff] tabular-nums">{level}%</span>
      </div>
      <div className="h-[6px] bg-[#f0f1ff] rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-[#2b2dff] to-[#4ba4fd] rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        />
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  About Page                                                         */
/* ------------------------------------------------------------------ */
const AboutPage = () => (
  <PageLayout>
    <ScrollProgress />
    <AboutHero />
    <MissionSection />
    {/* Advanced Vertical Timeline */}
    <OurStoryTimeline />
    {/* Vision Section */}
    <VisionSection />
    {/* Team Section */}
    <TeamSection />
  </PageLayout>
);

/* ------------------------------------------------------------------ */
/*  Founder Story Page — Fully Animated                                */
/* ------------------------------------------------------------------ */
const FounderPage = () => {
  const { slug } = useParams();
  const founder = founders.find((f) => f.slug === slug);
  const prefersReduced = useReducedMotion();
  const v = (variant: any) => (prefersReduced ? undefined : variant);

  // Parallax for hero portrait
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImgY = useTransform(heroScroll, [0, 1], [0, 60]);
  const heroBadgeY = useTransform(heroScroll, [0, 1], [0, -20]);

  if (!founder) {
    return (
      <PageLayout>
        <SectionWrapper className="pt-24 md:pt-32 text-center">
          <h1 className="text-3xl font-bold text-foreground">
            Founder Not Found
          </h1>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 mt-4 text-primary"
          >
            <ArrowLeft size={16} /> Back to About
          </Link>
        </SectionWrapper>
      </PageLayout>
    );
  }

  const PhilosophyIcon = founder.philosophy.icon;

  return (
    <PageLayout>
      <ScrollProgress />

      {/* ── Hero Section ───────────────────────────────────────────── */}
      <section ref={heroRef} className="relative overflow-hidden bg-[#f4f5ff]">
        {/* Subtle grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.6] pointer-events-none mix-blend-overlay z-[1]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="max-w-[1200px] mx-auto px-6 pt-32 md:pt-40 pb-20 md:pb-28 relative z-10">
          {/* Breadcrumb — instant, no animation */}
          <nav className="flex items-center gap-2 mb-12 md:mb-16">
            <Link
              to="/about"
              className="text-sm text-[#666666] hover:text-[#2b2dff] transition-colors duration-200 flex items-center gap-1.5"
            >
              <ArrowLeft size={14} strokeWidth={2} />
              About
            </Link>
            <span className="text-[#cccccc] text-sm">/</span>
            <span className="text-sm text-[#1a1a1a] font-medium">
              {founder.name}
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left — Text Content (orchestrated stagger) */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={v(heroStagger)}
              className="order-2 lg:order-1"
            >
              <motion.div variants={v(heroChild)} className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#2b2dff]/8 text-[#2b2dff] text-[13px] font-semibold tracking-wide">
                  <Sparkles size={13} />
                  {founder.role}
                </span>
              </motion.div>

              <motion.h1
                variants={v(heroChild)}
                className="text-[44px] md:text-[56px] lg:text-[64px] font-extrabold text-[#1a1a1a] tracking-tight leading-[1.05] mb-5"
              >
                {founder.name}
              </motion.h1>

              <motion.p
                variants={v(heroChild)}
                className="text-lg md:text-xl text-[#555555] leading-relaxed font-light max-w-lg"
              >
                {founder.tagline}
              </motion.p>

              {/* Social links */}
              <motion.div variants={v(heroChild)} className="flex items-center gap-3 mt-8">
                {[
                  { href: founder.socials.linkedin, icon: Linkedin, label: "LinkedIn" },
                  { href: founder.socials.twitter, icon: Twitter, label: "Twitter" },
                  { href: founder.socials.website, icon: Globe, label: "Website" },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="w-10 h-10 rounded-xl bg-white border border-[#e5e7eb] flex items-center justify-center text-[#666666] hover:text-[#2b2dff] hover:border-[#2b2dff]/30 hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
                    aria-label={label}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right — Portrait Image with parallax */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="order-1 lg:order-2 flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[420px] lg:max-w-[480px]">
                <motion.div
                  style={prefersReduced ? undefined : { y: heroImgY }}
                  className="aspect-[4/5] rounded-[28px] overflow-hidden bg-[#e8ebff] shadow-[0_20px_60px_rgba(43,45,255,0.12)]"
                >
                  <img
                    src={founder.img}
                    alt={founder.name}
                    className="w-full h-full object-cover grayscale-[5%] hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                </motion.div>
                {/* Decorative floating badge — counter-parallax */}
                <motion.div
                  style={prefersReduced ? undefined : { y: heroBadgeY }}
                  className="absolute -bottom-4 -left-4 md:-bottom-5 md:-left-5 bg-white rounded-2xl px-5 py-3.5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-[#f0f0f0]"
                >
                  <p className="text-[13px] font-semibold text-[#1a1a1a]">10+ Years</p>
                  <p className="text-[11px] text-[#888888]">Industry Experience</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Quote Section ──────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.35, margin: "0px 0px -100px 0px" }}
          variants={v(fadeUp)}
          className="max-w-[800px] mx-auto px-6 text-center"
        >
          <Quote
            size={40}
            className="mx-auto mb-6 text-[#2b2dff]/20"
            strokeWidth={1.5}
          />
          <blockquote className="text-2xl md:text-[28px] lg:text-[32px] font-medium text-[#1a1a1a] leading-snug tracking-tight italic">
            "{founder.quote}"
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-[#e8ebff]">
              <img
                src={founder.img}
                alt={founder.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <p className="text-[14px] font-semibold text-[#1a1a1a]">
                {founder.name}
              </p>
              <p className="text-[12px] text-[#888888]">{founder.role}</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Story Section ──────────────────────────────────────────── */}
      <section className="bg-[#f9f9ff] py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2, margin: "0px 0px -60px 0px" }}
            variants={v(stagger)}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20"
          >
            {/* Section Label */}
            <motion.div variants={v(slideLeft)} className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <div className="flex items-center gap-2.5 mb-4">
                  <BookOpen size={18} className="text-[#2b2dff]" strokeWidth={2} />
                  <span className="text-[13px] font-semibold text-[#2b2dff] uppercase tracking-widest">
                    The Story
                  </span>
                </div>
                <h2 className="text-3xl md:text-[40px] font-bold text-[#1a1a1a] tracking-tight leading-tight">
                  The journey so far
                </h2>
                <p className="mt-4 text-[15px] text-[#888888] leading-relaxed">
                  From early beginnings to building Kadix Labs into what it is today.
                </p>
              </div>
            </motion.div>

            {/* Story Paragraphs — staggered reveal */}
            <motion.div variants={v(stagger)} className="lg:col-span-8">
              <div className="space-y-6">
                {founder.story.map((paragraph, idx) => (
                  <motion.p
                    key={idx}
                    variants={v(fadeUp)}
                    className={`text-[17px] leading-[1.8] ${
                      idx === 0
                        ? "text-[#1a1a1a] font-medium"
                        : "text-[#555555]"
                    }`}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Philosophy + Skills ────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25, margin: "0px 0px -80px 0px" }}
          variants={v(stagger)}
          className="max-w-[1200px] mx-auto px-6"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Philosophy Card */}
            <motion.div
              variants={v(slideLeft)}
              className="relative rounded-[24px] overflow-hidden p-10 md:p-12 flex flex-col justify-between min-h-[380px] shadow-[0_8px_40px_rgba(43,45,255,0.12)] group"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0b00da] via-[#2b2dff] to-[#4ba4fd] opacity-95 z-0" />

              {/* Soft blurs */}
              <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-[#4ba4fd] blur-[80px] rounded-full opacity-50 z-0 pointer-events-none" />
              <div className="absolute bottom-[-15%] right-[-15%] w-[55%] h-[55%] bg-[#0b00da] blur-[80px] rounded-full opacity-60 z-0 pointer-events-none" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center mb-6 backdrop-blur-sm">
                  <PhilosophyIcon size={22} className="text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-3">
                  {founder.philosophy.title}
                </h3>
                <p className="text-white/85 text-[16px] md:text-[17px] leading-relaxed font-light">
                  {founder.philosophy.description}
                </p>
              </div>

              <div className="relative z-10 mt-auto pt-8 flex items-center gap-2 text-white/40">
                <Target size={14} />
                <span className="text-[12px] uppercase tracking-widest font-medium">
                  Core Philosophy
                </span>
              </div>
            </motion.div>

            {/* Skills Card — animated bars */}
            <motion.div
              variants={v(slideRight)}
              className="bg-[#ffffff] rounded-[24px] p-10 md:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-[#f0f0f0]"
            >
              <div className="flex items-center gap-2.5 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#f4f5ff] flex items-center justify-center">
                  <Sparkles size={18} className="text-[#2b2dff]" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] tracking-tight">
                  Skills & Expertise
                </h3>
              </div>

              <div className="space-y-5">
                {founder.skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── Key Projects ───────────────────────────────────────────── */}
      <section className="bg-[#f9f9ff] py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Section header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.35, margin: "0px 0px -100px 0px" }}
            variants={v(fadeUp)}
          >
            <div className="flex items-center gap-2.5 mb-4">
              <Rocket size={18} className="text-[#2b2dff]" strokeWidth={2} />
              <span className="text-[13px] font-semibold text-[#2b2dff] uppercase tracking-widest">
                Featured Work
              </span>
            </div>
            <h2 className="text-3xl md:text-[40px] font-bold text-[#1a1a1a] tracking-tight leading-tight mb-4">
              Key Projects
            </h2>
            <p className="text-[15px] text-[#888888] leading-relaxed max-w-lg mb-12 md:mb-16">
              A selection of impactful projects {founder.name.split(" ")[0]} has led and shaped.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25, margin: "0px 0px -80px 0px" }}
            variants={v(stagger)}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {founder.projects.map((project) => (
              <motion.div
                key={project.name}
                variants={v(scaleUp)}
                className="group bg-white rounded-[24px] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-[#f0f0f0] hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(0,0,0,0.07)] transition-all duration-400"
              >
                {/* Project Image */}
                <div className="aspect-[16/9] overflow-hidden bg-[#e8ebff]">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[5%]"
                  />
                </div>
                {/* Project Info */}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-[#1a1a1a] tracking-tight mb-2">
                    {project.name}
                  </h3>
                  <p className="text-[15px] text-[#666666] leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA / Navigation Footer ────────────────────────────────── */}
      <section className="bg-white py-20 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.35, margin: "0px 0px -100px 0px" }}
          variants={v(scaleUp)}
          className="max-w-[1200px] mx-auto px-6"
        >
          <div className="bg-gradient-to-br from-[#f4f5ff] to-[#e8ebff] rounded-[28px] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Users size={18} className="text-[#2b2dff]" />
                <span className="text-[13px] font-semibold text-[#2b2dff] uppercase tracking-widest">
                  Meet the Team
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] tracking-tight">
                Curious about the rest of the team?
              </h3>
              <p className="mt-2 text-[15px] text-[#666666]">
                Explore our about page to learn more about the people behind Kadix Labs.
              </p>
            </div>
            <Link
              to="/about"
              className="shrink-0 inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#2b2dff] text-white text-[15px] font-semibold rounded-2xl hover:bg-[#1a1cd4] hover:-translate-y-0.5 transition-all duration-200 shadow-[0_4px_20px_rgba(43,45,255,0.3)]"
            >
              View About Page
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>
        </motion.div>
      </section>
    </PageLayout>
  );
};

export { AboutPage, FounderPage };



