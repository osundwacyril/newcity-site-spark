import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/newcity-logo-main.jpg";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Properties", href: "/properties" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      {/* Top bar with contact info */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-end items-center gap-6 text-sm">
          <a href="tel:+254742498498" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">+254742 498 498</span>
          </a>
          <a href="mailto:info@newcitylands.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Mail className="h-4 w-4" />
            <span className="hidden sm:inline">info@newcitylands.com</span>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group mr-12">
            <img 
              src={logo} 
              alt="New City Real Estate Logo" 
              className="h-28 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.href.startsWith('/') ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-foreground hover:text-accent-red font-medium transition-all hover:drop-shadow-[var(--shadow-red-glow)]"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground hover:text-accent-red font-medium transition-all hover:drop-shadow-[var(--shadow-red-glow)]"
                >
                  {link.name}
                </a>
              )
            ))}
            <Link to="/landing">
              <Button variant="default" size="default" className="ml-4">
                Book Land
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-accent rounded-md transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                link.href.startsWith('/') ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-foreground hover:text-accent-red font-medium transition-all py-2 hover:drop-shadow-[var(--shadow-red-glow)]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-foreground hover:text-accent-red font-medium transition-all py-2 hover:drop-shadow-[var(--shadow-red-glow)]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                )
              ))}
              <Link to="/landing" onClick={() => setIsMenuOpen(false)}>
                <Button variant="default" size="default" className="w-full mt-2">
                  Book Land
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
