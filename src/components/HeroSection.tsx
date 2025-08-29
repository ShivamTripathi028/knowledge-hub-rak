import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-knowledge.jpg";

export const HeroSection = () => {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-background to-muted overflow-hidden">
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Hero Content */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold font-poppins text-foreground mb-6 leading-tight">
              How can we{" "}
              <span className="text-primary">help you</span>{" "}
              today?
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Search our comprehensive knowledge base for answers, guides, and solutions to all your questions.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Button 
                variant="search" 
                size="search" 
                className="w-full shadow-hero border-0 bg-card text-muted-foreground"
              >
                <Search className="h-5 w-5 mr-3 text-muted-foreground" />
                Search for articles, guides, FAQs...
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-12">
            <img 
              src={heroImage} 
              alt="Knowledge sharing and collaboration" 
              className="mx-auto rounded-lg shadow-hero max-w-full h-auto"
            />
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-accent rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/50 rounded-full"></div>
      </div>
    </section>
  );
};