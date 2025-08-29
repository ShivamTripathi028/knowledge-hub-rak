import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface DashboardCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  items?: string[];
  href?: string;
  action?: string;
}

export const DashboardCard = ({ 
  icon: Icon, 
  title, 
  description, 
  items = [], 
  href, 
  action = "View All" 
}: DashboardCardProps) => {
  return (
    <div className="p-6 rounded-lg border border-border bg-card hover:shadow-card transition-all duration-300">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-accent/10">
            <Icon className="h-5 w-5 text-accent" />
          </div>
          <h3 className="font-semibold font-poppins text-lg text-foreground">
            {title}
          </h3>
        </div>
        
        <p className="text-muted-foreground text-sm">
          {description}
        </p>
        
        {items.length > 0 && (
          <div className="space-y-2">
            {items.slice(0, 3).map((item, index) => (
              <div key={index} className="flex items-center text-sm text-foreground">
                <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                {item}
              </div>
            ))}
          </div>
        )}
        
        {href && (
          <div className="pt-2">
            <Link 
              to={href} 
              className="text-sm font-medium text-accent hover:text-accent/80 transition-colors"
            >
              {action} →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};