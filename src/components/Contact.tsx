"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000); // Message disappears after 3 seconds
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="relative container mx-auto px-6 py-16 bg-gradient-to-b from-gray-50 to-white min-h-screen overflow-hidden">
      {/* Paint Splash Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Pink Splash */}
        <div className="absolute top-10 -left-20 w-64 h-64 bg-primary/30 rounded-full mix-blend-multiply blur-3xl transform rotate-12"></div>
        {/* Purple Splash */}
        <div className="absolute bottom-20 -right-16 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply blur-3xl transform -rotate-6"></div>
        {/* Blue Splash */}
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-primary/20 rounded-full mix-blend-multiply blur-2xl transform rotate-45"></div>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative text-5xl font-bold mb-12 text-center text-gray-900 after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-primary after:rounded z-10"
      >
        צור קשר
      </motion.h1>

      <div className="relative max-w-lg mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <Card className="shadow-lg border-none bg-white/95 backdrop-blur-sm">
            <CardHeader className="pb-8">
              <CardTitle className="text-2xl font-semibold text-gray-800">
                השאירו פרטים
              </CardTitle>
              <p className="text-gray-500">נחזור אליכם בהקדם האפשרי</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="grid w-full items-center gap-6">
                  <div className="flex flex-col space-y-2">
                    <Label htmlFor="name" className="text-gray-700 font-medium">
                      שם מלא
                    </Label>
                    <Input
                      id="name"
                      placeholder="הכנסי את שמך המלא"
                      value={formData.name}
                      onChange={handleChange}
                      className="focus:ring-2 focus:ring-primary/50 border-gray-300"
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <Label htmlFor="email" className="text-gray-700 font-medium">
                      אימייל
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="הכנסי את כתובת האימייל שלך"
                      value={formData.email}
                      onChange={handleChange}
                      className="focus:ring-2 focus:ring-primary/50 border-gray-300"
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <Label htmlFor="message" className="text-gray-700 font-medium">
                      הודעה
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="הכנסי את הודעתך כאן"
                      value={formData.message}
                      onChange={handleChange}
                      className="min-h-[120px] focus:ring-2 focus:ring-primary/50 border-gray-300"
                    />
                  </div>
                </div>
                <Button
                  variant="logo"
                  type="submit"
                  className="w-full mt-6 bg-primary hover:bg-primary/90 transition-colors duration-300"
                >
                  שלח הודעה
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Toast Notification */}
      {isSubmitted && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 z-50"
        >
          <span>✓</span>
          <span>ההודעה נשלחה בהצלחה!</span>
        </motion.div>
      )}
    </div>
  );
}