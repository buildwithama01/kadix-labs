import { useParams, Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import {
  ArrowRight,
  CheckCircle,
  User,
  MapPin,
  Briefcase,
  Clock,
  TrendingUp,
  Target,
  Cpu,
  Palette,
  BarChart3,
  Zap,
  Shield,
  Globe,
  Code,
  Layers,
  Server,
} from "lucide-react";

/* ─── Images ─── */
import webAppImg from "@/assets/images/webapp.png";
import automationImg from "@/assets/images/automation.png";
import saasImg from "@/assets/images/saas.png";
import cloudImg from "@/assets/images/cloud.png";
import aboutImg from "@/assets/images/about.png";
import faq1 from "@/assets/images/faq-1.png";
import faq2 from "@/assets/images/faq-2.png";
import faq3 from "@/assets/images/faq-3.png";

/* ═══════════════════════════════════════════════════════
   SERVICE DATA — one entry per service detail page
   ═══════════════════════════════════════════════════════ */
interface ServiceData {
  slug: string;
  label: string;
  title: string;
  subtitle: string;
  heroImage: string;
  meta: { icon: React.ReactNode; label: string; value: string }[];
  overview: string;
  howItStarted: string;
  challenges: string[];
  imageGrid: string[];
  approach: { intro: string; points: string[] };
  results: { value: string; label: string }[];
  featuredImage: string;
  finalThoughts: string;
}

const servicesData: Record<string, ServiceData> = {
  "product-design": {
    slug: "product-design",
    label: "Product Design",
    title: "Product Design & Experience Optimization",
    subtitle:
      "Research-driven interfaces that turn complex workflows into seamless, high-converting user experiences.",
    heroImage: webAppImg,
    meta: [
      { icon: <User size={18} />, label: "Clients", value: "SaaS Startups" },
      { icon: <MapPin size={18} />, label: "Location", value: "Global / Remote" },
      { icon: <Briefcase size={18} />, label: "Service", value: "UI/UX Design" },
      { icon: <Clock size={18} />, label: "Duration", value: "4–8 Weeks" },
    ],
    overview:
      "Great products are defined by how they feel, not just what they do. Our design practice bridges the gap between business objectives and user expectations — delivering interfaces that are intuitive, beautiful, and conversion-optimized. We work closely with founders and product teams to translate ambiguity into clarity, ensuring every screen, flow, and micro-interaction earns its place.",
    howItStarted:
      "We noticed a recurring pattern: ambitious startups were building powerful backend systems but struggling to deliver front-end experiences that matched their technical sophistication. Users were churning — not because of missing features, but because of confusing journeys, cluttered layouts, and inconsistent design language. That insight became the foundation of our design practice. We set out to build a service that treats design as a strategic lever for growth, not an afterthought.",
    challenges: [
      "Users abandoning onboarding flows due to cognitive overload and unclear next steps",
      "Inconsistent design patterns across features causing trust erosion",
      "Lack of a cohesive design system slowing down development velocity",
      "Low conversion rates on key landing pages and upgrade funnels",
    ],
    imageGrid: [webAppImg, faq1, faq2, aboutImg],
    approach: {
      intro:
        "Our approach combines deep user research with rapid prototyping, ensuring every design decision is validated before a single line of production code is written.",
      points: [
        "Conduct stakeholder interviews and user research sessions to identify pain points and opportunities",
        "Map complete user journeys and identify friction points with heatmaps and session recordings",
        "Create high-fidelity prototypes in Figma, iterate rapidly through weekly design reviews",
        "Build and document a scalable component-based design system for long-term consistency",
        "Run A/B tests and usability audits to validate design decisions with real data",
      ],
    },
    results: [
      { value: "62%", label: "Increase in onboarding completion" },
      { value: "3.4×", label: "Improvement in conversion rate" },
      { value: "45%", label: "Reduction in support tickets" },
      { value: "96%", label: "Client satisfaction score" },
    ],
    featuredImage: aboutImg,
    finalThoughts:
      "Design is not decoration — it is strategy made visible. The most successful products we've worked on share one trait: they obsess over the experience as much as the technology. Whether you're launching a new product or redesigning an existing one, our team will help you ship interfaces your users love and your competitors envy.",
  },

  "saas-development": {
    slug: "saas-development",
    label: "SaaS Development",
    title: "SaaS Development & Integration Setup",
    subtitle:
      "Full-stack SaaS platforms architected for scale — with billing, auth, and integrations from day one.",
    heroImage: automationImg,
    meta: [
      { icon: <User size={18} />, label: "Clients", value: "B2B & B2C SaaS" },
      { icon: <MapPin size={18} />, label: "Location", value: "Global / Remote" },
      { icon: <Briefcase size={18} />, label: "Service", value: "Full-Stack Dev" },
      { icon: <Clock size={18} />, label: "Duration", value: "8–16 Weeks" },
    ],
    overview:
      "Launching a SaaS product demands more than just shipping code — it requires robust architecture, secure multi-tenancy, automated billing, and a seamless developer experience. We specialize in building production-grade SaaS platforms that handle the complexity so your team can focus on product-market fit and growth.",
    howItStarted:
      "After watching dozens of promising SaaS startups waste months reinventing authentication, billing, and tenant isolation, we built a repeatable framework. Our engineering team distilled the best patterns from enterprise-grade systems into a streamlined process that gets startups to market-ready in weeks, not months.",
    challenges: [
      "Building secure, isolated multi-tenant data architectures that scale",
      "Integrating complex billing scenarios — metered usage, tiered plans, and enterprise contracts",
      "Ensuring API reliability across third-party dependencies and webhooks",
      "Handling data migration and backward compatibility during rapid iteration",
    ],
    imageGrid: [automationImg, faq3, faq1, saasImg],
    approach: {
      intro:
        "We follow an API-first, modular architecture that allows each component of your SaaS to be built, tested, and scaled independently.",
      points: [
        "Define the data model and multi-tenancy strategy based on your business requirements",
        "Implement authentication, authorization, and role-based access using industry best practices",
        "Integrate Stripe (or equivalent) for subscription management, invoicing, and usage metering",
        "Build GraphQL/REST APIs with comprehensive documentation and rate limiting",
        "Set up CI/CD pipelines, automated testing, and monitoring from the very first sprint",
      ],
    },
    results: [
      { value: "10×", label: "Faster time-to-market" },
      { value: "99.9%", label: "Uptime SLA achieved" },
      { value: "50+", label: "Third-party integrations" },
      { value: "85%", label: "Reduction in dev overhead" },
    ],
    featuredImage: saasImg,
    finalThoughts:
      "Building a SaaS product is a marathon, not a sprint. The decisions you make in the first 90 days — around architecture, security, and infrastructure — will either accelerate or constrain everything that follows. We help you make the right decisions early so you can iterate fast and scale confidently.",
  },

  "brand-identity": {
    slug: "brand-identity",
    label: "Brand Identity",
    title: "Brand Identity for Tech Startups",
    subtitle:
      "Define and ship a brand that resonates — from visual systems to pitch-ready assets.",
    heroImage: saasImg,
    meta: [
      { icon: <User size={18} />, label: "Clients", value: "Early-Stage Startups" },
      { icon: <MapPin size={18} />, label: "Location", value: "Global / Remote" },
      { icon: <Briefcase size={18} />, label: "Service", value: "Brand Design" },
      { icon: <Clock size={18} />, label: "Duration", value: "3–6 Weeks" },
    ],
    overview:
      "Your brand is the first impression your product makes — long before anyone clicks a button or reads your docs. We help tech startups craft brand identities that feel intentional, credible, and memorable. From logo design and type systems to investor decks and marketing collateral, we build brands that punch above their weight.",
    howItStarted:
      "We saw too many brilliant product teams undermined by amateur branding. Investors passed on great ideas because the deck looked unpolished. Users questioned credibility because the landing page felt generic. We started offering brand design as a standalone service to give technical founders the visual credibility their products deserve.",
    challenges: [
      "Differentiating in crowded SaaS and fintech markets with overlapping value propositions",
      "Creating a visual system flexible enough for web, mobile, pitch decks, and social media",
      "Balancing founder personality with professional market positioning",
      "Moving fast without sacrificing design quality or brand consistency",
    ],
    imageGrid: [saasImg, faq2, aboutImg, faq3],
    approach: {
      intro:
        "Our brand process is structured but creative — combining strategic thinking with rapid visual iteration to deliver a complete brand kit in weeks.",
      points: [
        "Run a brand discovery workshop to define positioning, personality, and audience",
        "Explore multiple creative directions through moodboards and style tiles",
        "Design the logo, type system, color palette, and iconography set",
        "Build a comprehensive brand guidelines document for internal and partner use",
        "Deliver pitch deck templates, social media kits, and marketing-ready assets",
      ],
    },
    results: [
      { value: "40%", label: "Increase in investor meetings" },
      { value: "2.1×", label: "Improvement in landing page conversion" },
      { value: "100%", label: "Brand asset coverage" },
      { value: "4 Days", label: "Average turnaround per round" },
    ],
    featuredImage: faq2,
    finalThoughts:
      "A strong brand doesn't just look good — it creates trust, communicates authority, and makes every other marketing effort more effective. We believe every ambitious startup deserves a brand that matches the quality of their product. Let's build yours.",
  },

  "cloud-devops": {
    slug: "cloud-devops",
    label: "Cloud & DevOps",
    title: "Cloud Infrastructure & DevOps",
    subtitle:
      "Scalable, resilient cloud architectures with CI/CD, monitoring, and zero-downtime deployments.",
    heroImage: cloudImg,
    meta: [
      { icon: <User size={18} />, label: "Clients", value: "Growth-Stage SaaS" },
      { icon: <MapPin size={18} />, label: "Location", value: "Global / Remote" },
      { icon: <Briefcase size={18} />, label: "Service", value: "Cloud & DevOps" },
      { icon: <Clock size={18} />, label: "Duration", value: "Ongoing" },
    ],
    overview:
      "Infrastructure shouldn't be an afterthought — it should be a competitive advantage. We design and manage cloud architectures that are scalable, cost-efficient, and resilient. From initial migration to ongoing optimization, our DevOps practice ensures your platform stays fast, secure, and reliable as you grow.",
    howItStarted:
      "We watched startups burn through runway on over-provisioned cloud resources while still experiencing downtime during traffic spikes. The problem wasn't technology — it was architecture. We built our DevOps practice to give growing SaaS companies the same infrastructure quality as FAANG companies, without the FAANG budget.",
    challenges: [
      "Migrating legacy monoliths to cloud-native architectures without service disruption",
      "Managing cost optimization across multi-region, multi-service deployments",
      "Implementing zero-trust security models for compliance-sensitive industries",
      "Achieving true zero-downtime deployments during rapid feature releases",
    ],
    imageGrid: [cloudImg, faq1, faq3, automationImg],
    approach: {
      intro:
        "Our infrastructure methodology follows a build-measure-optimize loop, ensuring your cloud architecture evolves alongside your product.",
      points: [
        "Conduct a full infrastructure audit to identify bottlenecks, risks, and cost waste",
        "Design a cloud-native architecture using AWS/GCP/Azure best practices",
        "Implement CI/CD pipelines with automated testing, staging environments, and rollback",
        "Set up comprehensive monitoring, alerting, and incident response playbooks",
        "Run monthly reviews to optimize performance, security posture, and cloud spend",
      ],
    },
    results: [
      { value: "99.99%", label: "Uptime across all clients" },
      { value: "38%", label: "Average cloud cost reduction" },
      { value: "<5 min", label: "Mean time to recovery" },
      { value: "Zero", label: "Zero unplanned downtime events" },
    ],
    featuredImage: cloudImg,
    finalThoughts:
      "Your infrastructure is the foundation everything else is built on. When it's solid, your team ships faster, your users have better experiences, and your business scales with confidence. We've helped dozens of SaaS companies transform their infrastructure from a liability into an asset — and we'd love to do the same for you.",
  },
};

/* ─── Map service slugs to related services for "More Services" section ─── */
const allServiceSlugs = Object.keys(servicesData);

function getRelatedServices(currentSlug: string) {
  return allServiceSlugs
    .filter((s) => s !== currentSlug)
    .slice(0, 2)
    .map((s) => servicesData[s]);
}

/* ═══════════════════════════════════════════════════════
   REUSABLE SUB-COMPONENTS
   ═══════════════════════════════════════════════════════ */

/* ─── Meta Card ─── */
const MetaCard = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="bg-[#ffffff] rounded-2xl border border-[#e8e8f0] p-5 flex items-start gap-4">
    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#f1f3ff] text-[#2b2dff] shrink-0">
      {icon}
    </div>
    <div>
      <p className="text-[12px] font-semibold text-[#666666] uppercase tracking-wider mb-0.5">
        {label}
      </p>
      <p className="text-[15px] font-bold text-[#1a1a1a]">{value}</p>
    </div>
  </div>
);

