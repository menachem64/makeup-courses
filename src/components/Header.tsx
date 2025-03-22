"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0); // לעקוב אחר אחוז הגלילה
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight; // מקסימום גלילה אפשרי בדף הנוכחי
      const scrollPercentage = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0; // חישוב אחוז הגלילה

      setIsScrolled(scrollTop > 0);
      setScrollProgress(Math.min(scrollPercentage, 100)); // מגביל ל-100%
    };

    // מופעל בכל דף, לא רק בדף הבית
    window.addEventListener("scroll", handleScroll);

    // עדכון ראשוני בעת טעינת הדף
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // הסרנו את התלות ב-isHomePage כדי שיפעל בכל דף

  const handleContactScroll = () => {
    if (isHomePage) {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push("/#contact"); // Navigate to homepage and scroll to contact
    }
  };

  const headerClasses = `fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
    isHomePage && !isScrolled
      ? "bg-transparent text-white"
      : "bg-white text-black shadow-md"
  }`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 py-4 relative">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            {!isHomePage ? (
              <>
                <Link href="/">
                  <Button variant="logo">בית</Button>
                </Link>
                <a href="tel:054-761-1046" className="hidden md:flex items-center gap-2 font-bold">
                  <Phone className="h-4 w-4" />
                  <span dir="ltr">053-622-0137</span>
                </a>
              </>
            ) : (
              <>
                <Button variant="outline" onClick={handleContactScroll}>
                  צרי קשר
                </Button>
                <a href="tel:054-761-1046" className="hidden md:flex items-center gap-2 font-bold">
                  <Phone className="h-4 w-4" />
                  <span dir="ltr">053-622-0137</span>
                </a>
              </>
            )}
          </div>
          <Link href="/" className="text-2xl font-bold">
            {/* <Image
              src="/logo.jpeg"
              alt="לוגו"
              width={50}
              height={50}
              className="cursor-pointer"
            /> */}
            Chaya LIPsker
          </Link>
        </nav>
        {/* Scroll Progress Bar */}
        <div
          className="absolute bottom-0 left-0 h-1 bg-primary duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  );
};

export default Header;