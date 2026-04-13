import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-background">
    <div className="max-w-[1200px] mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <Link to="/" className="text-xl font-bold text-foreground">
            Kadix<span className="text-primary">.</span>
          </Link>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Building scalable tech products and future companies.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
            <li><Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-primary transition-colors">Web & App Development</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">AI Automation</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">SaaS Development</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4">Ventures</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/ventures" className="hover:text-primary transition-colors">Our Startups</Link></li>
            <li><Link to="/ventures" className="hover:text-primary transition-colors">Venture Studio</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">© 2024 Kadix Technologies. All rights reserved.</p>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Twitter</a>
          <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-primary transition-colors">GitHub</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
