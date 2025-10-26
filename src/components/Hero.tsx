const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(180_85%_45%/0.2),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(270_60%_50%/0.2),transparent_50%)]" />
      {/* Grid overlay with animated currents - sits above gradients but behind content */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="gridPattern" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M80 0 H0 V80" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            </pattern>
            <linearGradient id="currentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(56,189,248,0.9)" />
              <stop offset="50%" stopColor="rgba(168,85,247,0.9)" />
              <stop offset="100%" stopColor="rgba(99,102,241,0.9)" />
            </linearGradient>
          </defs>

          {/* tiled grid */}
          <rect width="100%" height="100%" fill="url(#gridPattern)" />

          {/* soft vignette to blend with background */}
          <rect width="100%" height="100%" fill="black" opacity="0.02" />

          {/* animated current paths */}
          <g className="grid-currents" stroke="url(#currentGradient)" strokeWidth="2" fill="none" strokeLinecap="round">
            <path d="M-300 200 C 100 150, 300 250, 700 200 S 1200 150, 1600 200" className="flow flow-1" />
            <path d="M-200 360 C 100 310, 400 420, 900 360 S 1500 300, 1700 360" className="flow flow-2" />
            <path d="M-400 520 C 150 470, 500 580, 1100 520 S 1600 460, 2000 520" className="flow flow-3" />
          </g>
        </svg>

        {/* Inline styles for animations (kept local to component) */}
        <style>{`
          .grid-currents .flow {
            stroke-dasharray: 300 1200;
            stroke-dashoffset: 0;
            opacity: 0.85;
            mix-blend-mode: screen;
            filter: drop-shadow(0 4px 18px rgba(99,102,241,0.22));
            transform-origin: center;
            will-change: stroke-dashoffset, opacity;
          }

          .grid-currents .flow-1 {
            animation: flow1 6s linear infinite;
            opacity: 0.95;
          }
          .grid-currents .flow-2 {
            animation: flow2 8s linear infinite;
            opacity: 0.75;
          }
          .grid-currents .flow-3 {
            animation: flow3 10s linear infinite;
            opacity: 0.65;
          }

          @keyframes flow1 {
            0% { stroke-dashoffset: 0; opacity: 0.6; }
            50% { opacity: 1; }
            100% { stroke-dashoffset: -1500; opacity: 0.6; }
          }
          @keyframes flow2 {
            0% { stroke-dashoffset: 0; opacity: 0.5; }
            50% { opacity: 0.9; }
            100% { stroke-dashoffset: -1800; opacity: 0.5; }
          }
          @keyframes flow3 {
            0% { stroke-dashoffset: 0; opacity: 0.4; }
            50% { opacity: 0.8; }
            100% { stroke-dashoffset: -2200; opacity: 0.4; }
          }
        `}</style>
      </div>
      
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
