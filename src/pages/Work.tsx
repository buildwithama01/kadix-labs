import PageLayout from "@/components/PageLayout";
import SectionWrapper from "@/components/SectionWrapper";
import PageHero from "@/components/PageHero";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, Layers, Rocket } from "lucide-react";
import { useState } from "react";
import webAppImg from "@/assets/images/webapp.png";
import saasImg from "@/assets/images/saas.png";
import aboutImg from "@/assets/images/about.png";

// ─── Ventures Data ───────────────────────────────────────────────
const ventures = [
  {
    slug: "aurora",
    name: "Project Aurora",
    status: "Coming Soon",
    tagline: "AI-powered analytics for SMBs",
    problem: "Small and medium businesses lack affordable, intelligent analytics tools to make data-driven decisions.",
    description: "Project Aurora is an AI-powered analytics platform designed specifically for small and medium businesses. It transforms raw data into actionable insights with zero technical expertise required.",
    features: ["Automated reporting", "Predictive analytics", "Natural language queries", "Custom dashboards"],
  },
  {
    slug: "nexus",
    name: "Project Nexus",
    status: "MVP",
    tagline: "Developer tooling for modern workflows",
    problem: "Development teams struggle with fragmented toolchains that slow down shipping speed.",
    description: "Project Nexus unifies the modern developer workflow into a single, powerful platform. From code to deployment, everything your team needs in one place.",
    features: ["Unified dashboard", "CI/CD integration", "Team collaboration", "Performance monitoring"],
  },
  {
    slug: "",
    name: "Stealth Startup",
    status: "Stealth Mode",
    tagline: "A new approach to team collaboration",
    problem: "",
    description: "We're working on something exciting. Stay tuned for more details.",
    features: [],
  },
];

// ─── Portfolio Data ──────────────────────────────────────────────
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

