import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-knowledge.jpg";

export const HeroSection = () => {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-background to-muted overflow-hidden">
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Hero Content */}
          <div className="mb-6 md:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-foreground mb-4 md:mb-6 leading-tight">
              How can we{" "}
              <span className="text-primary">help you</span>{" "}
              today?
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
              Search our comprehensive knowledge base for answers, guides, and solutions to all your questions.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-6 md:mb-8 px-4">
            <div className="relative">
              <Button 
                variant="search" 
                size="search" 
                className="w-full shadow-hero border-0 bg-card text-muted-foreground text-sm sm:text-base"
              >
                <Search className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 text-muted-foreground" />
                <span className="hidden sm:inline">Search for articles, guides, FAQs...</span>
                <span className="sm:hidden">Search...</span>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-8 md:mt-12 px-4">
            <img 
              src={heroImage} 
              alt="Knowledge sharing and collaboration" 
              className="mx-auto rounded-lg shadow-hero max-w-full h-auto"
            />
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-4 sm:top-10 left-4 sm:left-10 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 bg-primary rounded-full"></div>
        <div className="absolute bottom-4 sm:bottom-10 right-4 sm:right-10 w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 bg-accent rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 bg-primary/50 rounded-full"></div>
      </div>
    </section>
  );
};