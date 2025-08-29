import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  count?: number;
}

export const CategoryCard = ({ icon: Icon, title, description, href, count }: CategoryCardProps) => {
  return (
    <Link to={href}>
      <div className="group p-4 sm:p-6 rounded-lg border border-border bg-card hover:shadow-elevated transition-all duration-300 hover:scale-105">
        <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
          <div className="p-2 sm:p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold font-poppins text-base sm:text-lg text-foreground mb-2">
              {title}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
            {count && (
              <p className="text-xs text-primary font-medium mt-2">
                {count} articles
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};