import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent('السلام عليكم، أريد الاستفسار عن خدماتكم الأكاديمية');
    const whatsappUrl = `https://wa.me/966XXXXXXXXX?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div 
      onClick={openWhatsApp}
      className="fixed bottom-6 left-6 z-50 cursor-pointer group"
    >
      {/* Pulse rings */}
      <div className="absolute inset-0 rounded-full whatsapp-gradient pulse-ring"></div>
      <div className="absolute inset-0 rounded-full whatsapp-gradient pulse-ring" style={{ animationDelay: '1s' }}></div>
      
      {/* Main button */}
      <div className="relative whatsapp-gradient text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-all duration-300 floating-animation shine-effect">
        <div className="flex items-center gap-3">
          <MessageCircle className="w-7 h-7" />
          <div className="hidden sm:block">
            <div className="text-sm font-bold">تواصل معنا</div>
            <div className="text-xs opacity-90">متاحون 24/7</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppFloat;

