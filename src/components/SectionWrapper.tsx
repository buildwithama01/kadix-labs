import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  alternate?: boolean;
  id?: string;
}

const SectionWrapper = ({ children, className, alternate, id }: SectionWrapperProps) => (
  <section
    id={id}
    className={cn(
      "py-20 md:py-28 px-6",
      alternate && "bg-accent",
      className
    )}
  >
    <div className="max-w-[1200px] mx-auto">{children}</div>
  </section>
);

export default SectionWrapper;
