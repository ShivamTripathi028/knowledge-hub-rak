import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  href: string;
  isInternal?: boolean;
}

export const ArticleCard = ({ title, excerpt, category, date, href, isInternal = false }: ArticleCardProps) => {
  return (
    <div className="p-6 rounded-lg border border-border bg-card hover:shadow-card transition-all duration-300 group">
      <div className="space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-xs font-medium px-2 py-1 rounded-full ${
              isInternal 
                ? "bg-accent/10 text-accent" 
                : "bg-primary/10 text-primary"
            }`}>
              {category}
            </span>
            <div className="flex items-center text-xs text-muted-foreground">
              <Calendar className="h-3 w-3 mr-1" />
              {date}
            </div>
          </div>
          <h3 className="font-semibold font-poppins text-lg text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
        </div>
        
        <p className="text-muted-foreground leading-relaxed">
          {excerpt}
        </p>
        
        <div className="pt-2">
          <Button asChild variant="ghost" className="p-0 h-auto font-medium text-primary hover:text-primary/80">
            <Link to={href} className="flex items-center gap-1">
              Read More
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};