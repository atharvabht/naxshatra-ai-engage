import { Card, CardContent } from "@/components/ui/card";
import { Bot, TrendingUp, Search, Globe, Smartphone } from "lucide-react";
import aiAutomationsImg from "@/assets/ai-automations.jpg";
import digitalMarketingImg from "@/assets/digital-marketing.jpg";
import seoGeoImg from "@/assets/seo-geo.jpg";
import websiteDevImg from "@/assets/website-development.jpg";
import mobileAppDevImg from "@/assets/mobile-app-dev.jpg";

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "AI Automations",
      description: "Transform manual operations into self-learning, smart systems that adapt and optimize.",
      image: aiAutomationsImg,
      alt: "AI automation system visual, adaptive neural workflows",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "AI-driven growth engines that boost engagement and ROI through intelligent campaigns.",
      image: digitalMarketingImg,
      alt: "digital marketing growth engine with analytics and campaign icons",
    },
    {
      icon: Search,
      title: "SEO (GEO)",
      description: "Get found not only on Google — but also inside AI tools like ChatGPT, Gemini & Perplexity.",
      image: seoGeoImg,
      alt: "geo-targeted SEO and AI search assistant map visualization",
    },
    {
      icon: Globe,
      title: "Website Development",
      description: "Modern, AI-powered websites that convert and adapt in real-time to user behavior.",
      image: websiteDevImg,
      alt: "modern website mockups and adaptive UI overlays",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Intelligent mobile experiences with chatbots, analytics & personalization built-in.",
      image: mobileAppDevImg,
      alt: "mobile app screens on dark phone mockups with chatbot and analytics",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Our Core <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive AI-powered services to transform your business operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, idx) => (
            <Card
              key={idx}
              className="group relative overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-card/50 backdrop-blur animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/45 to-background/65 group-hover:opacity-20 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6">
                <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-all duration-300 group-hover:-translate-y-1.5">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
