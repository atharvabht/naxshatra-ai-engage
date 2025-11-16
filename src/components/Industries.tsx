import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Heart, Cloud, GraduationCap, Home, Package } from "lucide-react";

const Industries = () => {
  const industries = [
    { icon: ShoppingCart, name: "E-Commerce" },
    { icon: Heart, name: "Healthcare" },
    { icon: Cloud, name: "SaaS" },
    { icon: GraduationCap, name: "Education" },
    { icon: Home, name: "Real Estate" },
    { icon: Package, name: "D2C Brands" },
  ];

  return (
    <section id="industries" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Industries We <span className="text-gradient">Serve</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering AI-powered solutions across diverse sectors
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {industries.map((industry, idx) => (
            <Card
              key={idx}
              className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 bg-card/50 backdrop-blur animate-scale-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                <div className="mb-3 inline-flex p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <industry.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">
                  {industry.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
