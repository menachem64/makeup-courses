"use client"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"
import Image from "next/image"

export function WhatsAppButton() {
  const phoneNumber = "+972536220137" // actual WhatsApp number
  const whatsappUrl = `https://wa.me/${phoneNumber}`

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 rounded-full p-3 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 z-20 bg-white flex items-center justify-center"
          >
              <Image src="/images/logoWhatsApp.png" alt="whatsapp" width={35} height={35} />
          </Link>
        </TooltipTrigger>
        <TooltipContent side="left" align="center" className="bg-purple-600 text-slate-100 rounded-full">
          <p >צור קשר בוואטסאפ</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
