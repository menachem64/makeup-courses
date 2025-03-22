"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";

interface FeedbackFormProps {
  onSuccess?: () => void;
}

const schema = z.object({
  name: z.string().min(1, "שם הוא שדה חובה"),
  email: z.string().email("כתובת אימייל לא תקינה"),
  message: z.string().min(1, "הודעה היא שדה חובה"),
});

export default function Contact({ onSuccess }: FeedbackFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    text: string;
    type: "success" | "error" | null;
  }>({ text: "", type: null });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: { name: string; email: string; message: string }) => {
    setIsSubmitting(true);
    setStatusMessage({ text: "", type: null });

    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      const endpoint = "/api/send";
      const result = await fetch(endpoint, options);

      if (result.ok) {
        reset();
        setStatusMessage({ text: "ההודעה נשלחה בהצלחה!", type: "success" });
        setTimeout(() => {
          setStatusMessage({ text: "", type: null });
          onSuccess?.();
        }, 5000); // Message disappears after 5 seconds
      } else {
        setStatusMessage({ text: "שליחת ההודעה נכשלה. נסי שוב.", type: "error" });
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      setStatusMessage({ text: "שגיאה בעת שליחת ההודעה", type: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative container mx-auto px-6 py-16 bg-gradient-to-b from-gray-50 to-white min-h-screen overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 -left-20 w-64 h-64 bg-primary/30 rounded-full mix-blend-multiply blur-3xl transform rotate-12"></div>
        <div className="absolute bottom-20 -right-16 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply blur-3xl transform -rotate-6"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-primary/20 rounded-full mix-blend-multiply blur-2xl transform rotate-45"></div>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative text-5xl font-bold mb-12 text-center text-gray-900"
      >
        צרי קשר
      </motion.h1>

      <div className="relative max-w-lg mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <Card className="shadow-lg border-none bg-white/95 backdrop-blur-sm">
            <CardHeader className="pb-8">
              <CardTitle className="text-2xl font-semibold text-gray-800">השאירי פרטים</CardTitle>
              <p className="text-gray-500">נחזור אליך בהקדם האפשרי</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid w-full items-center gap-6">
                  <div className="flex flex-col space-y-2">
                    <Label htmlFor="name">שם מלא</Label>
                    <Input id="name" {...register("name")} />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                  </div>
                  <div className="flex flex-col space-y-2">
                    <Label htmlFor="email">אימייל</Label>
                    <Input id="email" {...register("email")} />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                  </div>
                  <div className="flex flex-col space-y-2">
                    <Label htmlFor="message">הודעה</Label>
                    <Textarea id="message" {...register("message")} />
                    {errors.message && (
                      <p className="text-red-500 text-sm">{errors.message.message}</p>
                    )}
                  </div>
                </div>

                {/* Status Message */}
                {statusMessage.text && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-4 text-center p-3 rounded-md ${
                      statusMessage.type === "success"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {statusMessage.text}
                  </motion.div>
                )}

                <Button
                  type="submit"
                  className="w-full mt-6 flex items-center justify-center text-white bg-primary hover:bg-primary-dark"
                  disabled={isSubmitting}
                >
                  {isSubmitting && <Loader2 className="mr-2 animate-spin" />}
                  שליחת הודעה
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}