import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { ContactFaq } from "@/components/ContactFaq";
import { motion, useReducedMotion } from "framer-motion";
import { ScrollProgress } from "@/lib/animations";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import worldGlobe from "@/assets/images/world-globe.png";

/* ── Animation Variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const Contact = () => {
  const prefersReduced = useReducedMotion();
  const v = (variant: any) => (prefersReduced ? undefined : variant);

  return (
    <PageLayout>
      <ScrollProgress />

      <PageHero
        title="Let's build something that scales together"
        description="Get in touch with Kadix Technologies to discuss your project, ideas, or collaboration."
      />

      <div className="bg-[#f9f9ff] pt-24 pb-24 font-sans text-[#1a1a1a]">
        {/* 2. CONTACT INFO CARDS */}
        <section className="max-w-[1100px] mx-auto px-6 mb-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.35, margin: "0px 0px -100px 0px" }}
            variants={v(stagger)}
            className="bg-white rounded-[24px] border border-border/40 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-border/40 overflow-hidden"
          >
            {[
              { title: "Email", content: <a href="mailto:hello@kadix.tech" className="text-[#666666] hover:text-[#2b2dff] transition-colors">hello@kadix.tech</a> },
              { title: "Contact", content: <a href="tel:+234000000000" className="text-[#666666] hover:text-[#2b2dff] transition-colors">+234 XXX XXX XXXX</a> },
              { title: "Location", content: <p className="text-[#666666]">Nigeria</p> },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={v(fadeUp)}
                className="flex-1 p-8 md:p-10 flex flex-col justify-start text-left"
              >
                <h3 className="font-bold text-lg text-[#1a1a1a] mb-2">{item.title}</h3>
                {item.content}
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* 3. MAIN CONTACT SECTION */}
        <section className="max-w-[1100px] mx-auto px-6 mb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25, margin: "0px 0px -80px 0px" }}
            variants={v(stagger)}
            className="flex flex-col lg:flex-row gap-16 lg:gap-24"
          >
            {/* Left Side */}
            <motion.div variants={v(slideLeft)} className="flex-1 lg:max-w-md pt-4">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
                Start your next project with us
              </h2>
              <p className="text-[#666666] leading-relaxed mb-12 text-lg">
                Whether you need a custom web platform, mobile application, or
                AI-powered automation, our team of experts is ready to help you
                scale smoothly.
              </p>

              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider text-[#1a1a1a] mb-4">
                  Connect with us
                </h4>
                <div className="flex items-center gap-4">
                  {[
                    { icon: Instagram, label: "Instagram" },
                    { icon: Facebook, label: "Facebook" },
                    { icon: Twitter, label: "Twitter" },
                    { icon: Linkedin, label: "LinkedIn" },
                  ].map(({ icon: Icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      aria-label={label}
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#666666] hover:text-[#2b2dff] hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-[#dce2f7]"
                    >
                      <Icon size={18} strokeWidth={2} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Side: Form */}
            <motion.div variants={v(slideRight)} className="flex-1">
              <div className="bg-white rounded-[24px] p-8 md:p-10 border border-border/40">
                <form className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="firstName"
                        className="text-sm font-semibold text-[#1a1a1a]"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="h-12 px-4 rounded-xl bg-[#f9f9ff] border border-transparent focus:border-[#4ba4fd] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#4ba4fd]/10 transition-all text-[#1a1a1a]"
                        placeholder="John"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="lastName"
                        className="text-sm font-semibold text-[#1a1a1a]"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="h-12 px-4 rounded-xl bg-[#f9f9ff] border border-transparent focus:border-[#4ba4fd] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#4ba4fd]/10 transition-all text-[#1a1a1a]"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-semibold text-[#1a1a1a]"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="h-12 px-4 rounded-xl bg-[#f9f9ff] border border-transparent focus:border-[#4ba4fd] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#4ba4fd]/10 transition-all text-[#1a1a1a]"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-semibold text-[#1a1a1a]"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="h-12 px-4 rounded-xl bg-[#f9f9ff] border border-transparent focus:border-[#4ba4fd] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#4ba4fd]/10 transition-all text-[#1a1a1a]"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-semibold text-[#1a1a1a]"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="px-4 py-3 rounded-xl bg-[#f9f9ff] border border-transparent focus:border-[#4ba4fd] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#4ba4fd]/10 transition-all text-[#1a1a1a] resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 h-14 rounded-lg bg-primary text-white font-bold text-[15px] hover:bg-primary/90 hover:scale-[1.01] transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* 4. GLOBAL PRESENCE */}
        <section className="max-w-[1200px] mx-auto px-6 text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.35, margin: "0px 0px -100px 0px" }}
            variants={v(fadeUp)}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-12 text-[#1a1a1a]"
          >
            Built to help you scale globally
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3, margin: "0px 0px -80px 0px" }}
            variants={v(scaleUp)}
            className="relative max-w-4xl mx-auto select-none pointer-events-none h-[280px] md:h-[400px] overflow-hidden mix-blend-multiply mb-32"
          >
            <img
              src={worldGlobe}
              alt="Global Network"
              className="w-full h-auto object-cover object-top opacity-80 mix-blend-multiply"
            />
          </motion.div>
        </section>

        {/* 5. FAQ SECTION */}
        <ContactFaq />
      </div>
    </PageLayout>
  );
};

export default Contact;



