import Logo from "@/assets/PRBALOGO.svg"
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";


const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Officers", href: "#officers" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "News", href: "#news" },
  { label: "Contact", href: "#contact" },
  { label: "login", href: "/login" },
];

export function HeaderSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center">
             <img src={Logo} alt="PRBA Logo" />
             </div>
           
            <span className="font-display text-2xl text-foreground hidden sm:block">
              Philippine <span className="text-primary">Rollball Federation</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="gradient-gold text-accent-foreground font-semibold shadow-gold hover:opacity-90 transition-opacity">
              Join Us
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button className="gradient-gold text-accent-foreground font-semibold shadow-gold w-full mt-2">
                Join Us
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
