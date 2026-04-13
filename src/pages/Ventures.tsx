import PageLayout from "@/components/PageLayout";
import SectionWrapper from "@/components/SectionWrapper";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, Rocket } from "lucide-react";

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

const VenturesList = () => (
  <PageLayout>
    <SectionWrapper className="pt-24 md:pt-32">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground">Our Ventures</h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          Kadix isn't just a services company — we're a venture studio. We incubate and build our own startups, investing in ideas we believe will shape the future.
        </p>
      </div>
    </SectionWrapper>

    <SectionWrapper alternate>
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
              <Link to={`/ventures/${v.slug}`} className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-primary hover:opacity-80 transition-opacity">
                Learn More <ArrowRight size={14} />
              </Link>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>

    <SectionWrapper>
      <div className="text-center max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          We believe the best way to predict the future is to build it. Our venture studio model allows us to rapidly test ideas, validate markets, and scale products — all while maintaining the engineering excellence our clients depend on.
        </p>
      </div>
    </SectionWrapper>
  </PageLayout>
);

const VentureDetail = () => {
  const { slug } = useParams();
  const venture = ventures.find((v) => v.slug === slug);

  if (!venture) {
    return (
      <PageLayout>
        <SectionWrapper className="pt-24 md:pt-32 text-center">
          <h1 className="text-3xl font-bold text-foreground">Venture Not Found</h1>
          <Link to="/ventures" className="inline-flex items-center gap-2 mt-4 text-primary">
            <ArrowRight size={16} className="rotate-180" /> Back to Ventures
          </Link>
        </SectionWrapper>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <SectionWrapper className="pt-24 md:pt-32">
        <div className="flex items-center gap-3 mb-6">
          <Link to="/ventures" className="text-sm text-muted-foreground hover:text-primary transition-colors">Ventures</Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-sm text-foreground font-medium">{venture.name}</span>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-xs font-semibold px-3 py-1 rounded-pill bg-primary/10 text-primary">{venture.status}</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-foreground">{venture.name}</h1>
            <p className="mt-2 text-lg text-muted-foreground">{venture.tagline}</p>
            <p className="mt-6 text-muted-foreground leading-relaxed">{venture.description}</p>
          </div>
          <div className="w-full h-64 md:h-80 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/15 border border-primary/10 flex items-center justify-center">
            <Rocket size={60} className="text-primary/20" />
          </div>
        </div>
      </SectionWrapper>

      {venture.problem && (
        <SectionWrapper alternate>
          <h2 className="text-2xl font-bold text-foreground mb-4">The Problem</h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">{venture.problem}</p>
        </SectionWrapper>
      )}

      {venture.features.length > 0 && (
        <SectionWrapper>
          <h2 className="text-2xl font-bold text-foreground mb-8">Key Features</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {venture.features.map((f) => (
              <div key={f} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                <span className="text-sm font-medium text-foreground">{f}</span>
              </div>
            ))}
          </div>
        </SectionWrapper>
      )}
    </PageLayout>
  );
};

export { VenturesList, VentureDetail };
