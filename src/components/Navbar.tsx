import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Industries", href: "#industries" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-primary/20 shadow-lg shadow-primary/10" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          <a 
            href="/" 
            aria-label="Homepage"
            className="logo-link group relative transition-all duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg opacity-0 group-hover:opacity-20 blur-lg transition-all duration-300" />
            <img 
              src={logo} 
              alt="Naxshatraa AI Technologies" 
              className="h-32 md:h-40 w-auto relative z-10 drop-shadow-lg"
              style={{ imageRendering: 'crisp-edges' }}
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <Button className="relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground transition-transform duration-300 hover:scale-110 hover:text-blue-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative text-sm font-medium text-muted-foreground hover:text-foreground hover:text-blue-500 transition-colors group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/30 w-full transition-all duration-300 transform hover:scale-105">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
