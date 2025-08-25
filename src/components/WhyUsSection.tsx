import { Shield, Users, Clock, Award, Lightbulb, Rocket, CheckCircle, Star, Zap, Target } from 'lucide-react';

const WhyUsSection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/201025736993', '_blank');
  };

  return (
    <section id="why" className="section-padding bg-background relative overflow-hidden" dir="rtl">
      {/* Background Icons */}
      <div className="bg-icons">
        <Shield className="absolute top-20 left-16 w-10 h-10 text-primary animate-float" style={{ animationDelay: '0s' }} />
        <Users className="absolute top-40 right-20 w-11 h-11 text-primary animate-float" style={{ animationDelay: '1s' }} />
        <Clock className="absolute bottom-40 left-20 w-10 h-10 text-primary animate-float" style={{ animationDelay: '2s' }} />
        <Award className="absolute bottom-20 right-16 w-12 h-12 text-primary animate-float" style={{ animationDelay: '0.5s' }} />
        <Lightbulb className="absolute top-60 left-32 w-11 h-11 text-primary animate-float" style={{ animationDelay: '1.5s' }} />
        <Rocket className="absolute bottom-32 right-32 w-10 h-10 text-primary animate-float" style={{ animationDelay: '2.5s' }} />
      </div>
      
      <div className="container-max relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12 scroll-animate text-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold" style={{ color: '#fafcff' }}>
                لماذا نحن ؟
              </h2>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                لأننا نؤمن أن نجاحك هو نجاحنا! وعشان كده بنحرص نقدملك خدمة متميزة تساعدك توصل لهدفك بأقل تكلفة وأعلى جودة.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 text-right">
                <h3 dir="ltr" className="text-xl font-bold text-foreground flex items-center gap-3 justify-end">
                  <span>خبرة متنوعة</span>
                  <CheckCircle className="w-6 h-6 text-primary" />
                </h3>
                <p className="text-muted-foreground">
                  اشتغلنا مع عملاء من مجالات مختلفة، وده خلانا نفهم احتياجات كل مجال وإزاي نوصل رسالتك بشكل مؤثر.
                </p>
              </div>
              
              <div className="space-y-4 text-right">
                <h3 dir="ltr" className="text-xl font-bold text-foreground flex items-center gap-3 justify-end">
                  <span>مرونة في التعامل</span>
                  <Zap className="w-6 h-6 text-primary" />
                </h3>
                <p className="text-muted-foreground">
                  بنتفهم إن كل عميل له ظروفه، وعشان كده بنوفر خطط دفع مرنة تناسب ميزانيتك.
                </p>
              </div>
              
              <div className="space-y-4 text-right">
                <h3 dir="ltr" className="text-xl font-bold text-foreground flex items-center gap-3 justify-end">
                  <span>دعم مستمر</span>
                  <Star className="w-6 h-6 text-primary" />
                </h3>
                <p className="text-muted-foreground">
                  مش بنسيبك بعد تسليم المشروع، بل بنوفرلك دعم فني مستمر وتحديثات دورية.
                </p>
              </div>
              
              <div className="space-y-4 text-right">
                <h3 dir="ltr" className="text-xl font-bold text-foreground flex items-center gap-3 justify-end">
                  <span>جودة عالية بأسعار منافسة</span>
                  <Target className="w-6 h-6 text-primary" />
                </h3>
                <p className="text-muted-foreground">
                  هدفنا نوصلك لأعلى مستوى من الجودة بسعر يناسب ميزانيتك، بدون أي تنازلات.
                </p>
              </div>
            </div>
            
            <div className="pt-8">
              <button
                onClick={handleWhatsAppClick}
                className="btn-hero text-lg px-10 py-5"
              >
                تواصل معنا الآن
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;