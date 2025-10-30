import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CasinoShowcase from "./pages/CasinoShowcase";
import CasinoShowcaseFR2 from "./pages/CasinoShowcaseFR2";
import CasinoShowcaseFR3 from "./pages/CasinoShowcaseFR3";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/offers-fr-fr-ij9zkrp5" element={<CasinoShowcase />} />
          <Route path="/offers-fr-fr-frw8wnf8" element={<CasinoShowcaseFR2 />} />
          <Route path="/offers-fr-fr-5hh0uoas" element={<CasinoShowcaseFR3 />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
