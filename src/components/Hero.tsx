import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background z-10" />
        <img
          src={heroBg}
          alt="AI Technology Background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-20">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-6 animate-scale-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm text-muted-foreground">AI-First Technology Company</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Empowering Businesses through{" "}
            <span className="text-gradient">AI & Automation</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            From startups to enterprises — we help you save time, reduce costs, and grow faster with intelligent AI systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
              Get a Demo
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-card">
              <MessageSquare className="mr-2 h-4 w-4" />
              Talk to an Expert
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
            {[
              { value: "90%", label: "Reduction in manual data entry" },
              { value: "3×", label: "Faster customer response time" },
              { value: "25%", label: "Higher lead conversion rates" },
            ].map((stat, idx) => (
              <div key={idx} className="animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative gradient orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: "1s" }} />
    </section>
  );
};

export default Hero;
