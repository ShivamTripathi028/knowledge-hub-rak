import { Search, User, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  isEmployee?: boolean;
}

export const Header = ({ isEmployee = false }: HeaderProps) => {
  const location = useLocation();
  
  const navLinks = isEmployee 
    ? []
    : [
        { name: "Home", path: "/" },
        { name: "Categories", path: "/categories" },
        { name: "About", path: "/about" },
      ];

  return (
    <header className={`sticky top-0 z-50 border-b ${
      isEmployee 
        ? "bg-primary text-primary-foreground shadow-elevated" 
        : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to={isEmployee ? "/dashboard" : "/"} className="flex items-center space-x-2">
            <div className={`text-2xl font-bold font-poppins ${
              isEmployee ? "text-primary-foreground" : "text-primary"
            }`}>
              📚 BookStack
            </div>
          </Link>

          {/* Navigation - Public only */}
          {!isEmployee && (
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === link.path
                      ? "text-primary border-b-2 border-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          )}

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {!isEmployee ? (
              <>
                <Button variant="ghost" size="icon" className="hover:bg-muted">
                  <Search className="h-4 w-4" />
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link to="/login">Staff Login</Link>
                </Button>
              </>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="hover:bg-primary/20 text-primary-foreground">
                    <User className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};