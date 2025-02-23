
import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 glass-card py-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gradient">Querico Digital</h1>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-white/80 hover:text-white transition-colors">שירותים</a>
          <a href="#about" className="text-white/80 hover:text-white transition-colors">אודות</a>
          <a href="#contact" className="text-white/80 hover:text-white transition-colors">צור קשר</a>
        </nav>
        <Button className="button-gradient">
          התחל עכשיו
        </Button>
      </div>
    </header>
  );
};

export default Header;
