
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen pt-24 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-20" />
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto animate-float">
          <span className="glass-card px-4 py-2 rounded-full text-sm font-medium text-primary">
            פתרונות דיגיטליים מתקדמים
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            פתרונות דיגיטליים מתקדמים
            <span className="text-gradient"> שמבליטים את המותג שלך</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            עיצוב כרטיסי ביקור דיגיטליים, מיתוג באמצעות AI, וקידום ממומן – הכל במקום אחד
          </p>
          <Button className="button-gradient text-lg px-8 py-6 rounded-full">
            קבלו הצעת מחיר בהתאמה אישית
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
