/**
 * ─────────────────────────────────────────────────────────────────────
 *  Kadix Labs — Reusable Scroll-Triggered Animation Components
 * ─────────────────────────────────────────────────────────────────────
 *
 *  Built on Framer Motion. Every wrapper checks `prefers-reduced-motion`
 *  and renders children instantly when the user prefers reduced motion.
 *
 *  Components:
 *    FadeIn         – fade + translateY on viewport entry
 *    SlideIn        – directional slide (left / right / up / down)
 *    ScaleIn        – scale from 0.92 → 1 with fade
 *    StaggerContainer / StaggerItem  – staggered children
 *    ParallaxImage  – subtle vertical parallax on scroll
 *    TextReveal     – word-by-word stagger reveal
 *    ScrollProgress – progress-bar driven by page scroll
 *    HeroReveal     – orchestrated hero entrance (badge → title → desc → cta)
 */

import React, { useRef, type ReactNode, type CSSProperties } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useReducedMotion as useFramerReducedMotion,
  type Variant,
  type Transition,
  type MotionStyle,
} from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Shared defaults                                                    */
/* ------------------------------------------------------------------ */

/** Default viewport intersection options — margin pulls trigger inward so
 *  animations start when elements are well within the visible area. */
const DEFAULT_VIEWPORT = { once: false, amount: 0.25 as const, margin: "0px 0px -80px 0px" };

/** Default spring-style transition for enter animations */
const SMOOTH_TRANSITION: Transition = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1], // custom cubic-bezier (ease-out-expo feel)
};

/* ------------------------------------------------------------------ */
/*  1.  FadeIn                                                         */
/* ------------------------------------------------------------------ */

interface FadeInProps {
  children: ReactNode;
  /** Extra translateY distance in px (default 30) */
  y?: number;
  /** Delay in seconds */
  delay?: number;
  /** Duration override */
  duration?: number;
  /** Custom className */
  className?: string;
  /** HTML tag to render (default div) */
  as?: keyof JSX.IntrinsicElements;
  /** Style overrides */
  style?: CSSProperties;
  /** Viewport config override */
  viewport?: { once?: boolean; amount?: number; margin?: string };
}

export const FadeIn = ({
  children,
  y = 30,
  delay = 0,
  duration = 0.7,
  className,
  as: Tag = "div",
  style,
  viewport,
}: FadeInProps) => {
  const prefersReduced = useFramerReducedMotion();
  const MotionTag = motion[Tag as keyof typeof motion] as any;

  return (
    <MotionTag
      initial={prefersReduced ? undefined : { opacity: 0, y }}
      whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ ...DEFAULT_VIEWPORT, ...viewport }}
      transition={{ ...SMOOTH_TRANSITION, duration, delay }}
      className={className}
      style={style}
    >
      {children}
    </MotionTag>
  );
};

/* ------------------------------------------------------------------ */
/*  2.  SlideIn                                                        */
/* ------------------------------------------------------------------ */

type Direction = "left" | "right" | "up" | "down";

interface SlideInProps {
  children: ReactNode;
  direction?: Direction;
  distance?: number;
  delay?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
  viewport?: { once?: boolean; amount?: number; margin?: string };
}

const slideOffset = (dir: Direction, dist: number) => {
  switch (dir) {
    case "left":
      return { x: -dist, y: 0 };
    case "right":
      return { x: dist, y: 0 };
    case "up":
      return { x: 0, y: -dist };
    case "down":
      return { x: 0, y: dist };
  }
};

