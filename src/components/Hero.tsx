const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(180_85%_45%/0.2),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(270_60%_50%/0.2),transparent_50%)]" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="max-w-5xl mx-auto animate-fade-in-up">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-primary-foreground bg-clip-text text-transparent">
              DeVaTi
            </span>
            <br />
            <span className="text-foreground">Technologies</span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed font-light">
            is a leading software and web development company specialized in crafting{" "}
            <span className="text-primary font-medium">cutting-edge software</span> that empowers businesses to thrive in the digital age
          </p>
          
          
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
