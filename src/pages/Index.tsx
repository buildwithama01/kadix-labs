import PageLayout from "@/components/PageLayout";
import SectionWrapper from "@/components/SectionWrapper";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Code,
  Brain,
  Rocket,
  Globe,
  Cpu,
  Cloud,
  Layers,
  Zap,
} from "lucide-react";
import { Header } from "@/components/Header";
import { LogoCloud } from "@/components/ui/logo-cloud-3";
import { Feature73 } from "@/components/ui/feature-73";
import { Cta10 } from "@/components/ui/cta-10";
import { Feature108 } from "@/components/ui/feature-108";
import { FaqSection } from "@/components/ui/faq-section";
import { TeamPreview } from "@/components/TeamPreview";
import { ScrollProgress } from "@/lib/animations";

const logos = [
  { src: "https://svgl.app/library/nvidia-wordmark-light.svg", alt: "Nvidia Logo" },
  { src: "https://svgl.app/library/supabase_wordmark_light.svg", alt: "Supabase Logo" },
  { src: "https://svgl.app/library/openai_wordmark_light.svg", alt: "OpenAI Logo" },
  { src: "https://svgl.app/library/turso-wordmark-light.svg", alt: "Turso Logo" },
  { src: "https://svgl.app/library/vercel_wordmark.svg", alt: "Vercel Logo" },
  { src: "https://svgl.app/library/github_wordmark_light.svg", alt: "GitHub Logo" },
  { src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg", alt: "Claude AI Logo" },
  { src: "https://svgl.app/library/clerk-wordmark-light.svg", alt: "Clerk Logo" },
];

/* ── Animation Variants ── */
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
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardScale = {
  hidden: { opacity: 0, y: 30, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const Index = () => {
  const prefersReduced = useReducedMotion();
  const v = (variant: any) => (prefersReduced ? undefined : variant);

  return (
    <PageLayout>
      {/* Scroll progress bar at top of page */}
      <ScrollProgress />

      <Header />

      {/* Trust Bar */}
      <SectionWrapper className="py-12 md:py-16" alternate>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.35, margin: "0px 0px -100px 0px" }}
          variants={v(fadeUp)}
          className="text-center mb-8"
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Technologies We Work With
          </p>
        </motion.div>
        <div className="mx-auto my-5 h-px max-w-sm bg-border [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
        <LogoCloud logos={logos} />
        <div className="mt-5 h-px bg-border [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
      </SectionWrapper>

      {/* Services Preview */}
      <Feature73 />

      {/* Portfolio Preview */}
      <SectionWrapper alternate>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.35, margin: "0px 0px -100px 0px" }}
          variants={v(fadeUp)}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Featured Work
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            A selection of products and platforms we've built for clients and
            ourselves.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25, margin: "0px 0px -80px 0px" }}
          variants={v(stagger)}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[
            {
              title: "FinFlow Dashboard",
              tags: ["React", "Node.js", "AI"],
              slug: "finflow",
            },
            {
              title: "MedConnect Platform",
              tags: ["Next.js", "Python", "Cloud"],
              slug: "medconnect",
            },
            {
              title: "EcoTrack Mobile App",
              tags: ["React Native", "Firebase"],
              slug: "ecotrack",
            },
          ].map((p) => (
            <motion.div key={p.slug} variants={v(cardScale)}>
              <Link
                to={`/work/portfolio/${p.slug}`}
                className="group rounded-2xl bg-card border border-border overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 block"
              >
                <div className="h-48 bg-gradient-to-br from-primary/5 to-primary/15 flex items-center justify-center">
                  <Layers size={40} className="text-primary/30" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-medium px-3 py-1 rounded-pill bg-secondary text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={v(fadeUp)}
          className="text-center mt-10"
        >
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:opacity-80 transition-opacity"
          >
            View All Projects <ArrowRight size={16} />
          </Link>
        </motion.div>
      </SectionWrapper>

      {/* Ventures */}
      <Feature108 />

      {/* About / Founders Preview */}
      <TeamPreview />

      {/* FAQ */}
      <FaqSection />

      {/* Final CTA */}
      <Cta10 />
    </PageLayout>
  );
};

export default Index;



