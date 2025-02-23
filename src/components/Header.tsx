"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    if (isHomePage) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (isHomePage) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isHomePage]);

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
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            {!isHomePage ? (
              <>
                <Link href="/">
                  <Button variant="logo">בית</Button>
                </Link>
                <a href="tel:09-773-4300" className="hidden md:flex items-center gap-2 font-bold">
                  <Phone className="h-4 w-4" />
                  <span dir="ltr">054-761-1046</span>
                </a>
              </>
            ) : (
              <>
                <Button variant="outline" onClick={handleContactScroll}>
                  צרו קשר
                </Button>
                <a href="tel:09-773-4300" className="hidden md:flex items-center gap-2 font-bold">
                  <Phone className="h-4 w-4" />
                  <span dir="ltr">054-761-1046</span>
                </a>
              </>
            )}
          </div>
          <Link href="/" className="text-2xl font-bold">
            LOGO
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;