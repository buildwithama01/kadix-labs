import PageLayout from "@/components/PageLayout";
import SectionWrapper from "@/components/SectionWrapper";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Brain, Rocket, Globe, Cpu, Cloud, Layers, Zap } from "lucide-react";

const Index = () => (
  <PageLayout>
    {/* Hero */}
    <SectionWrapper className="pt-24 md:pt-36 pb-16 md:pb-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] text-foreground">
            Building Scalable Tech Products &{" "}
            <span className="bg-gradient-to-r from-[#0b00da] to-[#4ba4fd] bg-clip-text text-transparent">
              Future Companies
            </span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg">
            Kadix Technologies is a venture studio and digital product company that builds web/mobile applications, AI automation systems, and internal SaaS startups.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 h-12 px-8 text-sm font-semibold text-primary-foreground rounded-pill bg-gradient-to-r from-[#0b00da] to-[#4ba4fd] hover:opacity-90 transition-opacity"
            >
              Work With Us <ArrowRight size={16} />
            </Link>
            <Link
              to="/ventures"
              className="inline-flex items-center gap-2 h-12 px-8 text-sm font-semibold text-foreground rounded-pill bg-secondary hover:bg-secondary/80 transition-colors"
            >
              Explore Ventures
            </Link>
          </div>
        </div>
        <div className="hidden md:flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute -top-8 -left-8 w-64 h-48 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/10 backdrop-blur-sm p-6">
              <div className="flex gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <div className="w-3 h-3 rounded-full bg-green-400/60" />
              </div>
              <div className="space-y-2">
                <div className="h-2 w-3/4 rounded bg-primary/15" />
                <div className="h-2 w-1/2 rounded bg-primary/10" />
                <div className="h-2 w-5/6 rounded bg-primary/15" />
                <div className="h-2 w-2/3 rounded bg-primary/10" />
              </div>
            </div>
            <div className="ml-20 mt-16 w-72 h-56 rounded-2xl bg-card border border-border shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#0b00da] to-[#4ba4fd] flex items-center justify-center">
                  <Zap size={18} className="text-primary-foreground" />
                </div>
                <div>
                  <div className="h-2.5 w-24 rounded bg-foreground/15" />
                  <div className="h-2 w-16 rounded bg-foreground/10 mt-1.5" />
                </div>
              </div>
              <div className="space-y-3 mt-4">
                <div className="h-8 rounded-lg bg-accent" />
                <div className="flex gap-2">
                  <div className="h-8 rounded-lg bg-primary/10 flex-1" />
                  <div className="h-8 rounded-lg bg-accent flex-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>

    {/* Trust Bar */}
    <SectionWrapper className="py-12 md:py-16" alternate>
      <div className="text-center mb-8">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Technologies We Work With</p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
        {[
          { icon: Code, label: "React" },
          { icon: Globe, label: "Next.js" },
          { icon: Cpu, label: "Python" },
          { icon: Brain, label: "AI / ML" },
          { icon: Cloud, label: "Cloud" },
          { icon: Layers, label: "TypeScript" },
        ].map((t) => (
          <div key={t.label} className="flex items-center gap-2 text-muted-foreground">
            <t.icon size={20} />
            <span className="text-sm font-medium">{t.label}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>

    {/* Services Preview */}
    <SectionWrapper>
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">What We Do</h2>
        <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
          We design, build, and scale digital products from the ground up.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            icon: Code,
            title: "Web & App Development",
            desc: "Custom web and mobile applications built with modern frameworks for performance and scalability.",
          },
          {
            icon: Brain,
            title: "AI Automation",
            desc: "Intelligent automation systems that streamline operations and unlock new capabilities with AI.",
          },
          {
            icon: Rocket,
            title: "SaaS & Product Dev",
            desc: "End-to-end product development for SaaS platforms, from concept to launch and growth.",
          },
        ].map((s) => (
          <div
            key={s.title}
            className="group p-8 rounded-2xl bg-card border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#0b00da] to-[#4ba4fd] flex items-center justify-center mb-5">
              <s.icon size={22} className="text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:opacity-80 transition-opacity">
          View All Services <ArrowRight size={16} />
        </Link>
      </div>
    </SectionWrapper>

    {/* Portfolio Preview */}
    <SectionWrapper alternate>
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Work</h2>
        <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
          A selection of products and platforms we've built for clients and ourselves.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: "FinFlow Dashboard", tags: ["React", "Node.js", "AI"], slug: "finflow" },
          { title: "MedConnect Platform", tags: ["Next.js", "Python", "Cloud"], slug: "medconnect" },
          { title: "EcoTrack Mobile App", tags: ["React Native", "Firebase"], slug: "ecotrack" },
        ].map((p) => (
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
              <div className="flex flex-wrap gap-2 mt-3">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs font-medium px-3 py-1 rounded-pill bg-secondary text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:opacity-80 transition-opacity">
          View All Projects <ArrowRight size={16} />
        </Link>
      </div>
    </SectionWrapper>

    {/* Ventures */}
    <SectionWrapper>
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">What We're Building</h2>
        <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
          Our venture studio incubates internal startups, building the products of tomorrow.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { name: "Project Aurora", desc: "AI-powered analytics platform for SMBs.", status: "Coming Soon", slug: "aurora" },
          { name: "Stealth Startup", desc: "A new approach to team collaboration.", status: "Stealth Mode", slug: "" },
          { name: "Project Nexus", desc: "Developer tooling for modern workflows.", status: "MVP", slug: "nexus" },
        ].map((v, i) => (
          <div
            key={i}
            className="p-8 rounded-2xl bg-card border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <Rocket size={20} className="text-primary" />
              <span className="text-xs font-semibold px-3 py-1 rounded-pill bg-primary/10 text-primary">
                {v.status}
              </span>
            </div>
            <h3 className="text-lg font-bold text-foreground">{v.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            {v.slug && (
              <Link to={`/ventures/${v.slug}`} className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-primary hover:opacity-80 transition-opacity">
                Learn More <ArrowRight size={14} />
              </Link>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>

    {/* About / Founders Preview */}
    <SectionWrapper alternate>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">The Team Behind Kadix</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We're a small, ambitious team of builders and engineers passionate about creating technology that matters. Kadix was founded with a simple vision: build great products and great companies.
          </p>
          <Link to="/about" className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-primary hover:opacity-80 transition-opacity">
            Our Story <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { name: "Alex Chen", role: "Co-Founder & CEO", slug: "alex-chen" },
            { name: "Jordan Patel", role: "Co-Founder & CTO", slug: "jordan-patel" },
          ].map((f) => (
            <Link
              key={f.slug}
              to={`/about/${f.slug}`}
              className="group p-6 rounded-2xl bg-card border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/10 to-primary/20 mx-auto mb-4 flex items-center justify-center">
                <span className="text-xl font-bold text-primary">{f.name[0]}</span>
              </div>
              <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">{f.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{f.role}</p>
              <span className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-primary">
                View Story <ArrowRight size={12} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </SectionWrapper>

    {/* Final CTA */}
    <section className="relative overflow-hidden">
      <div className="bg-gradient-to-r from-[#0b00da] to-[#0061a5] py-20 md:py-28 px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground">
            Let's Build Something That Scales
          </h2>
          <p className="mt-4 text-primary-foreground/80 max-w-lg mx-auto">
            Whether you need a product built or want to explore a partnership, we're ready.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-8 h-12 px-8 text-sm font-semibold rounded-pill bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-colors"
          >
            Get In Touch <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Index;
