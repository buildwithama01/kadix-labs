import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface FooterProps {
  className?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const Footer = ({
  className,
  menuItems = [
    {
      title: "Company",
      links: [
        { text: "About", url: "/about" },
        { text: "Our Work", url: "/work" },
        { text: "Blog", url: "/blog" },
        { text: "Contact", url: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { text: "Web & App Development", url: "/services" },
        { text: "AI Automation", url: "/services" },
        { text: "SaaS Development", url: "/services" },
      ],
    },
    {
      title: "Work",
      links: [
        { text: "Our Ventures", url: "/work" },
        { text: "Client Portfolio", url: "/work" },
      ],
    },
    {
      title: "Social",
      links: [
        { text: "Twitter", url: "#" },
        { text: "LinkedIn", url: "#" },
        { text: "GitHub", url: "#" },
      ],
    },
  ],
  copyright = "© 2024 Kadix Technologies. All rights reserved.",
  bottomLinks = [
    { text: "Terms and Conditions", url: "#" },
    { text: "Privacy Policy", url: "#" },
  ],
}: FooterProps) => {
  const prefersReduced = useReducedMotion();
  const v = (variant: any) => (prefersReduced ? undefined : variant);

  return (
    <footer className={cn("border-t border-border bg-background py-16 md:py-24", className)}>
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25, margin: "0px 0px -80px 0px" }}
          variants={v(stagger)}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {menuItems.map((section, sectionIdx) => (
            <motion.div key={sectionIdx} variants={v(fadeUp)}>
              <h3 className="mb-4 text-sm font-bold text-foreground">{section.title}</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {section.links.map((link, linkIdx) => (
                  <li
                    key={linkIdx}
                    className="font-medium hover:text-primary transition-colors"
                  >
                    {link.url.startsWith("http") || link.url.startsWith("#") ? (
                      <a href={link.url}>{link.text}</a>
                    ) : (
                      <Link to={link.url}>{link.text}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.35, margin: "0px 0px -100px 0px" }}
          variants={v({
            hidden: { opacity: 0, scale: 0.95 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
            },
          })}
          className="mt-20 md:mt-32"
        >
          <Link
            to="/"
            className="block w-full text-center text-[15vw] md:text-[18vw] font-black leading-[0.8] tracking-tighter text-foreground hover:text-primary transition-colors"
          >
            KADIX
          </Link>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={v(fadeUp)}
          className="mt-10 flex flex-col justify-between gap-4 border-t border-border pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center"
        >
          <p>{copyright}</p>
          <ul className="flex gap-6">
            {bottomLinks.map((link, linkIdx) => (
              <li key={linkIdx} className="hover:text-primary transition-colors">
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;



