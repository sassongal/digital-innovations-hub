
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Smartphone, Palette, LineChart, QrCode } from 'lucide-react';

const services = [
  {
    title: "כרטיסי ביקור דיגיטליים",
    description: "חווית מציאות רבודה שמבליטה את המותג שלך",
    icon: Smartphone,
  },
  {
    title: "מיתוג ועיצוב AI",
    description: "עיצוב לוגו מותאם אישית תוך שימוש בבינה מלאכותית",
    icon: Palette,
  },
  {
    title: "קידום ממומן",
    description: "קמפיינים ממומנים להשגת תוצאות מהירות וממוקדות",
    icon: LineChart,
  },
  {
    title: "קודי QR חכמים",
    description: "עיצוב ממותג שמשדר יוקרה וחדשנות",
    icon: QrCode,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">השירותים שלנו</h2>
          <p className="text-white/80">פתרונות דיגיטליים מתקדמים לעסק שלך</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="glass-card hover:scale-105 transition-transform duration-300 cursor-pointer">
              <CardHeader>
                <service.icon className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">{service.description}</p>
                <div className="flex items-center gap-2 mt-4 text-primary">
                  <span>למד עוד</span>
                  <ArrowLeft className="w-4 h-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
