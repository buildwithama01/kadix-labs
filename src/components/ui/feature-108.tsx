import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Layout, Pointer, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TabContent {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  url?: string;
  imageSrc: string;
  imageAlt: string;
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

interface Feature108Props {
  badge?: string;
  heading?: string;
  description?: string;
  tabs?: Tab[];
  className?: string;
}

const Feature108 = ({
  badge = "Kadix Ventures",
  heading = "What We're Building",
  description = "Our venture studio incubates internal startups, building the products of tomorrow.",
  tabs = [
    {
      value: "aurora",
      icon: <Zap className="h-auto w-4 shrink-0" />,
      label: "Project Aurora",
      content: {
        badge: "Coming Soon",
        title: "AI-powered analytics platform for SMBs.",
        description:
          "Unlock deeply embedded signals in your sales pipeline through artificial intelligence. Aurora predicts churn, visualizes metrics, and gives actionable recommendations.",
        buttonText: "Learn More",
        url: "/work/ventures/aurora",
        imageSrc:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        imageAlt: "Aurora Dashboard Interface",
      },
    },
    {
      value: "stealth",
      icon: <Pointer className="h-auto w-4 shrink-0" />,
      label: "Stealth Startup",
      content: {
        badge: "Stealth Mode",
        title: "A new approach to team collaboration.",
        description:
          "We are building a radically transparent and unified work surface for remote-first teams. Say goodbye to scattered contexts and disjointed threads.",
        buttonText: "Join Waitlist",
        imageSrc:
          "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
        imageAlt: "Stealth Startup Concept",
      },
    },
    {
      value: "nexus",
      icon: <Layout className="h-auto w-4 shrink-0" />,
      label: "Project Nexus",
      content: {
        badge: "MVP",
        title: "Developer tooling for modern workflows.",
        description:
          "Fast, un-opinionated infrastructure scaffolding. Nexus ties your favorite deployment pipelines directly to frontend abstractions cleanly and immutably.",
        buttonText: "Learn More",
        url: "/work/ventures/nexus",
        imageSrc:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
        imageAlt: "Code Development Screen",
      },
    },
  ],
  className,
}: Feature108Props) => {
  const prefersReduced = useReducedMotion();

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
      transition: { staggerChildren: 0.1, delayChildren: 0.15 },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.94, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
    },
  };

  const v = (variant: any) => (prefersReduced ? undefined : variant);

  return (
    <section className={cn("py-20 md:py-28 px-6", className)}>
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.35, margin: "0px 0px -80px 0px" }}
          variants={v(stagger)}
          className="flex flex-col items-center gap-4 text-center mb-12"
        >
          <motion.div variants={v(fadeUp)}>
            <Badge variant="outline" className="rounded-full px-4 py-1.5 border-primary/20 text-foreground text-sm font-medium">{badge}</Badge>
          </motion.div>
          <motion.h2 variants={v(fadeUp)} className="max-w-2xl text-3xl font-bold md:text-4xl text-foreground">
            {heading}
          </motion.h2>
          <motion.p variants={v(fadeUp)} className="text-muted-foreground mt-2 max-w-lg mx-auto md:text-lg">{description}</motion.p>
        </motion.div>
        
        <Tabs defaultValue={tabs[0].value} className="mt-8 relative">
          <TabsList className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 bg-muted/50 p-2 rounded-2xl w-fit mx-auto">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-muted-foreground transition-all 
                           data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm
                           hover:text-foreground"
              >
                {tab.icon} {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2, margin: "0px 0px -60px 0px" }}
            variants={v(scaleIn)}
            className="mx-auto mt-10 rounded-3xl bg-card border border-border p-6 shadow-sm lg:p-12"
          >
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid place-items-center gap-12 lg:grid-cols-2 lg:gap-16 outline-none focus-visible:ring-0"
              >
                <div className="flex flex-col gap-6 md:order-last lg:order-none">
                  <Badge variant="outline" className="w-fit bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 font-semibold px-3 py-1">
                    {tab.content.badge}
                  </Badge>
                  <h3 className="text-2xl font-bold text-foreground lg:text-4xl leading-tight">
                    {tab.content.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed lg:text-lg">
                    {tab.content.description}
                  </p>
                  <div className="mt-2">
                    {tab.content.url ? (
                      <Button asChild size="lg" className="rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors border-0 shadow-md font-semibold px-8 h-12">
                        <Link to={tab.content.url}>
                          {tab.content.buttonText}
                        </Link>
                      </Button>
                    ) : (
                      <Button size="lg" className="rounded-lg bg-primary/10 text-primary border-0 font-semibold px-8 h-12 hover:bg-primary/20 hover:text-primary transition-colors">
                        {tab.content.buttonText}
                      </Button>
                    )}
                  </div>
                </div>
                <div className="w-full relative shadow-lg rounded-2xl overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
                  <img
                    src={tab.content.imageSrc}
                    alt={tab.content.imageAlt}
                    className="w-full h-[300px] lg:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </TabsContent>
            ))}
          </motion.div>
        </Tabs>
      </div>
    </section>
  );
};

export { Feature108 };
