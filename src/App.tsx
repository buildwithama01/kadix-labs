import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import { WorkPage, VentureDetail, CaseStudy } from "./pages/Work";
import { AboutPage, FounderPage } from "./pages/About";
import Contact from "./pages/Contact";
import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";
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
          <Route path="/services/:slug" element={<ServiceDetails />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/ventures/:slug" element={<VentureDetail />} />
          <Route path="/work/portfolio/:slug" element={<CaseStudy />} />
          {/* Redirects from old routes */}
          <Route path="/ventures" element={<Navigate to="/work" replace />} />
          <Route path="/ventures/:slug" element={<Navigate to="/work" replace />} />
          <Route path="/portfolio" element={<Navigate to="/work" replace />} />
          <Route path="/portfolio/:slug" element={<Navigate to="/work" replace />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/:slug" element={<FounderPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
