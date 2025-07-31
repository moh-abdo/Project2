import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MessageCircle, Send, Award, Users, Star, Clock, BookOpen, Lightbulb, Trophy, Rocket } from 'lucide-react';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    rating: 0,
    onTime: 0
  });

  useEffect(() => {
    // Animate counters
    const targets = {
      projects: 3500,
      clients: 2800,
      rating: 4.9,
      onTime: 98
    };

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = Object.keys(targets).map(key => {
      const target = targets[key];
      const increment = target / steps;
      let current = 0;

      return setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(intervals.find(i => i === interval));
        }
        
        setCounters(prev => ({
          ...prev,
          [key]: key === 'rating' ? current.toFixed(1) : Math.floor(current)
        }));
      }, stepDuration);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  const openWhatsApp = () => {
    const message = encodeURIComponent('السلام عليكم، أريد الاستفسار عن خدماتكم الأكاديمية');
    const whatsappUrl = `https://wa.me/966XXXXXXXXX?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const openTelegram = () => {
    window.open('https://t.me/hhhhcfkkkeb', '_blank');
  };

  const searchServices = () => {
    if (searchQuery.trim()) {
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const searchSuggestions = [
    { text: 'مشروع تخرج', icon: BookOpen },
    { text: 'واجب محاسبة', icon: BookOpen },
    { text: 'خريطة ذهنية', icon: Lightbulb },
    { text: 'سيرة ذاتية', icon: Users }
  ];

  const floatingElements = [
    { icon: BookOpen, position: 'top-[15%] left-[10%]', delay: '0s' },
    { icon: Lightbulb, position: 'top-[25%] left-[85%]', delay: '1s' },
    { icon: Star, position: 'top-[60%] left-[15%]', delay: '2s' },
    { icon: Trophy, position: 'top-[70%] left-[80%]', delay: '3s' },
    { icon: Rocket, position: 'top-[40%] left-[90%]', delay: '4s' }
  ];

  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 particles-bg opacity-30"></div>
      
      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <div
          key={index}
          className={`absolute w-16 h-16 rounded-full glass-effect flex items-center justify-center text-yellow-400 floating-animation ${element.position}`}
          style={{ animationDelay: element.delay }}
        >
          <element.icon className="w-6 h-6" />
        </div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
        {/* Hero Badge */}
        <div className="inline-flex items-center gap-2 glass-effect px-6 py-3 rounded-full mb-8 fade-in-up">
          <Award className="w-5 h-5 text-yellow-400" />
          <span className="text-yellow-400 font-semibold">الأول في الخدمات الطلابية</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl font-black mb-6 fade-in-up">
          <span className="block text-gradient hero-title">الثقة للخدمات الطلابية</span>
          <span className="block text-2xl md:text-3xl font-semibold opacity-90 mt-2">
            شريكك الأكاديمي الموثوق
          </span>
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl opacity-95 mb-12 max-w-4xl mx-auto leading-relaxed fade-in-up">
          نقدم حلولاً أكاديمية شاملة ومتميزة للطلاب الجامعيين بجودة عالية وأسعار تنافسية. 
          فريق من الخبراء المتخصصين يضمن لك التفوق الأكاديمي.
        </p>

        {/* Search Container */}
        <div className="max-w-3xl mx-auto mb-16 fade-in-up">
          <div className="relative mb-6">
            <div className="flex glass-effect rounded-2xl p-2">
              <div className="flex-1 flex items-center">
                <Search className="w-5 h-5 text-gray-400 mr-4 ml-2" />
                <Input
                  type="text"
                  placeholder="ابحث عن خدمتك... مثال: مشروع تخرج، واجب محاسبة، خريطة ذهنية"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border-0 bg-transparent text-white placeholder:text-gray-300 text-lg"
                  onKeyPress={(e) => e.key === 'Enter' && searchServices()}
                />
              </div>
              <Button 
                onClick={searchServices}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold"
              >
                بحث
              </Button>
            </div>
          </div>

          {/* Search Suggestions */}
          <div className="flex flex-wrap justify-center gap-3">
            {searchSuggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => setSearchQuery(suggestion.text)}
                className="glass-effect px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-2 text-sm font-medium"
              >
                <suggestion.icon className="w-4 h-4" />
                {suggestion.text}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Container */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto">
          <div className="glass-effect p-6 rounded-2xl hover-lift text-center">
            <div className="text-yellow-400 text-3xl mb-3">
              <BookOpen className="w-8 h-8 mx-auto" />
            </div>
            <h3 className="stats-counter text-white mb-2">{counters.projects}</h3>
            <p className="text-gray-300 font-semibold">مشروع مكتمل</p>
            <span className="text-yellow-400 text-sm">+25% هذا العام</span>
          </div>

          <div className="glass-effect p-6 rounded-2xl hover-lift text-center">
            <div className="text-yellow-400 text-3xl mb-3">
              <Users className="w-8 h-8 mx-auto" />
            </div>
            <h3 className="stats-counter text-white mb-2">{counters.clients}</h3>
            <p className="text-gray-300 font-semibold">طالب راضي</p>
            <span className="text-yellow-400 text-sm">+30% هذا العام</span>
          </div>

          <div className="glass-effect p-6 rounded-2xl hover-lift text-center">
            <div className="text-yellow-400 text-3xl mb-3">
              <Star className="w-8 h-8 mx-auto" />
            </div>
            <h3 className="stats-counter text-white mb-2">{counters.rating}/5</h3>
            <p className="text-gray-300 font-semibold">متوسط التقييم</p>
            <span className="text-yellow-400 text-sm">تقييم ممتاز</span>
          </div>

          <div className="glass-effect p-6 rounded-2xl hover-lift text-center">
            <div className="text-yellow-400 text-3xl mb-3">
              <Clock className="w-8 h-8 mx-auto" />
            </div>
            <h3 className="stats-counter text-white mb-2">{counters.onTime}%</h3>
            <p className="text-gray-300 font-semibold">التسليم في الوقت</p>
            <span className="text-yellow-400 text-sm">دقة عالية</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <Button 
            onClick={openWhatsApp}
            className="whatsapp-gradient text-white px-8 py-4 text-lg font-bold rounded-2xl hover-lift shine-effect"
          >
            <MessageCircle className="w-5 h-5 ml-2" />
            تواصل واتساب
          </Button>
          
          <Button 
            onClick={openTelegram}
            className="telegram-gradient text-white px-8 py-4 text-lg font-bold rounded-2xl hover-lift shine-effect"
          >
            <Send className="w-5 h-5 ml-2" />
            قناة أعمالنا
          </Button>
          
          <Button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            variant="outline"
            className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-bold rounded-2xl backdrop-blur-md"
          >
            استكشف الخدمات
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center bounce-animation">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
          <span className="text-white/70 text-sm mt-2">مرر للأسفل</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;

