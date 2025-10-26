const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-8 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-xl font-bold">
              <span className="text-primary">DeVaTi</span> Technologies
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Empowering businesses through technology
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} DeVaTi Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
