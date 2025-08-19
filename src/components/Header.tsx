import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const hotTubSeries = [
    { name: "Elite Class M Series™", href: "/series/m-series" },
    { name: "Luxury Class A Series™", href: "/series/a-series" },
    { name: "Comfort Class X Series™", href: "/series/x-series" },
    { name: "Performance Class Swim Series™", href: "/series/swim-series" },
    { name: "Stil Modern Class™", href: "/series/stil-series" },
  ];

  const navigation: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "Uw Voordeel", href: "/difference" },
    { name: "Over Ons", href: "/company" },
  ];

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/U-SPA.jpg"
              alt="U-Spa Logo"
              className="h-10 w-10 mr-3"
            />
           
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className="font-figtree text-foreground hover:text-muted-foreground transition-colors duration-200"
              >
                Home
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center font-figtree text-foreground hover:text-muted-foreground transition-colors duration-200">
                  Spa's
                  <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-card border-border z-50 min-w-[220px]">
                  {hotTubSeries.map((series) => (
                    <DropdownMenuItem key={series.name} asChild>
                      <Link to={series.href} className="w-full text-card-foreground">
                        {series.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              {navigation
                .filter((item) => item.name !== "Home")
                .map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="font-figtree text-foreground hover:text-muted-foreground transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
            </div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
              <Link
                to="/"
                className="block px-3 py-2 font-figtree text-foreground hover:text-muted-foreground transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <div className="px-3 py-2">
                <p className="font-figtree text-foreground font-semibold mb-2">Spa's</p>
                {hotTubSeries.map((series) => (
                  <Link
                    key={series.name}
                    to={series.href}
                    className="block text-card-foreground hover:text-primary transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {series.name}
                  </Link>
                ))}
              </div>
              {navigation
                .filter((item) => item.name !== "Home")
                .map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 font-figtree text-foreground hover:text-muted-foreground transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
