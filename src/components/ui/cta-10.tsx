import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Cta10Props {
  heading?: string;
  description?: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  className?: string;
}

const Cta10 = ({
  heading = "Let's Build Something That Scales",
  description = "Whether you need a product built or want to explore a partnership, we're ready.",
  buttons = {
    primary: {
      text: "Get In Touch",
      url: "/contact",
    },
  },
  className,
}: Cta10Props) => {
  const prefersReduced = useReducedMotion();

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.94, y: 24 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const v = (variant: any) => (prefersReduced ? undefined : variant);

  return (
    <section className={cn("py-20 md:py-28 px-6", className)}>
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3, margin: "0px 0px -80px 0px" }}
          variants={v(scaleIn)}
          className="flex w-full flex-col gap-8 overflow-hidden rounded-2xl bg-primary p-10 md:rounded-2xl lg:flex-row lg:items-center lg:p-16 shadow-2xl"
        >
          <div className="flex-1">
            <h3 className="mb-4 text-3xl font-extrabold text-primary-foreground md:mb-5 md:text-4xl lg:text-5xl tracking-tight leading-[1.1]">
              {heading}
            </h3>
            <p className="max-w-xl text-primary-foreground/80 lg:text-lg leading-relaxed">
              {description}
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-4 sm:flex-row">
            {buttons.secondary && (
              <Button asChild variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 rounded-lg h-12 px-8 font-semibold">
                <Link to={buttons.secondary.url}>{buttons.secondary.text}</Link>
              </Button>
            )}
            {buttons.primary && (
              <Button asChild variant="default" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-lg h-12 px-8 font-semibold shadow-lg">
                <Link to={buttons.primary.url}>{buttons.primary.text}</Link>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { Cta10 };
