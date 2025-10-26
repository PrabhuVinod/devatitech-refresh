import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Smartphone, Building2, ShoppingBag, Heart, TrendingUp } from "lucide-react";

const domains = [
  { icon: Car, title: "Automotive", color: "text-blue-400" },
  { icon: Smartphone, title: "Consumer Electronics", color: "text-purple-400" },
  { icon: Building2, title: "Enterprise", color: "text-cyan-400" },
  { icon: ShoppingBag, title: "Retail", color: "text-pink-400" },
  { icon: Heart, title: "Healthcare", color: "text-red-400" },
  { icon: TrendingUp, title: "Finance", color: "text-green-400" }
];

const Domains = () => {
  return (
    <section id="domains" className="py-24 relative bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Industry <span className="text-primary">Domains</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We have successfully served clients across a diverse spectrum of industries. Our experience 
            enables us to develop solutions that specifically address industry-related challenges and opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
          {domains.map((domain, index) => (
            <Card 
              key={domain.title}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-2 group text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-3">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-all">
                  <domain.icon className={`h-8 w-8 ${domain.color}`} />
                </div>
              </CardHeader>
              <CardContent className="pb-6">
                <CardTitle className="text-sm font-semibold">{domain.title}</CardTitle>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Domains;
