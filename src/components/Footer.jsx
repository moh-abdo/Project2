import { Button } from '@/components/ui/button';
import { 
  GraduationCap, 
  MessageCircle, 
  Send, 
  Mail, 
  Phone, 
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent('السلام عليكم، أريد الاستفسار عن خدماتكم الأكاديمية');
    const whatsappUrl = `https://wa.me/966XXXXXXXXX?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const services = [
    'المشاريع والتكاليف',
    'الواجبات الجامعية',
    'حل اللابات',
    'الخرائط الذهنية',
    'السيرة الذاتية',
    'بحوث التخرج'
  ];

  const quickLinks = [
    { label: 'الرئيسية', href: '#home' },
    { label: 'الخدمات', href: '#services' },
    { label: 'من نحن', href: '#about' },
    { label: 'أعمالنا', href: '#portfolio' },
    { label: 'آراء العملاء', href: '#testimonials' },
    { label: 'اتصل بنا', href: '#contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-blue-900" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gradient">الثقة</h3>
                <span className="text-sm text-gray-400">للخدمات الطلابية</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              منصة الثقة للخدمات الطلابية المتكاملة - نقدم خدمات أكاديمية شاملة للطلاب بجودة عالية وأسعار تنافسية.
            </p>
            <div className="flex gap-3">
              <Button 
                onClick={openWhatsApp}
                className="whatsapp-gradient hover:scale-105 transition-transform duration-300"
              >
                <MessageCircle className="w-4 h-4 ml-2" />
                واتساب
              </Button>
              <Button 
                onClick={() => window.open('https://t.me/hhhhcfkkkeb', '_blank')}
                className="telegram-gradient hover:scale-105 transition-transform duration-300"
              >
                <Send className="w-4 h-4 ml-2" />
                تليجرام
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">خدماتنا</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">تواصل معنا</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <MessageCircle className="w-5 h-5 text-green-400" />
                <span>واتساب: 966XXXXXXXXX+</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Send className="w-5 h-5 text-blue-400" />
                <span>تليجرام: @hhhhcfkkkeb</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-red-400" />
                <span>info@thiqah-services.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span>المملكة العربية السعودية</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="font-semibold mb-3">تابعنا على</h5>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-400 rounded-full flex items-center justify-center transition-colors duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-center md:text-right">
              <p>&copy; 2024 الثقة للخدمات الطلابية. جميع الحقوق محفوظة.</p>
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-300">سياسة الخصوصية</a>
              <a href="#" className="hover:text-white transition-colors duration-300">شروط الاستخدام</a>
              <a href="#" className="hover:text-white transition-colors duration-300">اتفاقية الخدمة</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

