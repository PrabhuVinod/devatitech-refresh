import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Smartphone, Palette } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "Our Center of Excellence will cover all technological aspects of digital transformation utilising no-/low-code platforms to deliver quick user value and developing fully custom solutions that emphasise unique value proposition."
  },
  {
    icon: Smartphone,
    title: "Application",
    description: "The high demand on applications requires careful process identifying targeted platform for product launch and choosing correct technologies. Our Center of Excellence will help to select the best suitable approach and is ready to build high-quality application."
  },
  {
    icon: Palette,
    title: "Design",
    description: "Lean user experience empowers product vision and detailed visual design optimises product development cycle. Our Center of Excellence is ready to offer designs that provide seamless guided user experience to end users."
  }
];

const CenterOfExcellence = () => {
  return (
    <section id="excellence" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Center of <span className="text-primary">Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Center of Excellence (CoE), a dedicated hub that epitomizes our commitment to delivering 
            cutting-edge software development services. Elevate your business to new heights by tapping 
            into our CoE - your gateway to a world where technology empowers success.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors group-hover:animate-glow-pulse">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CenterOfExcellence;
