import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence } from "framer-motion";
import NotFound from "@/pages/not-found";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Now from "./pages/Now";
import Uses from "./pages/Uses";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { PageTransition } from "@/components/PageTransition";

function Router() {
  const [location] = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Switch key={location}>
            <Route path="/">
              <PageTransition>
                <Home />
              </PageTransition>
            </Route>
            <Route path="/blog">
              <PageTransition>
                <Blog />
              </PageTransition>
            </Route>
            <Route path="/now">
              <PageTransition>
                <Now />
              </PageTransition>
            </Route>
            <Route path="/uses">
              <PageTransition>
                <Uses />
              </PageTransition>
            </Route>
            <Route>
              <PageTransition>
                <NotFound />
              </PageTransition>
            </Route>
          </Switch>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CustomCursor />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