// ─── Main Work Page (Ventures + Portfolio) ───────────────────────
const WorkPage = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <PageLayout>
      <PageHero 
        title="Our Work"
        description="From venture studio startups to client products — explore everything we've built, shipped, and scaled."
      />

      {/* ── Ventures Section ── */}
      <SectionWrapper>
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            <Rocket size={14} /> Venture Studio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What We're Building
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Kadix isn't just a services company — we're a venture studio. We incubate and build our own startups, investing in ideas we believe will shape the future.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {ventures.map((v, i) => (
            <div key={i} className="p-8 rounded-2xl bg-card border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <Rocket size={20} className="text-primary" />
                <span className="text-xs font-semibold px-3 py-1 rounded-pill bg-primary/10 text-primary">{v.status}</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">{v.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{v.tagline}</p>
              <p className="mt-3 text-sm text-muted-foreground">{v.description.substring(0, 100)}...</p>
              {v.slug && (
                <Link to={`/work/ventures/${v.slug}`} className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-primary hover:opacity-80 transition-opacity">
                  Learn More <ArrowRight size={14} />
                </Link>
              )}
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Vision Interlude ── */}
      <SectionWrapper alternate>
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We believe the best way to predict the future is to build it. Our venture studio model allows us to rapidly test ideas, validate markets, and scale products — all while maintaining the engineering excellence our clients depend on.
          </p>
        </div>
      </SectionWrapper>

      {/* ── Portfolio Section ── */}
      <SectionWrapper>
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            <Layers size={14} /> Client Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Products We've Shipped
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            A collection of products and platforms we've designed, built, and scaled for our clients.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-10 justify-center">
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
              to={`/work/portfolio/${p.slug}`}
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

      {/* ── Bottom CTA ── */}
      <section className="bg-primary py-20 px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary-foreground">Have a Project in Mind?</h2>
          <p className="mt-3 text-primary-foreground/70 max-w-lg mx-auto">
            Let's build something extraordinary together.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-6 h-12 px-8 text-sm font-semibold rounded-pill bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-colors">
            Start a Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

// ─── Venture Detail Page ─────────────────────────────────────────
const VentureDetail = () => {
  const { slug } = useParams();
  const venture = ventures.find((v) => v.slug === slug);

  if (!venture) {
    return (
      <PageLayout>
        <SectionWrapper className="pt-24 md:pt-32 text-center">
          <h1 className="text-3xl font-bold text-[#1a1a1a]">Venture Not Found</h1>
          <Link to="/work" className="inline-flex items-center gap-2 mt-4 text-[#2b2dff] font-medium">
            <ArrowRight size={16} className="rotate-180" /> Back to Work
          </Link>
        </SectionWrapper>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="bg-[#f9f9ff] min-h-screen pt-32 pb-24">
        
        {/* Header Section */}
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#dce2f7] rounded-full mb-6">
             <div className="w-1.5 h-1.5 rounded-full bg-[#2b2dff]" />
             <span className="text-[11px] font-bold text-[#2b2dff] tracking-widest uppercase mt-0.5">
               Case Study Details
             </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[#1a1a1a] leading-tight tracking-tight mb-6">
            {venture.name}: {venture.tagline}
          </h1>
          <p className="text-lg text-[#666666] leading-relaxed max-w-2xl mx-auto">
            {venture.problem || "Transforming complex challenges into streamlined, scalable digital solutions for the modern web."}
          </p>
        </div>

        {/* Hero Featured Image */}
        <div className="max-w-[1000px] mx-auto px-6 mt-16 mb-24">
          <div className="w-full aspect-video md:aspect-[21/9] rounded-[24px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.06)] bg-[#f1f3ff]">
            <img src={saasImg} alt={venture.name} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-[700px] mx-auto px-6 text-[#1a1a1a] space-y-16">
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Project Introduction</h2>
            <p className="text-[#666666] leading-relaxed">
              {venture.description} We fully partnered to modernize the technology stack, creating an intuitive product that streamlines daily operations while significantly reducing manual effort and technical debt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Goals & Challenges</h2>
            <ul className="space-y-4 mt-6">
              <li className="flex gap-4 items-start text-[#666666]">
                <div className="w-2 h-2 rounded-full bg-[#2b2dff] mt-2 shrink-0" />
                <p>Overcoming fragmented legacy data structures that hindered reporting.</p>
              </li>
              <li className="flex gap-4 items-start text-[#666666]">
                <div className="w-2 h-2 rounded-full bg-[#2b2dff] mt-2 shrink-0" />
                <p>Establishing a comprehensive design system to ensure strict consistency.</p>
              </li>
              <li className="flex gap-4 items-start text-[#666666]">
                <div className="w-2 h-2 rounded-full bg-[#2b2dff] mt-2 shrink-0" />
                <p>Ensuring ultra-low latency for global user access and synchronization.</p>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Research & Discovery</h2>
            <p className="text-[#666666] leading-relaxed">
              In-depth user interviews and workflow analysis revealed that the majority of friction occurred during team handoffs. We synthesized these findings into core user journey maps that directly guided our architectural and design decisions moving forward.
            </p>
          </section>

          {/* Quote Block */}
          <section className="bg-[#f1f3ff] rounded-[24px] p-8 md:p-12 text-center my-16 shadow-sm border border-border/40">
            <p className="text-xl md:text-[22px] font-medium text-[#1a1a1a] italic leading-relaxed">
              "Working with the Kadix team didn't just give us a new product, it fundamentally reshaped how we approach our daily operational goals. It was nothing short of transformative."
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">UX Strategy & Structure</h2>
            <p className="text-[#666666] leading-relaxed">
              The strategy focused intensely on reducing cognitive load. By organizing complex data into digestible, customizable widgets, we made it possible for users to glance at their dashboard and immediately grasp their status without overwhelm.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Visual Design Direction</h2>
            <p className="text-[#666666] leading-relaxed">
              Our aesthetic choices paired minimal, spacious layouts with strategic pops of the primary brand color to draw the eye exclusively to actionable elements, creating an interface that feels calm yet highly productive.
            </p>
          </section>

          {venture.features && venture.features.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-6">Key Features Implemented</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {venture.features.map((f: string) => (
                  <div key={f} className="flex items-center gap-3 p-4 rounded-[16px] bg-[#ffffff] shadow-[0_4px_16px_rgba(0,0,0,0.02)] border border-border/40">
                    <div className="w-2 h-2 rounded-full bg-[#2b2dff] shrink-0" />
                    <span className="text-[15px] font-medium text-[#1a1a1a]">{f}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Secondary Image Grids */}
        <div className="max-w-[1000px] mx-auto px-6 mt-20 mb-24 space-y-6">
          <div className="w-full h-[300px] md:h-[400px] rounded-[24px] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
            <img src={aboutImg} alt="Feature View 1" className="w-full h-full object-cover" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="w-full h-[250px] md:h-[300px] rounded-[24px] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
              <img src={webAppImg} alt="Feature View 2" className="w-full h-full object-cover" />
            </div>
            <div className="w-full h-[250px] md:h-[300px] rounded-[24px] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.04)] bg-[#f1f3ff] flex flex-col items-center justify-center p-8 text-center border border-border/40">
              <div className="w-12 h-12 rounded-full bg-[#ffffff] mb-4 flex items-center justify-center shadow-sm">
                <Rocket className="text-[#2b2dff]" size={20} />
              </div>
              <h3 className="text-2xl font-bold text-[#1a1a1a]">Iterative, Data-Driven Design</h3>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="bg-[#f1f3ff] rounded-[32px] p-10 md:p-16 text-center shadow-inner border border-[#dce2f7]">
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a1a] tracking-tight">Results & Performance Impact</h2>
              <p className="text-[#666666] mt-3 font-medium">The metrics that mattered most to the bottom line.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#ffffff] rounded-[24px] p-8 shadow-sm flex flex-col justify-center border border-border/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <span className="text-4xl lg:text-5xl font-extrabold text-[#1a1a1a] tracking-tight mb-2">120+</span>
                <span className="text-sm font-medium text-[#666666] leading-snug">New features shipped in YoY</span>
              </div>
              <div className="bg-[#ffffff] rounded-[24px] p-8 shadow-sm flex flex-col justify-center border border-border/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <span className="text-4xl lg:text-5xl font-extrabold text-[#1a1a1a] tracking-tight mb-2">500K</span>
                <span className="text-sm font-medium text-[#666666] leading-snug">Active users onboarded</span>
              </div>
              <div className="bg-[#ffffff] rounded-[24px] p-8 shadow-sm flex flex-col justify-center border border-border/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <span className="text-4xl lg:text-5xl font-extrabold text-[#1a1a1a] tracking-tight mb-2">99.9%</span>
                <span className="text-sm font-medium text-[#666666] leading-snug">Guaranteed uptime SLA</span>
              </div>
              <div className="bg-[#ffffff] rounded-[24px] p-8 shadow-sm flex flex-col justify-center border border-border/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <span className="text-4xl lg:text-5xl font-extrabold text-[#1a1a1a] tracking-tight mb-2">20M+</span>
                <span className="text-sm font-medium text-[#666666] leading-snug">Data points processed daily</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center px-6">
          <Link to="/work" className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 hover:shadow-[0_8px_24px_rgba(43,45,255,0.25)] hover:scale-105 transition-all duration-300">
            View More Case Studies
          </Link>
          <div className="mt-6">
            <Link to="/contact" className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 rounded-lg bg-[#ffffff] border border-border/60 text-[#1a1a1a] font-semibold hover:bg-[#f1f3ff] transition-all duration-300">
              Contact Us
            </Link>
          </div>
        </div>

      </div>
    </PageLayout>
  );
};

// ─── Portfolio Case Study Detail Page ────────────────────────────
const CaseStudy = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <PageLayout>
        <SectionWrapper className="pt-24 md:pt-32 text-center">
          <h1 className="text-3xl font-bold text-foreground">Project Not Found</h1>
          <Link to="/work" className="inline-flex items-center gap-2 mt-4 text-primary">
            <ArrowRight size={16} className="rotate-180" /> Back to Work
          </Link>
        </SectionWrapper>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <SectionWrapper className="pt-24 md:pt-32">
        <div className="flex items-center gap-3 mb-6">
          <Link to="/work" className="text-sm text-muted-foreground hover:text-primary transition-colors">Work</Link>
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

      <section className="bg-primary py-20 px-6">
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

export { WorkPage, VentureDetail, CaseStudy };
