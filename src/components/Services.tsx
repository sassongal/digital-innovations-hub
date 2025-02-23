
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  Smartphone, 
  Palette, 
  LineChart, 
  QrCode,
  Camera,
  CheckCircle2
} from 'lucide-react';

const services = [
  {
    title: "כרטיסי ביקור דיגיטליים",
    description: "חוויה רב-ממדית המשלבת את המותג שלך באופן חלק ומרשים. כרטיסי הביקור הדיגיטליים שלנו מעוצבים בקפידה להעניק חוויית משתמש מקצועית עם אפשרויות התאמה אישית בלתי מוגבלות.",
    icon: Smartphone,
    benefits: [
      "גישה מהירה דרך קוד QR או קישור",
      "עיצוב מותאם אישית של צבעים, לוגו ומסרים",
      "חוויית משתמש מתקדמת למובייל ודסקטופ"
    ],
    cta: "צור רושם ראשוני בלתי נשכח!",
    ctaButton: "הזמן כרטיס ביקור דיגיטלי"
  },
  {
    title: "מיתוג ועיצוב AI",
    description: "עיצוב לוגו וזהות מותג מותאמת אישית באמצעות טכנולוגיית AI מתקדמת. השירות שלנו כולל עיצובים מודרניים ומדויקים המותאמים לדרישות המותג שלך.",
    icon: Palette,
    benefits: [
      "זיהוי מותג חזק עם עיצוב ייחודי ומקצועי",
      "תהליך מהיר ויעיל בעזרת AI",
      "התאמה אישית מלאה לצרכי העסק"
    ],
    cta: "תן למותג שלך קול חזותי עוצמתי!",
    ctaButton: "הזמן מיתוג AI עכשיו"
  },
  {
    title: "קידום ממומן",
    description: "קמפיינים ממוקדים להשגת תוצאות מהירות. אנו מתמחים ביצירת קמפיינים מדויקים המחברים את המותג שלך עם הקהל הרלוונטי ביותר.",
    icon: LineChart,
    benefits: [
      "פרסום במגוון פלטפורמות וברשתות חברתיות",
      "פילוח מדויק לפי גיל, מיקום ותחומי עניין",
      "מעקב וניתוח מתקדם של אפקטיביות"
    ],
    cta: "הגדל את הנוכחות הדיגיטלית שלך!",
    ctaButton: "התחל קמפיין ממומן"
  },
  {
    title: "קודי QR חכמים",
    description: "קודי QR בעיצוב מותאם אישית המשקפים חדשנות ויוקרה. הקודים החכמים שלנו מספקים גישה מהירה למידע, סרטונים, כרטיסי ביקור דיגיטליים ועוד.",
    icon: QrCode,
    benefits: [
      "נוחות וגמישות עם סריקה מכל מכשיר",
      "שילוב עיצוב המותג בקוד QR",
      "מעקב אנליטי אחר נתוני סריקה"
    ],
    cta: "חבר את הלקוחות שלך לעולם הדיגיטלי!",
    ctaButton: "הזמן קוד QR חכם"
  },
  {
    title: "כרטיסי ביקור AR",
    description: "כרטיסי ביקור המשלבים מציאות רבודה עם עיצוב מותאם אישית, המציעים חוויית משתמש אינטראקטיבית ובלתי נשכחת.",
    icon: Camera,
    benefits: [
      "חוויה אינטראקטיבית עם סרטונים ותמונות תלת-ממד",
      "חדשנות ויוקרה שמשאירים רושם חזק",
      "התאמה מלאה למותג ולמסרים השיווקיים"
    ],
    cta: "הפוך את החוויה הדיגיטלית שלך לבלתי נשכחת!",
    ctaButton: "הזמן כרטיס AR עכשיו"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">השירותים שלנו</h2>
          <p className="text-white/80">פתרונות דיגיטליים מתקדמים לעסק שלך</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="glass-card hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
            >
              <CardHeader className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-white/80 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                      <span className="text-white/80">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <p className="font-semibold text-gradient">{service.cta}</p>
                  <Button className="button-gradient w-full">
                    {service.ctaButton}
                    <ArrowLeft className="w-4 h-4 mr-2" />
                  </Button>
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
