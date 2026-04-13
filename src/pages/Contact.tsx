import PageLayout from "@/components/PageLayout";
import SectionWrapper from "@/components/SectionWrapper";
import { useState } from "react";
import { Send } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageLayout>
      <SectionWrapper className="pt-24 md:pt-32">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground">Get In Touch</h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Have a project in mind? Let's talk about how we can help you build it.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="pt-0">
        <div className="max-w-xl mx-auto">
          {submitted ? (
            <div className="text-center p-12 rounded-2xl bg-card border border-border">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Send size={24} className="text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Thank You!</h2>
              <p className="mt-2 text-muted-foreground">We'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full h-12 px-4 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full h-12 px-4 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Project Details</label>
                <textarea
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full h-12 rounded-pill bg-gradient-to-r from-[#0b00da] to-[#4ba4fd] text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </SectionWrapper>
    </PageLayout>
  );
};

export default Contact;
