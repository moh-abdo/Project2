import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  BookOpen, 
  FileText, 
  FlaskConical, 
  Brain, 
  User, 
  GraduationCap, 
  ClipboardList, 
  TrendingUp, 
  Search,
  Star,
  Check,
  MessageCircle
} from 'lucide-react';

// Import service images
import projectsImg from '../assets/projects.png';
import assignmentsImg from '../assets/assignments.png';
import labsImg from '../assets/labs.png';
import mindMapsImg from '../assets/mind_maps.png';
import cvImg from '../assets/cv.png';
import graduationResearchImg from '../assets/graduation_research.png';
import trainingReportsImg from '../assets/training_reports.png';
import feasibilityStudiesImg from '../assets/feasibility_studies.png';
import academicResearchImg from '../assets/academic_research.png';

const Services = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'جميع الخدمات' },
    { id: 'projects', label: 'المشاريع' },
    { id: 'assignments', label: 'الواجبات' },
    { id: 'research', label: 'البحوث' },
    { id: 'design', label: 'التصميم' }
  ];

  const services = [
    {
      id: 'projects',
      title: 'المشاريع والتكاليف',
      description: 'جميع أنواع المشاريع الجامعية والتكاليف لكافة التخصصات مع ضمان الجودة والأصالة',
      image: projectsImg,
      icon: BookOpen,
      category: 'projects',
      featured: true,
      rating: 4.9,
      price: 'من 120 ريال',
      features: ['تسليم في الوقت المحدد', 'مراجعة مجانية', 'ضمان الأصالة']
    },
    {
      id: 'assignments',
      title: 'الواجبات الجامعية',
      description: 'حل الواجبات لجميع المقررات مع شرح مفصل وخطوات الحل',
      image: assignmentsImg,
      icon: FileText,
      category: 'assignments',
      rating: 4.8,
      price: 'من 40 ريال',
      features: ['حل مع الشرح المفصل', 'تسليم سريع', 'جميع التخصصات']
    },
    {
      id: 'labs',
      title: 'حل اللابات',
      description: 'حل جميع أنواع اللابات العملية والتطبيقية لكافة التخصصات',
      image: labsImg,
      icon: FlaskConical,
      category: 'assignments',
      rating: 4.7,
      price: 'من 30 ريال',
      features: ['حلول عملية', 'تقارير مفصلة', 'دعم فني']
    },
    {
      id: 'mindmaps',
      title: 'الخرائط الذهنية',
      description: 'تصميم خرائط ذهنية احترافية ومنظمة لتسهيل الدراسة والفهم',
      image: mindMapsImg,
      icon: Brain,
      category: 'design',
      rating: 4.9,
      price: 'من 25 ريال',
      features: ['تصميم احترافي', 'ألوان متناسقة', 'سهولة القراءة']
    },
    {
      id: 'cv',
      title: 'السيرة الذاتية',
      description: 'إعداد سيرة ذاتية احترافية تبرز مهاراتك وخبراتك بشكل مميز',
      image: cvImg,
      icon: User,
      category: 'design',
      rating: 4.8,
      price: 'من 50 ريال',
      features: ['تصميم عصري', 'محتوى مميز', 'تنسيق احترافي']
    },
    {
      id: 'graduation_research',
      title: 'بحوث التخرج',
      description: 'إعداد بحوث التخرج الشاملة مع المراجع والتوثيق العلمي الصحيح',
      image: graduationResearchImg,
      icon: GraduationCap,
      category: 'research',
      rating: 4.9,
      price: 'من 300 ريال',
      features: ['بحث شامل', 'مراجع موثقة', 'منهجية علمية']
    },
    {
      id: 'training_reports',
      title: 'تقارير التدريب',
      description: 'كتابة تقارير التدريب التعاوني والميداني بشكل مهني ومفصل',
      image: trainingReportsImg,
      icon: ClipboardList,
      category: 'assignments',
      rating: 4.7,
      price: 'من 80 ريال',
      features: ['تقرير مفصل', 'تحليل شامل', 'توصيات عملية']
    },
    {
      id: 'feasibility_studies',
      title: 'دراسات الجدوى',
      description: 'إعداد دراسات الجدوى الاقتصادية والفنية للمشاريع المختلفة',
      image: feasibilityStudiesImg,
      icon: TrendingUp,
      category: 'research',
      rating: 4.8,
      price: 'من 200 ريال',
      features: ['تحليل مالي', 'دراسة السوق', 'تقييم المخاطر']
    },
    {
      id: 'academic_research',
      title: 'البحوث الأكاديمية',
      description: 'إعداد البحوث الأكاديمية والعلمية وفقاً للمعايير الدولية',
      image: academicResearchImg,
      icon: Search,
      category: 'research',
      rating: 4.9,
      price: 'من 150 ريال',
      features: ['منهجية علمية', 'مراجع حديثة', 'تحليل عميق']
    }
  ];

  const filteredServices = activeFilter === 'all' 
    ? services 
    : services.filter(service => service.category === activeFilter);

  const orderService = (serviceTitle) => {
    const message = encodeURIComponent(`السلام عليكم، أريد طلب ${serviceTitle}. يرجى التواصل معي لمناقشة التفاصيل والسعر.`);
    const whatsappUrl = `https://wa.me/966XXXXXXXXX?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-2">
            خدماتنا المتميزة
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            حلول أكاديمية شاملة
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نقدم مجموعة واسعة من الخدمات الأكاديمية المتخصصة لجميع المراحل والتخصصات
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter.id 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'hover:bg-blue-50 hover:border-blue-300'
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <Card 
              key={service.id} 
              className={`service-card group relative overflow-hidden ${
                service.featured ? 'ring-2 ring-yellow-400' : ''
              }`}
            >
              {service.featured && (
                <Badge className="absolute top-4 right-4 z-10 bg-yellow-400 text-yellow-900">
                  الأكثر طلباً
                </Badge>
              )}
              
              <div className="relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <service.icon className="w-8 h-8" />
                  </div>
                </div>
              </div>

              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold text-gray-700">
                      ({service.rating})
                    </span>
                  </div>
                </div>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price and Action */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-lg font-bold text-blue-600">
                      {service.price}
                    </div>
                    <Button 
                      onClick={() => orderService(service.title)}
                      className="whatsapp-gradient text-white hover:scale-105 transition-transform duration-300"
                    >
                      <MessageCircle className="w-4 h-4 ml-2" />
                      اطلب الآن
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-blue-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              لم تجد الخدمة التي تبحث عنها؟
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              تواصل معنا وسنقدم لك حلولاً مخصصة تناسب احتياجاتك الأكاديمية
            </p>
            <Button 
              onClick={() => {
                const message = encodeURIComponent('السلام عليكم، أريد الاستفسار عن خدمة مخصصة');
                const whatsappUrl = `https://wa.me/966XXXXXXXXX?text=${message}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold rounded-2xl"
            >
              <MessageCircle className="w-5 h-5 ml-2" />
              تواصل معنا الآن
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

