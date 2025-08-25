import { ArrowLeft, Sparkles, Zap } from 'lucide-react';

interface StripSectionProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  className?: string;
}

const StripSection = ({ title, subtitle, buttonText, className = '' }: StripSectionProps) => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/201025736993', '_blank');
  };

  return (
    <section className={`section-padding relative overflow-hidden ${className}`}>
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6081ff] via-[#5070ee] to-[#6081ff]/80"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 bg-white rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      {/* Floating icons */}
      <div className="absolute inset-0 opacity-20">
        <Sparkles className="absolute top-20 left-1/4 w-8 h-8 text-white animate-float" style={{ animationDelay: '0s' }} />
        <Zap className="absolute bottom-24 right-1/3 w-10 h-10 text-white animate-float" style={{ animationDelay: '1.5s' }} />
        <Sparkles className="absolute top-1/2 right-1/4 w-6 h-6 text-white animate-float" style={{ animationDelay: '3s' }} />
      </div>
      
      <div className="container-max">
        <div className="relative z-10 text-center space-y-8 scroll-animate">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white/90 text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span>عرض خاص ولفترة محدودة</span>
          </div>
          
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white max-w-5xl mx-auto" style={{ lineHeight: '1.5' }}>
            {title}
          </h2>
          
          {subtitle && (
            <p className="text-xl md:text-2xl text-white/95 max-w-4xl mx-auto leading-relaxed font-medium">
              {subtitle}
            </p>
          )}
          
          <div className="pt-8">
            <button
              onClick={handleWhatsAppClick}
              className="group bg-white text-gray-900 font-bold px-10 py-5 rounded-2xl hover:scale-105 hover:shadow-2xl transition-all duration-300 flex items-center gap-3 mx-auto relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 text-lg">{buttonText}</span>
              <ArrowLeft size={22} className="relative z-10 rotate-180 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StripSection;