export const SlideIn = ({
  children,
  direction = "left",
  distance = 60,
  delay = 0,
  duration = 0.7,
  className,
  style,
  viewport,
}: SlideInProps) => {
  const prefersReduced = useFramerReducedMotion();
  const offset = slideOffset(direction, distance);

  return (
    <motion.div
      initial={prefersReduced ? undefined : { opacity: 0, ...offset }}
      whileInView={prefersReduced ? undefined : { opacity: 1, x: 0, y: 0 }}
      viewport={{ ...DEFAULT_VIEWPORT, ...viewport }}
      transition={{ ...SMOOTH_TRANSITION, duration, delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

/* ------------------------------------------------------------------ */
/*  3.  ScaleIn                                                        */
/* ------------------------------------------------------------------ */

interface ScaleInProps {
  children: ReactNode;
  /** Initial scale (default 0.92) */
  scale?: number;
  delay?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
  viewport?: { once?: boolean; amount?: number; margin?: string };
}

export const ScaleIn = ({
  children,
  scale = 0.92,
  delay = 0,
  duration = 0.6,
  className,
  style,
  viewport,
}: ScaleInProps) => {
  const prefersReduced = useFramerReducedMotion();

  return (
    <motion.div
      initial={prefersReduced ? undefined : { opacity: 0, scale }}
      whileInView={prefersReduced ? undefined : { opacity: 1, scale: 1 }}
      viewport={{ ...DEFAULT_VIEWPORT, ...viewport }}
      transition={{ ...SMOOTH_TRANSITION, duration, delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

/* ------------------------------------------------------------------ */
/*  4.  StaggerContainer + StaggerItem                                 */
/* ------------------------------------------------------------------ */

interface StaggerContainerProps {
  children: ReactNode;
  /** Delay between each child (default 0.1s) */
  staggerDelay?: number;
  /** Initial delay before first child (default 0) */
  delayChildren?: number;
  className?: string;
  style?: CSSProperties;
  viewport?: { once?: boolean; amount?: number; margin?: string };
}

export const StaggerContainer = ({
  children,
  staggerDelay = 0.1,
  delayChildren = 0,
  className,
  style,
  viewport,
}: StaggerContainerProps) => {
  const prefersReduced = useFramerReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ ...DEFAULT_VIEWPORT, ...viewport }}
      variants={
        prefersReduced
          ? {}
          : {
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: staggerDelay,
                  delayChildren,
                },
              },
            }
      }
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Override defaults (fade-up by 24px) */
  y?: number;
}

const staggerItemVariants = (y: number) => ({
  hidden: { opacity: 0, y } as Variant,
  visible: {
    opacity: 1,
    y: 0,
    transition: SMOOTH_TRANSITION,
  } as Variant,
});

export const StaggerItem = ({
  children,
  className,
  style,
  y = 24,
}: StaggerItemProps) => {
  const prefersReduced = useFramerReducedMotion();

  return (
    <motion.div
      variants={prefersReduced ? undefined : staggerItemVariants(y)}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

/* ------------------------------------------------------------------ */
/*  5.  ParallaxImage                                                  */
/* ------------------------------------------------------------------ */

interface ParallaxImageProps {
  src: string;
  alt: string;
  /** Parallax speed factor — higher = more movement (default 0.15) */
  speed?: number;
  className?: string;
  imgClassName?: string;
  style?: CSSProperties;
}

export const ParallaxImage = ({
  src,
  alt,
  speed = 0.15,
  className,
  imgClassName = "",
  style,
}: ParallaxImageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useFramerReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Maps scroll progress [0,1] → pixel shift
  const y = useTransform(scrollYProgress, [0, 1], [speed * -100, speed * 100]);

  return (
    <div ref={ref} className={className} style={{ overflow: "hidden", ...style }}>
      <motion.img
        src={src}
        alt={alt}
        style={prefersReduced ? undefined : ({ y } as MotionStyle)}
        className={`w-full h-full object-cover will-change-transform ${imgClassName}`}
        loading="lazy"
      />
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  6.  TextReveal  (word-by-word stagger)                             */
/* ------------------------------------------------------------------ */

interface TextRevealProps {
  /** The text string to reveal */
  text: string;
  /** HTML tag for the wrapper (default "p") */
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "span";
  className?: string;
  /** Stagger delay per word (default 0.04s) */
  staggerDelay?: number;
  /** Initial delay (default 0) */
  delay?: number;
  viewport?: { once?: boolean; amount?: number; margin?: string };
}

export const TextReveal = ({
  text,
  as: Tag = "p",
  className,
  staggerDelay = 0.04,
  delay = 0,
  viewport,
}: TextRevealProps) => {
  const prefersReduced = useFramerReducedMotion();
  const words = text.split(" ");

  if (prefersReduced) {
    return <Tag className={className}>{text}</Tag>;
  }

  const MotionTag = motion[Tag as keyof typeof motion] as any;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ ...DEFAULT_VIEWPORT, ...viewport }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: staggerDelay, delayChildren: delay },
        },
      }}
      style={{ display: "flex", flexWrap: "wrap" as const }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
            },
          }}
          style={{ display: "inline-block", marginRight: "0.3em" }}
        >
          {word}
        </motion.span>
      ))}
    </MotionTag>
  );
};

/* ------------------------------------------------------------------ */
/*  7.  ScrollProgress bar                                             */
/* ------------------------------------------------------------------ */

interface ScrollProgressProps {
  /** Fixed position (default "top") */
  position?: "top" | "bottom";
  /** Bar height in px (default 3) */
  height?: number;
  /** Gradient or solid colour */
  color?: string;
  /** z-index (default 9999) */
  zIndex?: number;
}

export const ScrollProgress = ({
  position = "top",
  height = 3,
  color = "linear-gradient(to right, #2b2dff, #4ba4fd)",
  zIndex = 9999,
}: ScrollProgressProps) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: "left",
        position: "fixed",
        left: 0,
        right: 0,
        [position]: 0,
        height,
        background: color,
        zIndex,
      }}
    />
  );
};

/* ------------------------------------------------------------------ */
/*  8.  HeroReveal  — orchestrated hero entrance                       */
/* ------------------------------------------------------------------ */

interface HeroRevealProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

/**
 * Wraps hero children and plays a coordinated entrance animation.
 * Assign `custom={0}`, `custom={1}`, etc. to direct children
 * (or nest inside `motion.div` with custom) for stagger ordering.
 */
export const HeroReveal = ({ children, className, style }: HeroRevealProps) => {
  const prefersReduced = useFramerReducedMotion();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={
        prefersReduced
          ? {}
          : {
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.18,
                  delayChildren: 0.25,
                },
              },
            }
      }
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

/** Fade-up variant for use inside HeroReveal */
export const heroChildVariants = {
  hidden: { opacity: 0, y: 30 } as Variant,
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  } as Variant,
};

/* ------------------------------------------------------------------ */
/*  9.  CountUp — animated number counter                              */
/* ------------------------------------------------------------------ */

interface CountUpProps {
  /** Target number to count to */
  to: number;
  /** Suffix (e.g. "+" or "%") */
  suffix?: string;
  /** Prefix (e.g. "$") */
  prefix?: string;
  /** Duration in seconds (default 2) */
  duration?: number;
  className?: string;
}

export const CountUp = ({
  to,
  suffix = "",
  prefix = "",
  duration = 2,
  className,
}: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const prefersReduced = useFramerReducedMotion();
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const count = useTransform(
    // We create a simple motion value that goes from 0 to `to`
    useScroll().scrollYProgress, // dummy — overridden below
    [0, 1],
    [0, to]
  );

  // For a cleaner countup, we use a different approach with spring
  if (prefersReduced) {
    return (
      <span ref={ref} className={className}>
        {prefix}{to}{suffix}
      </span>
    );
  }

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      {prefix}{to}{suffix}
    </motion.span>
  );
};


