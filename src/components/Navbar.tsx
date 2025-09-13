import { Link, useLocation } from "react-router-dom";
import { Trophy, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Tech Stack", path: "/tech-stack" },
    { name: "Impact", path: "/impact" },
    { name: "Team", path: "/team" },
    { name: "Revenue", path: "/revenue" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Trophy className="w-8 h-8 text-sports-blue" />
            <span className="text-xl font-bold bg-gradient-to-r from-sports-blue to-sports-orange bg-clip-text text-transparent">
              Team Infinity
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-sports-blue ${
                  isActive(item.path)
                    ? "text-sports-blue"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Badge variant="secondary" className="bg-sports-blue/20 text-sports-blue border-sports-blue/30">
              Hackathon2.0 2024
            </Badge>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-sports-blue ${
                    isActive(item.path)
                      ? "text-sports-blue"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Badge variant="secondary" className="bg-sports-blue/20 text-sports-blue border-sports-blue/30 w-fit">
                Hackathon2.0 2024
              </Badge>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;