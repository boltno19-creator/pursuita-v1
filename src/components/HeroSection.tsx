import { ArrowLeft } from 'lucide-react';
import { Code, Palette, Smartphone, Monitor, Cpu, Zap } from 'lucide-react';

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/201025736993', '_blank');
  };

  return (
    <section id="home" className="section-padding bg-background relative overflow-hidden min-h-screen flex items-center pt-32">
      {/* Background Icons */}
      <div className="bg-icons">
        <Code className="absolute top-20 left-16 w-12 h-12 text-primary animate-float" style={{ animationDelay: '0s' }} />
        <Palette className="absolute top-40 right-20 w-10 h-10 text-accent animate-float" style={{ animationDelay: '1s' }} />
        <Smartphone className="absolute top-60 left-32 w-11 h-11 text-primary animate-float" style={{ animationDelay: '2s' }} />
        <Monitor className="absolute bottom-40 right-16 w-12 h-12 text-accent animate-float" style={{ animationDelay: '0.5s' }} />
        <Cpu className="absolute bottom-60 left-20 w-10 h-10 text-primary animate-float" style={{ animationDelay: '1.5s' }} />
        <Zap className="absolute top-80 right-40 w-11 h-11 text-accent animate-float" style={{ animationDelay: '2.5s' }} />
      </div>
      
      <div className="container-max relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="space-y-8 scroll-animate">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold" style={{ lineHeight: '1.6' }}>
              نبني حضورك الرقمي بتصميم 
              <span className="gradient-text-hero block mt-2">
                مواقع وهوية بصرية مميزة!
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto" style={{ lineHeight: '2.5rem' }}>
              في عالم السرعة، إحنا اللي هنخلي خطوتك أذكى وأسرع.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <button
                onClick={handleWhatsAppClick}
                className="btn-hero text-lg px-10 py-5 flex items-center gap-3"
              >
                <span>إبدأ مشروعك الآن</span>
                <ArrowLeft size={20} className="rotate-180" />
              </button>
              
              <button
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline text-lg px-10 py-5"
              >
                إستكشف خدماتنا
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-foreground">150+</div>
                <div className="text-muted-foreground mt-2">مشروع مكتمل</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-foreground">120+</div>
                <div className="text-muted-foreground mt-2">عميل راضي</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-foreground">5+</div>
                <div className="text-muted-foreground mt-2">سنوات خبرة</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;