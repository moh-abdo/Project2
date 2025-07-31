import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Shield, 
  Rocket, 
  Headphones, 
  DollarSign, 
  Users, 
  Lock,
  CheckCircle,
  Clock,
  Award
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'ضمان الجودة 100%',
      description: 'نضمن لك أعلى مستويات الجودة مع إمكانية المراجعة والتعديل المجاني حتى الرضا التام',
      highlight: 'ضمان مدى الحياة',
      premium: true,
      color: 'text-green-500'
    },
    {
      icon: Rocket,
      title: 'سرعة في التسليم',
      description: 'نلتزم بالمواعيد المحددة ونسلم أعمالنا قبل الموعد المطلوب بوقت كافي',
      stats: '98% معدل التسليم في الوقت',
      color: 'text-blue-500'
    },
    {
      icon: Headphones,
      title: 'دعم فني 24/7',
      description: 'فريق الدعم متاح على مدار الساعة للإجابة على استفساراتك ومساعدتك',
      stats: 'متوسط الرد: 5 دقائق',
      color: 'text-purple-500'
    },
    {
      icon: DollarSign,
      title: 'أسعار تنافسية',
      description: 'نقدم أفضل الأسعار في السوق مع جودة عالية وخدمة ممتازة',
      stats: 'توفير حتى 40%',
      color: 'text-orange-500'
    },
    {
      icon: Users,
      title: 'فريق متخصص',
      description: 'فريق من الخبراء والأكاديميين المتخصصين في جميع المجالات',
      stats: '+50 خبير متخصص',
      color: 'text-indigo-500'
    },
    {
      icon: Lock,
      title: 'سرية تامة',
      description: 'نحافظ على سرية معلوماتك وأعمالك بأعلى معايير الأمان والخصوصية',
      stats: 'حماية SSL 256-bit',
      color: 'text-red-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-2">
            لماذا نحن الأفضل
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            مميزات تجعلنا الخيار الأول
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نقدم خدمات متميزة تضمن لك التفوق الأكاديمي والنجاح المستمر
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className={`group hover-lift relative overflow-hidden border-0 shadow-lg ${
                feature.premium ? 'ring-2 ring-yellow-400 bg-gradient-to-br from-yellow-50 to-orange-50' : 'bg-white'
              }`}
            >
              {feature.premium && (
                <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 px-3 py-1 text-xs font-bold rounded-bl-lg">
                  مميز
                </div>
              )}
              
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${feature.color}`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {feature.description}
                </p>
                
                {feature.highlight && (
                  <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    <Award className="w-4 h-4" />
                    {feature.highlight}
                  </div>
                )}
                
                {feature.stats && (
                  <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    {feature.stats}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                مميزات إضافية تحصل عليها
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-lg">مراجعة مجانية حتى الرضا التام</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-lg">تسليم قبل الموعد المحدد</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-lg">دعم فني مستمر بعد التسليم</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-lg">خصومات للعملاء المتكررين</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-lg">ضمان الأصالة والجودة</span>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
                <div className="text-6xl font-black text-yellow-400 mb-2">99%</div>
                <div className="text-xl font-semibold mb-4">معدل رضا العملاء</div>
                <p className="text-white/90">
                  أكثر من 99% من عملائنا راضون تماماً عن خدماتنا ويوصون بها للآخرين
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

