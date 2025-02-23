"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "כמה זמן נמשך קורס האיפור הבסיסי?",
    answer: "קורס האיפור הבסיסי נמשך 4 שבועות, עם מפגשים פעמיים בשבוע.",
  },
  {
    question: "האם אני צריכה ציוד משלי?",
    answer: "כן, תצטרכי להביא ערכת איפור בסיסית. נשלח לך רשימה מפורטת לאחר ההרשמה.",
  },
  {
    question: "האם יש אפשרות לקורסים מקוונים?",
    answer: "כרגע אנחנו מציעים רק קורסים פרונטליים, אבל אנחנו שוקלים להוסיף אופציות מקוונות בעתיד.",
  },
  {
    question: "מה המדיניות לגבי החזרים?",
    answer: "ניתן לבטל את ההרשמה עד שבוע לפני תחילת הקורס ולקבל החזר מלא. לאחר מכן, ההחזר יהיה חלקי.",
  },
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

