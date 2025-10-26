import { Globe, Users } from "lucide-react";

const GlobalReach = () => {
  return (
    <section id="global" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="animate-fade-in">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 animate-float">
              <Globe className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Serving <span className="text-primary">Clients</span> Worldwide
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Although headquartered in India, we've had the privilege of collaborating with clients from 
              across the globe, delivering software solutions to a worldwide audience.
            </p>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mb-6 animate-float" style={{ animationDelay: "0.5s" }}>
              <Users className="h-10 w-10 text-accent" />
            </div>
            <h3 className="text-3xl font-bold mb-6">
              Cultural <span className="text-accent">Sensitivity</span>
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our international experience has equipped us with the ability to navigate cultural nuances, 
              ensuring effective communication and the success of projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
