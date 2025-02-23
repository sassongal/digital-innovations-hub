
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ContactForm from '../components/ContactForm';
import { Card } from "@/components/ui/card";
import { QuoteIcon } from 'lucide-react';

const testimonials = [
  {
    name: "רון כהן",
    company: "טכנולוגיות עתיד בע״מ",
    content: "השירות של Querico Digital שינה את הדרך שבה אנחנו מתקשרים עם לקוחות. כרטיסי הביקור הדיגיטליים שלנו מרשימים כל לקוח חדש.",
  },
  {
    name: "מיכל לוי",
    company: "אינוביישן סולושנס",
    content: "המיתוג החדש שעוצב באמצעות AI נתן לנו בידול משמעותי בשוק. התוצאות היו מעבר לציפיות שלנו.",
  },
  {
    name: "דוד ישראלי",
    company: "חדשנות טק",
    content: "הקמפיין הממומן שQuerico Digital ניהלו עבורנו הביא תוצאות מדהימות. ROI מרשים ולקוחות איכותיים.",
  },
];

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      
      {/* Testimonials Section */}
      <section className="py-24 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">לקוחות מספרים</h2>
            <p className="text-white/80">מה אומרים עלינו לקוחות מרוצים</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass-card p-6">
                <QuoteIcon className="w-8 h-8 text-primary mb-4" />
                <p className="text-white/80 mb-4">{testimonial.content}</p>
                <div className="mt-auto">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-primary text-sm">{testimonial.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">צור קשר</h2>
              <p className="text-white/80">מלא את הטופס ונחזור אליך בהקדם</p>
            </div>
            <Card className="glass-card p-8">
              <ContactForm />
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
