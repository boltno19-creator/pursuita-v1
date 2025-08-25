import { Globe, Palette, TrendingUp } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: 'تصميم المواقع',
      description: 'نصمم مواقع احترافية ومتجاوبة مع جميع الأجهزة، سواء كانت مواقع تعريفية، متاجر إلكترونية، أو صفحات هبوط مخصصة لأهدافك التسويقية.',
      features: ['متجاوب مع جميع الأجهزة', 'سرعة تحميل عالية', 'تحسين محركات البحث', 'لوحة تحكم سهلة']
    },
    {
      icon: Palette,
      title: 'تصميم جرافيك',
      description: 'نبدع في تصميم الهوية البصرية الكاملة لعلامتك التجارية، من الشعار إلى المطبوعات والمواد التسويقية الرقمية.',
      features: ['تصميم شعارات مميزة', 'هوية بصرية متكاملة', 'مواد تسويقية', 'تصميمات مطبوعات']
    },
    {
      icon: TrendingUp,
      title: 'تحسين محركات البحث SEO',
      description: 'نساعدك في الوصول لأول نتائج البحث وزيادة الزيارات المستهدفة لموقعك من خلال استراتيجيات SEO المتقدمة.',
      features: ['تحليل المنافسين', 'بحث الكلمات المفتاحية', 'تحسين داخلي وخارجي', 'تقارير شهرية']
    }
  ];

  return (
    <section id="services" className="section-padding bg-muted/20">
      <div className="container-max">
        <div className="text-center space-y-4 mb-16 scroll-animate">
          <h2 className="text-3xl md:text-5xl font-bold" style={{ color: '#fafcff' }}>
            الخدمات التي نقدمها
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            وراء كل خدمة من هذه الخدمات شخص محترف ومتمكن، مخصص لتقديم هذه الخدمة فقط.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card-service scroll-animate" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-primary rounded-xl">
                  <service.icon size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-border/30">
                <button className="btn-outline w-full group-hover:bg-primary group-hover:text-primary-foreground">
                  اطلب الخدمة
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;