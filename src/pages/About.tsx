import PageLayout from "@/components/PageLayout";
import SectionWrapper from "@/components/SectionWrapper";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, Target, Eye } from "lucide-react";

const founders = [
  {
    slug: "alex-chen",
    name: "Alex Chen",
    role: "Co-Founder & CEO",
    story: "Alex has spent over a decade building and scaling digital products. Before Kadix, he led product teams at high-growth startups and consulted for Fortune 500 companies on digital transformation. His passion lies at the intersection of technology and business strategy.",
    skills: ["Product Strategy", "Business Development", "Leadership", "Growth Marketing"],
    projects: ["FinFlow Dashboard", "Project Aurora"],
  },
  {
    slug: "jordan-patel",
    name: "Jordan Patel",
    role: "Co-Founder & CTO",
    story: "Jordan is an engineer at heart with a deep love for clean architecture and elegant solutions. With experience at top tech companies and a background in AI research, he leads Kadix's engineering efforts with a focus on scalability and innovation.",
    skills: ["Software Architecture", "AI/ML", "Cloud Infrastructure", "Team Building"],
    projects: ["MedConnect Platform", "Project Nexus"],
  },
];

const AboutPage = () => (
  <PageLayout>
    <SectionWrapper className="pt-24 md:pt-32">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground">About Kadix</h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          We're a small team with big ambitions. Kadix Technologies was founded with a simple belief: the best products come from teams that care deeply about craft, quality, and impact.
        </p>
      </div>
    </SectionWrapper>

    <SectionWrapper alternate>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Kadix started as a conversation between two builders who were tired of seeing great ideas fail due to poor execution. We set out to create a company that combines the precision of a top-tier engineering firm with the speed and ambition of a startup.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Today, we build custom digital products for forward-thinking companies while simultaneously incubating our own ventures. This dual model keeps us sharp, innovative, and deeply connected to the realities of building technology that matters.
          </p>
        </div>
        <div className="w-full h-64 md:h-80 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/15 border border-primary/10 flex items-center justify-center">
          <div className="text-center">
            <span className="text-5xl font-extrabold bg-gradient-to-r from-[#0b00da] to-[#4ba4fd] bg-clip-text text-transparent">K</span>
            <p className="text-sm text-muted-foreground mt-2">Est. 2024</p>
          </div>
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-8 rounded-2xl bg-card border border-border">
          <Target size={28} className="text-primary mb-4" />
          <h3 className="text-xl font-bold text-foreground">Our Mission</h3>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            To build technology that solves real problems and creates lasting value — for our clients, our ventures, and the people who use our products.
          </p>
        </div>
        <div className="p-8 rounded-2xl bg-card border border-border">
          <Eye size={28} className="text-primary mb-4" />
          <h3 className="text-xl font-bold text-foreground">Our Vision</h3>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            To become a leading venture studio that produces world-class digital products and sustainable, high-impact companies.
          </p>
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper alternate>
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Meet the Founders</h2>
        <p className="mt-3 text-muted-foreground">The people behind Kadix Technologies.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        {founders.map((f) => (
          <Link
            key={f.slug}
            to={`/about/${f.slug}`}
            className="group p-8 rounded-2xl bg-card border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/10 to-primary/20 mx-auto mb-5 flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">{f.name[0]}</span>
            </div>
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{f.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{f.role}</p>
            <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-primary">
              View Story <ArrowRight size={14} />
            </span>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  </PageLayout>
);

const FounderPage = () => {
  const { slug } = useParams();
  const founder = founders.find((f) => f.slug === slug);

  if (!founder) {
    return (
      <PageLayout>
        <SectionWrapper className="pt-24 md:pt-32 text-center">
          <h1 className="text-3xl font-bold text-foreground">Founder Not Found</h1>
          <Link to="/about" className="inline-flex items-center gap-2 mt-4 text-primary">
            <ArrowRight size={16} className="rotate-180" /> Back to About
          </Link>
        </SectionWrapper>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <SectionWrapper className="pt-24 md:pt-32">
        <div className="flex items-center gap-3 mb-6">
          <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-sm text-foreground font-medium">{founder.name}</span>
        </div>
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-1">
            <div className="w-full aspect-square max-w-xs rounded-2xl bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center mx-auto">
              <span className="text-5xl font-bold text-primary">{founder.name[0]}</span>
            </div>
          </div>
          <div className="md:col-span-2">
            <h1 className="text-4xl font-extrabold text-foreground">{founder.name}</h1>
            <p className="text-lg text-primary font-semibold mt-1">{founder.role}</p>
            <p className="mt-6 text-muted-foreground leading-relaxed">{founder.story}</p>

            <div className="mt-8">
              <h3 className="text-lg font-bold text-foreground mb-4">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {founder.skills.map((s) => (
                  <span key={s} className="px-4 py-2 rounded-pill bg-secondary text-sm font-medium text-foreground">{s}</span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-bold text-foreground mb-4">Key Projects</h3>
              <div className="flex flex-wrap gap-2">
                {founder.projects.map((p) => (
                  <span key={p} className="px-4 py-2 rounded-xl bg-card border border-border text-sm font-medium text-foreground">{p}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </PageLayout>
  );
};

export { AboutPage, FounderPage };
