
import React from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabase = createClient(
  'https://lknydwpltwctvlzzjgwt.supabase.co',  // Your Supabase project URL
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxrbnlkd3BsdHdjdHZsenpqZ3d0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4NjY5MjQsImV4cCI6MjAyMzQ0MjkyNH0.L1UJ7e5jtZSWNTE7gMGInmicPh0HgC3qzTeRWo4wJr4'  // Your public anon key
);

const formSchema = z.object({
  name: z.string().min(2, { message: "נדרש שם מלא" }),
  company: z.string().min(2, { message: "נדרש שם חברה" }),
  email: z.string().email({ message: "נדרשת כתובת אימייל תקינה" }),
  phone: z.string().min(9, { message: "נדרש מספר טלפון תקין" }),
  message: z.string().min(10, { message: "נדרשת הודעה של לפחות 10 תווים" }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([data]);

      if (error) throw error;

      toast({
        title: "הטופס נשלח בהצלחה",
        description: "נציג שלנו יצור איתך קשר בהקדם",
      });

      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        variant: "destructive",
        title: "שגיאה בשליחת הטופס",
        description: "אנא נסה שנית מאוחר יותר",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>שם מלא</FormLabel>
              <FormControl>
                <Input placeholder="הכנס את שמך המלא" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>שם החברה</FormLabel>
              <FormControl>
                <Input placeholder="הכנס את שם החברה" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>אימייל</FormLabel>
              <FormControl>
                <Input type="email" placeholder="your@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>טלפון</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="050-0000000" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>הודעה</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="כתוב את הודעתך כאן..."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full button-gradient">
          שלח טופס
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
