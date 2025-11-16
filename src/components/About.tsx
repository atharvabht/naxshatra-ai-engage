import { CheckCircle2 } from "lucide-react";

const About = () => {
  const features = [
    "AI-First Mindset — we think automation first",
    "Modular Solutions — scale as you grow",
    "Multilingual Voice & Chat (English, Hindi, Marathi)",
    "Future-Ready for 2025+ AI Economy",
    "Affordable for Startups, Powerful for Enterprises",
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 gradient-accent opacity-5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Naxshatraa AI</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Naxshatraa AI is a new-age technology company that builds intelligent systems to automate, 
              optimize, and accelerate business growth. We combine the power of AI Automation, Digital 
              Marketing, and Next-Gen Web Experiences to make your business future-ready.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">Why Choose Us</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                {features.slice(0, 3).map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 animate-fade-in"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {features.slice(3).map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 animate-fade-in"
                    style={{ animationDelay: `${(idx + 3) * 0.1}s` }}
                  >
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
