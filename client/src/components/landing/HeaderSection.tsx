import Logo from "@/assets/PRBALOGO.svg"
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Officers", href: "#officers" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "News", href: "#news" },
  { label: "Contact", href: "#contact" },
];

// Height of the fixed header (h-16 = 64px mobile, md:h-20 = 80px desktop)
// used to offset the scroll so the target section isn't hidden underneath it.
const HEADER_OFFSET = {
  mobile: 64,
  desktop: 80,
};

export function HeaderSection() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const targetId = href.replace("#", "");
    const target = document.getElementById(targetId);
    if (!target) return;

    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    const offset = isDesktop ? HEADER_OFFSET.desktop : HEADER_OFFSET.mobile;

    const targetPosition =
      target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsOpen(false);
    scrollToSection(href);
    // Keep the URL hash in sync without triggering the browser's
    // default (instant) jump-to-anchor behavior.
    window.history.pushState(null, "", href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2"
            onClick={(e) => handleNavClick(e, "#home")}
          >
            <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center">
             <img src={Logo} alt="PRBA Logo" />
             </div>
           
            <span className="font-display text-2xl text-foreground hidden sm:block">
              Philippine <span className="text-primary">Roll Ball Association</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/login">
              <Button className="gradient-gold text-accent-foreground font-semibold shadow-gold hover:opacity-90 transition-opacity">
                Login
              </Button>
            </Link>
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
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
              <Link to="/login">
                <Button className="gradient-gold text-accent-foreground font-semibold shadow-gold w-full mt-2">
                  Login
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}