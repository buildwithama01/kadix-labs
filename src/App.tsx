import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import { VenturesList, VentureDetail } from "./pages/Ventures";
import { PortfolioList, CaseStudy } from "./pages/Portfolio";
import { AboutPage, FounderPage } from "./pages/About";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/ventures" element={<VenturesList />} />
          <Route path="/ventures/:slug" element={<VentureDetail />} />
          <Route path="/portfolio" element={<PortfolioList />} />
          <Route path="/portfolio/:slug" element={<CaseStudy />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/:slug" element={<FounderPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