/* ─── Stat Card ─── */
const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="bg-[#ffffff] rounded-2xl border border-[#e8e8f0] p-6 text-center">
    <p className="text-3xl md:text-4xl font-extrabold text-primary mb-2">
      {value}
    </p>
    <p className="text-[13px] font-medium text-[#666666]">{label}</p>
  </div>
);

/* ─── Related Service Card ─── */
const RelatedServiceCard = ({ service }: { service: ServiceData }) => (
  <Link
    to={`/services/${service.slug}`}
    className="bg-[#ffffff] rounded-[20px] border border-[#e8e8f0] overflow-hidden group block"
  >
    <div className="h-[200px] overflow-hidden">
      <img
        src={service.heroImage}
        alt={service.title}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
    <div className="p-6">
      <h3 className="text-lg font-bold text-[#1a1a1a] mb-2 leading-snug">
        {service.title}
      </h3>
      <p className="text-[14px] text-[#666666] leading-relaxed mb-4 line-clamp-2">
        {service.subtitle}
      </p>
      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2b2dff]">
        Learn More <ArrowRight size={14} />
      </span>
    </div>
  </Link>
);

/* ═══════════════════════════════════════════════════════
   MAIN PAGE COMPONENT
   ═══════════════════════════════════════════════════════ */
const ServiceDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;

  if (!service) {
    return (
      <PageLayout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl font-extrabold text-[#1a1a1a] mb-4">
            Service Not Found
          </h1>
          <p className="text-[#666666] mb-8">
            The service you're looking for doesn't exist.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 h-12 px-8 text-sm font-semibold text-white rounded-lg bg-primary hover:bg-primary/90 transition-all"
          >
            View All Services <ArrowRight size={15} />
          </Link>
        </div>
      </PageLayout>
    );
  }

  const relatedServices = getRelatedServices(service.slug);

  return (
    <PageLayout>
      {/* ═══ 1. HERO / HEADER ═══ */}
      <section className="bg-[#f9f9ff] pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Breadcrumb / Label */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#dce2f7] rounded-full mb-6 w-max">
            <div className="w-1.5 h-1.5 rounded-full bg-[#2b2dff]" />
            <span className="text-[11px] font-bold text-[#2b2dff] tracking-widest uppercase">
              {service.label}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold text-[#1a1a1a] tracking-tight leading-tight mb-5 max-w-3xl">
            {service.title}
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-[#666666] leading-relaxed max-w-2xl mb-10">
            {service.subtitle}
          </p>

          {/* Hero Image */}
          <div className="w-full aspect-[16/7] rounded-[20px] overflow-hidden border border-[#e8e8f0]">
            <img
              src={service.heroImage}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ═══ 2. PROJECT META INFO ═══ */}
      <section className="bg-[#f9f9ff] pb-16 md:pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {service.meta.map((m) => (
              <MetaCard key={m.label} icon={m.icon} label={m.label} value={m.value} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3. OVERVIEW ═══ */}
      <section className="bg-[#f1f3ff] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a1a1a] tracking-tight mb-5">
              Overview
            </h2>
            <p className="text-[15px] md:text-base text-[#4a4a4a] leading-[1.8]">
              {service.overview}
            </p>
          </div>
        </div>
      </section>

      {/* ═══ 4. HOW IT STARTED ═══ */}
      <section className="bg-[#f9f9ff] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a1a1a] tracking-tight mb-5">
              How It Started
            </h2>
            <p className="text-[15px] md:text-base text-[#4a4a4a] leading-[1.8]">
              {service.howItStarted}
            </p>
          </div>
        </div>
      </section>

      {/* ═══ 5. CHALLENGES ═══ */}
      <section className="bg-[#f1f3ff] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a1a1a] tracking-tight mb-6">
              Key Challenges
            </h2>
            <ul className="space-y-4">
              {service.challenges.map((c, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[15px] text-[#1a1a1a]"
                >
                  <CheckCircle
                    size={18}
                    className="text-[#2b2dff] shrink-0 mt-0.5"
                  />
                  <span className="leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ 6. IMAGE GRID ═══ */}
      <section className="bg-[#f9f9ff] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {service.imageGrid.map((img, i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-[16px] overflow-hidden border border-[#e8e8f0]"
              >
                <img
                  src={img}
                  alt={`${service.title} visual ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 7. OUR APPROACH ═══ */}
      <section className="bg-[#f1f3ff] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a1a1a] tracking-tight mb-5">
              Our Approach
            </h2>
            <p className="text-[15px] md:text-base text-[#4a4a4a] leading-[1.8] mb-6">
              {service.approach.intro}
            </p>
            <ul className="space-y-4">
              {service.approach.points.map((p, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[15px] text-[#1a1a1a]"
                >
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#dce2f7] text-[#2b2dff] text-[11px] font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ 8. RESULTS / METRICS ═══ */}
      <section className="bg-[#f9f9ff] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a1a1a] tracking-tight mb-8 text-center">
            Results That Speak
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {service.results.map((r) => (
              <StatCard key={r.label} value={r.value} label={r.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 9. FEATURED IMAGE / TESTIMONIAL ═══ */}
      <section className="bg-[#f1f3ff] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="relative w-full aspect-[16/7] rounded-[20px] overflow-hidden border border-[#e8e8f0]">
            <img
              src={service.featuredImage}
              alt={`${service.title} featured`}
              className="w-full h-full object-cover"
            />
            {/* Quote Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent flex items-end p-8 md:p-12">
              <p className="text-white text-lg md:text-xl font-semibold max-w-xl leading-relaxed drop-shadow-sm">
                "Working with Kadix transformed the way we think about our product. The results were immediate and measurable."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 10. FINAL THOUGHTS ═══ */}
      <section className="bg-[#f9f9ff] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a1a1a] tracking-tight mb-5">
              Final Thoughts
            </h2>
            <p className="text-[15px] md:text-base text-[#4a4a4a] leading-[1.8] mb-8">
              {service.finalThoughts}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 h-12 px-8 text-sm font-semibold text-white rounded-lg bg-primary hover:bg-primary/90 transition-all duration-300"
            >
              Start a Conversation <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ 11. MORE SERVICES ═══ */}
      <section className="bg-[#f1f3ff] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a1a1a] tracking-tight">
              More Services
            </h2>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#2b2dff]"
            >
              View All Services <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {relatedServices.map((rs) => (
              <RelatedServiceCard key={rs.slug} service={rs} />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ServiceDetails;
