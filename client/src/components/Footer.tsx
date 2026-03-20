import logo from "../assets/PRBALOGO.svg";

import { Facebook, Youtube, Mail } from "lucide-react";

const footerLinks = {
  federation: [
    { label: "About Us", href: "#about" },
    { label: "Our Team", href: "#" },
    { label: "History", href: "#" },
    { label: "Partners", href: "#" },
  ],
  programs: [
    { label: "Youth Development", href: "#" },
    { label: "Coach Training", href: "#" },
    { label: "School Programs", href: "#" },
    { label: "Community Outreach", href: "#" },
  ],
  resources: [
    { label: "Rules & Regulations", href: "#" },
    { label: "Equipment Guide", href: "#" },
    { label: "Training Materials", href: "#" },
    { label: "FAQs", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="gradient-dark text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary-foreground/10">
               <img src={logo} alt="Philippine Rollball Logo" />
              </div>
              <div>
                <h3 className="font-display text-2xl">Philippine Rollball</h3>
                <p className="text-primary-foreground/60 text-sm">Official Federation</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              Promoting and developing the sport of rollball across the Philippines. 
              Join us in building a community of athletes, coaches, and enthusiasts.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/philippinerollballassociation" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.youtube.com/@PhilippineRollball" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="mailto:info@philippinerollball.org" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="font-display text-lg mb-4">Federation</h4>
            <ul className="space-y-3">
              {footerLinks.federation.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4">Programs</h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>© 2026 Philippine Rollball Federation. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
