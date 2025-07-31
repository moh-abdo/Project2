import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, GraduationCap, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'الرئيسية' },
    { href: '#services', label: 'الخدمات' },
    { href: '#about', label: 'من نحن' },
    { href: '#portfolio', label: 'أعمالنا' },
    { href: '#testimonials', label: 'آراء العملاء' },
    { href: '#contact', label: 'اتصل بنا' },
  ];

  const openWhatsApp = () => {
    const message = encodeURIComponent('السلام عليكم، أريد الاستفسار عن خدماتكم الأكاديمية');
    const whatsappUrl = `https://wa.me/966XXXXXXXXX?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-blue-900/95 backdrop-blur-lg shadow-lg py-2' 
        : 'bg-blue-900/90 backdrop-blur-md py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-blue-900" />
            </div>
            <div className="text-white">
              <h2 className="text-xl font-bold text-gradient">الثقة</h2>
              <span className="text-sm opacity-90">للخدمات الطلابية</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link text-white hover:text-yellow-400 px-4 py-2 rounded-lg transition-all duration-300 font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              onClick={openWhatsApp}
              className="secondary-gradient text-white hover:scale-105 transition-transform duration-300 font-bold"
            >
              <MessageCircle className="w-4 h-4 ml-2" />
              احصل على عرض سعر
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/20">
            <div className="flex flex-col gap-2 mt-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-white hover:text-yellow-400 px-4 py-2 rounded-lg transition-colors duration-300 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button 
                onClick={openWhatsApp}
                className="secondary-gradient text-white mt-4 font-bold"
              >
                <MessageCircle className="w-4 h-4 ml-2" />
                احصل على عرض سعر
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

