import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Award } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Trust",
    description: "Clients entrust us to build software solutions. Delivering high-quality services, adhering to strategic roadmap and long-term vision. Commitment to clients' goals, full transparency in addressing challenges foster a long-term and trust-filled partnership."
  },
  {
    icon: Users,
    title: "Leadership",
    description: "Leadership mindset empowers us toward goals' accomplishment. Providing strategic insights, and adapting to changing clients' needs and market demand. Our focus is on collaboration, problem-solving, and innovation leads our clients to success."
  },
  {
    icon: Award,
    title: "Mastery",
    description: "Mastery signifies the highest level of our expertise. Excelling in various technologies, software development methodologies, and industry best practices. Our exceptionally talented engineers enable us to deliver outstanding results to our clients."
  }
];

const TLMValues = () => {
  return (
    <section id="values" className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary">DeVaTi</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Trust, Leadership, and Mastery form the pillars of shared success stories with our clients. 
            Trust serves as the foundation of long-term relationship; leadership guides the team towards 
            successful results, and mastery ensures a professional, the highest quality approach to deliver 
            value to our clients.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <Card 
              key={value.title}
              className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-elegant hover:-translate-y-2 group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl font-bold mb-4">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TLMValues;
