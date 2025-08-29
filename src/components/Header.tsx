import { Search, User, LogOut, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navLinks = isEmployee 
    ? []
    : [
        { name: "Home", path: "/" },
        { name: "Categories", path: "/categories" },
        { name: "About", path: "/about" },
      ];

  return (
    <>
      <header className={`sticky top-0 z-50 border-b ${
        isEmployee 
          ? "bg-primary text-primary-foreground shadow-elevated" 
          : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to={isEmployee ? "/dashboard" : "/"} className="flex items-center space-x-2">
              <div className={`text-xl md:text-2xl font-bold font-poppins ${
                isEmployee ? "text-primary-foreground" : "text-primary"
              }`}>
                Knowledge Hub
              </div>
            </Link>

            {/* Desktop Navigation - Public only */}
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
            <div className="flex items-center space-x-2 md:space-x-4">
              {!isEmployee ? (
                <>
                  <Button variant="ghost" size="icon" className="hover:bg-muted hidden sm:flex">
                    <Search className="h-4 w-4" />
                  </Button>
                  <Button asChild variant="outline" size="sm" className="text-xs md:text-sm px-2 md:px-4">
                    <Link to="/login">Staff Login</Link>
                  </Button>
                  {/* Mobile menu button */}
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="md:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  >
                    {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
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

      {/* Mobile Navigation Menu */}
      {!isEmployee && isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b shadow-elevated z-40">
          <div className="container mx-auto px-4 py-4">
            <nav className="space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block text-sm font-medium transition-colors py-2 ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2 border-t">
                <Button variant="ghost" className="w-full justify-start p-2 text-sm">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};