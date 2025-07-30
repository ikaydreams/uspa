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

  const hotTubSeries: NavItem[] = [
    { name: "Elite Class M Series™", href: "/series/m-series" },
    { name: "Luxury Class A Series™", href: "/series/a-series" },
    { name: "Comfort Class X Series™", href: "/series/x-series" },
    { name: "Performance Class Swim Series™", href: "/series/swim-series" },
  ];

  const navigation: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "Stores", href: "/stores" },
    { name: "Our Difference", href: "/difference" },
    { name: "Company", href: "/company" },
    { name: "Community", href: "/community" },
    { name: "Product Lines", href: "/products" },
    { name: "Series", href: "/series" },
  ];

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img 
              src="/lovable-uploads/2629847b-6255-416f-853b-864c3cc3b629.png" 
              alt="Uspa Logo" 
              className="h-10 w-10 mr-3"
            />
            <h1 className="text-2xl font-poppins font-bold text-foreground">Uspa</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="font-figtree text-foreground hover:text-muted-foreground transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Hot Tubs Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center font-figtree text-foreground hover:text-muted-foreground transition-colors duration-200">
                  Spa's
                  <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-card border-border z-50">
                  {hotTubSeries.map((series) => (
                    <DropdownMenuItem key={series.name}>
                      <Link to={series.href} className="w-full text-card-foreground">
                        {series.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Mobile menu button */}
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 font-figtree text-foreground hover:text-muted-foreground transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <p className="font-figtree text-foreground font-semibold mb-2">Hot Tubs</p>
                {hotTubSeries.map((series) => (
                  <Link
                    key={series.name}
                    to={series.href}
                    className="block px-3 py-1 font-figtree text-muted-foreground hover:text-foreground transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {series.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
