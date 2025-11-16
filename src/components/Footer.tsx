import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: ["About Us", "Services", "Industries", "Contact"],
    Services: ["AI Automation", "Digital Marketing", "SEO/GEO", "Web Development"],
    Resources: ["Blog", "Case Studies", "Documentation", "Support"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-card/30 backdrop-blur border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold text-gradient mb-4">Naxshatraa AI</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Empowering businesses through AI & Automation
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-lg bg-background/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Naxshatraa AI. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with ❤️ for the AI Economy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
