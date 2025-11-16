import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Naxshatraa AI helped us automate our marketing reports — saving us 40+ hours a month!",
      author: "CEO, EcomGrowth",
      role: "E-Commerce Leader",
    },
    {
      quote: "Their voice AI agent transformed our customer support! Response times dropped by 70%.",
      author: "Founder, HealthSync",
      role: "Healthcare Platform",
    },
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Client <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how we've helped businesses transform with AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <Card
              key={idx}
              className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-lg text-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
