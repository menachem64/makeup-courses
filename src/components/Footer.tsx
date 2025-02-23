import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4 relative after:content-[''] after:absolute after:-bottom-2 after:right-0 after:w-12 after:h-1 after:bg-primary after:rounded">
              צרו קשר
            </h3>
            <div className="space-y-4 text-gray-200 font-light">
              <p className="flex items-center gap-3 group">
                <span className="text-primary transition-transform group-hover:scale-110">📞</span>
                <span dir="ltr" className="hover:text-primary transition-colors duration-200">
                  123-456-7890
                </span>
              </p>
              <p className="flex items-center gap-3 group">
                <span className="text-primary transition-transform group-hover:scale-110">✉️</span>
                <a 
                  href="mailto:info@example.com" 
                  className="hover:text-primary transition-colors duration-200"
                >
                  info@example.com
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4 relative after:content-[''] after:absolute after:-bottom-2 after:right-0 after:w-12 after:h-1 after:bg-primary after:rounded">
              קישורים מהירים
            </h3>
            <ul className="space-y-4 text-gray-200 font-light">
              <li>
                <Link 
                  href="/articles/makeup" 
                  className="group flex items-center gap-3 hover:text-primary transition-all duration-200"
                >
                  <span className="text-primary transition-transform group-hover:-translate-x-1">→</span>
                  <span>קורס איפור</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/articles/hairstyling" 
                  className="group flex items-center gap-3 hover:text-primary transition-all duration-200"
                >
                  <span className="text-primary transition-transform group-hover:-translate-x-1">→</span>
                  <span>קורס עיצוב שיער</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/portfolio" 
                  className="group flex items-center gap-3 hover:text-primary transition-all duration-200"
                >
                  <span className="text-primary transition-transform group-hover:-translate-x-1">→</span>
                  <span> גלריה</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className=" mt-16 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm tracking-wide">
          <p>
            © {new Date().getFullYear()} כל הזכויות שמורות.
          </p>
          <p className="text-sm">
           עיצוב ופיתוח על ידי 
          <a href="https://web-developer-ecru.vercel.app" className="text-primary-400 hover:underline mr-1">
            Mendy Sodakevitz
          </a>
        </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;