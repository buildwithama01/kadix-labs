import PageLayout from "@/components/PageLayout";
import SectionWrapper from "@/components/SectionWrapper";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Brain, Rocket, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web & App Development",
    desc: "We design and build high-performance web and mobile applications using React, Next.js, React Native, and more. From MVPs to enterprise-grade platforms, we deliver clean, scalable code.",
    features: ["Custom web applications", "Mobile apps (iOS & Android)", "Progressive web apps", "API development & integration"],
  },
  {
    icon: Brain,
    title: "AI Automation",
    desc: "We leverage artificial intelligence and machine learning to automate workflows, build intelligent systems, and create data-driven products that give your business a competitive edge.",
    features: ["Workflow automation", "Natural language processing", "Predictive analytics", "Custom AI models"],
  },
  {
    icon: Rocket,
    title: "Product & SaaS Development",
    desc: "End-to-end SaaS product development from ideation to launch. We help startups and companies build, validate, and scale software products with a focus on growth and retention.",
    features: ["Product strategy & roadmap", "UI/UX design", "Full-stack development", "Launch & growth support"],
  },
];

const processSteps = [
  { step: "01", title: "Discovery", desc: "We understand your vision, goals, and technical requirements." },
  { step: "02", title: "Design", desc: "We create intuitive, beautiful interfaces with a focus on user experience." },
  { step: "03", title: "Build", desc: "Our engineers develop your product using modern, scalable technologies." },
  { step: "04", title: "Launch & Scale", desc: "We deploy, monitor, and iterate to ensure long-term success." },
];

const Services = () => (
  <PageLayout>
    <SectionWrapper className="pt-24 md:pt-32">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground">Our Services</h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          We help ambitious companies design, build, and scale digital products. From web apps to AI systems, we bring ideas to life with precision and speed.
        </p>
      </div>
    </SectionWrapper>

    {services.map((s, i) => (
      <SectionWrapper key={s.title} alternate={i % 2 === 0}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={i % 2 !== 0 ? "md:order-2" : ""}>
            <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-[#0b00da] to-[#4ba4fd] flex items-center justify-center mb-6">
              <s.icon size={26} className="text-primary-foreground" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">{s.title}</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{s.desc}</p>
            <ul className="mt-6 space-y-3">
              {s.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-foreground">
                  <CheckCircle size={16} className="text-primary shrink-0" /> {f}
                </li>
              ))}
            </ul>
          </div>
          <div className={i % 2 !== 0 ? "md:order-1" : ""}>
            <div className="w-full h-64 md:h-80 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/15 border border-primary/10 flex items-center justify-center">
              <s.icon size={60} className="text-primary/20" />
            </div>
          </div>
        </div>
      </SectionWrapper>
    ))}

    {/* Process */}
    <SectionWrapper>
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">How We Work</h2>
        <p className="mt-3 text-muted-foreground max-w-lg mx-auto">A proven process built for speed, clarity, and quality.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {processSteps.map((p) => (
          <div key={p.step} className="p-6 rounded-2xl bg-card border border-border">
            <span className="text-3xl font-extrabold bg-gradient-to-r from-[#0b00da] to-[#4ba4fd] bg-clip-text text-transparent">
              {p.step}
            </span>
            <h3 className="mt-3 text-lg font-bold text-foreground">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>

    {/* CTA */}
    <section className="bg-gradient-to-r from-[#0b00da] to-[#0061a5] py-20 px-6">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Ready to Build?</h2>
        <p className="mt-3 text-primary-foreground/80 max-w-md mx-auto">Tell us about your project and let's make it happen.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 mt-8 h-12 px-8 text-sm font-semibold rounded-pill bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-colors">
          Start a Project <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  </PageLayout>
);

export default Services;
