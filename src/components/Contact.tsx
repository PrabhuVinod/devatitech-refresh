import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get in <span className="text-primary">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Reach out to us today to discuss how we can turn your software vision into reality
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <a 
              href="mailto:info@devatitechnologies.com"
              className="flex items-center justify-center gap-3 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
            >
              <Mail className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-lg">info@devatitechnologies.com</span>
            </a>
            
            <a 
              href="tel:+971544104929"
              className="flex items-center justify-center gap-3 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
            >
              <Phone className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-lg">+971 54 410 4929</span>
            </a>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-2xl font-semibold mb-6">Follow Us</h3>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full shadow-lg hover:shadow-glow transition-all duration-300 group"
              asChild
            >
              <a 
                href="https://www.linkedin.com/company/86044399" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="h-5 w-5" />
                Connect on LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
