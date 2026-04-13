import PageLayout from "@/components/PageLayout";
import SectionWrapper from "@/components/SectionWrapper";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, Layers } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    slug: "finflow",
    title: "FinFlow Dashboard",
    category: "Web App",
    tags: ["React", "Node.js", "AI"],
    overview: "A real-time financial analytics dashboard for fintech companies.",
    problem: "Financial teams needed a unified view of complex data across multiple systems.",
    solution: "We built a real-time dashboard with AI-powered insights, custom reports, and seamless integrations.",
    techStack: ["React", "Node.js", "PostgreSQL", "TensorFlow"],
    results: ["60% faster reporting", "40% reduction in manual data entry", "99.9% uptime"],
  },
  {
    slug: "medconnect",
    title: "MedConnect Platform",
    category: "Platform",
    tags: ["Next.js", "Python", "Cloud"],
    overview: "A telemedicine platform connecting patients with healthcare providers.",
    problem: "Healthcare providers struggled to offer remote consultations at scale.",
    solution: "We designed a HIPAA-compliant platform with video consultations, scheduling, and EHR integration.",
    techStack: ["Next.js", "Python", "AWS", "WebRTC"],
    results: ["10K+ consultations", "4.8★ patient rating", "HIPAA compliant"],
  },
  {
    slug: "ecotrack",
    title: "EcoTrack Mobile App",
    category: "Mobile App",
    tags: ["React Native", "Firebase"],
    overview: "A sustainability tracking app helping users reduce their carbon footprint.",
    problem: "Individuals lacked easy tools to measure and reduce their environmental impact.",
    solution: "We built a gamified mobile app with carbon tracking, challenges, and community features.",
    techStack: ["React Native", "Firebase", "Google Maps API"],
    results: ["50K+ downloads", "30% avg carbon reduction", "Featured on App Store"],
  },
  {
    slug: "shopwave",
    title: "ShopWave E-Commerce",
    category: "Web App",
    tags: ["Next.js", "Stripe", "Tailwind"],
    overview: "A modern headless e-commerce platform for DTC brands.",
    problem: "DTC brands needed flexible, fast e-commerce without platform lock-in.",
    solution: "A headless commerce solution with blazing-fast storefront and seamless checkout.",
    techStack: ["Next.js", "Stripe", "Sanity CMS", "Vercel"],
    results: ["3x conversion rate", "Sub-second load times", "85% repeat customers"],
  },
];

const categories = ["All", "Web App", "Platform", "Mobile App"];

const PortfolioList = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <PageLayout>
      <SectionWrapper className="pt-24 md:pt-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground">Our Work</h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            A collection of products and platforms we've designed, built, and scaled.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper alternate>
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 rounded-pill text-sm font-medium transition-colors ${
                filter === c ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <Link
              key={p.slug}
              to={`/portfolio/${p.slug}`}
              className="group rounded-2xl bg-card border border-border overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-primary/5 to-primary/15 flex items-center justify-center">
                <Layers size={40} className="text-primary/30" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{p.overview}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs font-medium px-3 py-1 rounded-pill bg-secondary text-muted-foreground">{t}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </SectionWrapper>
    </PageLayout>
  );
};

const CaseStudy = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <PageLayout>
        <SectionWrapper className="pt-24 md:pt-32 text-center">
          <h1 className="text-3xl font-bold text-foreground">Project Not Found</h1>
          <Link to="/portfolio" className="inline-flex items-center gap-2 mt-4 text-primary">
            <ArrowRight size={16} className="rotate-180" /> Back to Portfolio
          </Link>
        </SectionWrapper>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <SectionWrapper className="pt-24 md:pt-32">
        <div className="flex items-center gap-3 mb-6">
          <Link to="/portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">Portfolio</Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-sm text-foreground font-medium">{project.title}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground">{project.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{project.overview}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((t) => (
            <span key={t} className="text-xs font-medium px-3 py-1 rounded-pill bg-secondary text-muted-foreground">{t}</span>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper alternate>
        <div className="w-full h-64 md:h-96 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/15 border border-primary/10 flex items-center justify-center">
          <Layers size={80} className="text-primary/20" />
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">The Problem</h2>
            <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Solution</h2>
            <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper alternate>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((t) => (
                <span key={t} className="px-4 py-2 rounded-xl bg-card border border-border text-sm font-medium text-foreground">{t}</span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Results</h2>
            <div className="space-y-3">
              {project.results.map((r) => (
                <div key={r} className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border">
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground">{r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      <section className="bg-gradient-to-r from-[#0b00da] to-[#0061a5] py-20 px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary-foreground">Want Similar Results?</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-6 h-12 px-8 text-sm font-semibold rounded-pill bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-colors">
            Start a Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export { PortfolioList, CaseStudy };
