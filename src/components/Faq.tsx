"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "כמה זמן נמשך קורס?",
    answer: " האיפור וכן קורס עציוב שיער נמשך 4 שעות, עם.",
  },
  {
    question: "האם צריכים להביא ציוד ?",
    answer: "לא, כל החומרים והציוד יסופקו במהלך הקורס.",
  },
  {
    question: "האם ניתן להזמין קורס פרטי?",
    answer: "כן, ניתן להזמין קורס פרטי בתיאום מראש.",
  },
  {
    question: "איך ניתן להזמין קורס?",
    answer: "ניתן להזמין קורס דרך האתר או בטלפון.",
  }



]

export default function FAQ() {
  return (
    <div className="container mx-auto px-6 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        שאלות נפוצות
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  )
}

