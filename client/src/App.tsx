import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import CollectionPage from "./pages/CollectionPage";
import ProductPage from "./pages/ProductPage";
import HistoirePage from "./pages/HistoirePage";
import ShopPage from "./pages/ShopPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/collections/:slug" component={CollectionPage} />
      <Route path="/produits/:slug" component={ProductPage} />
      <Route path="/notre-histoire" component={HistoirePage} />
      <Route path="/boutique" component={ShopPage} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
