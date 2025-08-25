import { MessageCircle, PenTool, DollarSign, CheckCircle } from 'lucide-react';

const PricingSection = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: 'تواصل معنا',
      description: 'اختر وسيلة التواصل المناسبة لك (واتساب، إيميل، اتصال مباشر)'
    },
    {
      icon: PenTool,
      title: 'إشرحلنا فكرتك',
      description: 'قدم لنا تفاصيل مشروعك وأهدافك بشكل واضح'
    },
    {
      icon: DollarSign,
      title: 'حدد المبلغ',
      description: 'اختر السعر المناسب لميزانيتك وإمكانياتك'
    },
    {
      icon: CheckCircle,
      title: 'تم إستلام طلبك',
      description: 'نبدأ فوراً في تنفيذ مشروعك بأعلى جودة'
    }
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/201025736993', '_blank');
  };

  return (
    <section className="section-padding" style={{ background: 'linear-gradient(135deg, #e87e5e 0%, #ee5a24 100%)' }}>
      <div className="container-max">
        <div className="text-center space-y-8 scroll-animate">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            إنت اللي هتحدد سعر الخدمة
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            دلوقتي ولفترة محدودة، إنت اللي هتحدد سعر الخدمة اللي تناسب ميزانيتك. اختار المبلغ اللي يريحك وسيبنا نحقق حلمك.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center space-y-4 scroll-animate">
              <div className="relative">
                <div className="w-20 h-20 mx-auto bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 shadow-lg">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white">{step.title}</h3>
              <p className="text-white/80">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 scroll-animate">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            جاهز تبدأ ؟
          </h3>
          <button
            onClick={handleWhatsAppClick}
            className="bg-white text-gray-900 font-bold px-10 py-4 rounded-xl hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            تواصل معنا الآن
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;