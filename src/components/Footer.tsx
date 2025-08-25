import { MessageCircle, Facebook, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'تصميم المواقع',
    'تصميم الجرافيك',
    'تحسين محركات البحث',
    'الهوية البصرية',
    'المتاجر الالكترونية',
    'تطبيقات الجوال'
  ];

  const handleSocialClick = (platform: string) => {
    const links = {
      whatsapp: 'https://wa.me/201025736993',
      facebook: 'https://facebook.com/pursuita',
      instagram: 'https://instagram.com/pursuita'
    };
    window.open(links[platform as keyof typeof links], '_blank');
  };

  return (
    <footer id="footer" className="bg-[#171741] text-white section-padding">
      <div className="container-max">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-8 section-padding">
          {/* Company Info - 6 columns */}
          <div className="lg:col-span-6 space-y-6">
            <div>
             <img src="/logo.png" alt="Pursuita" className="h-12 w-auto" />
              <p className="text-muted-foreground leading-relaxed max-w-md pt-4">
                وكالة رقمية متخصصة في تصميم المواقع والهوية البصرية. نحول أفكارك إلى واقع رقمي احترافي 
                يساعدك على تحقيق أهدافك وبناء حضور قوي على الإنترنت.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone size={18} className="text-primary" />
                <span dir="ltr">+20 102 573 6993</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail size={18} className="text-primary" />
                <span>info@pursuita.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">تابعنا على</h4>
              <div className="flex gap-4">
                <button
                  onClick={() => handleSocialClick('whatsapp')}
                  className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition-colors duration-300"
                  aria-label="واتساب"
                >
                  <MessageCircle size={20} />
                </button>
                <button
                  onClick={() => handleSocialClick('facebook')}
                  className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors duration-300"
                  aria-label="فيسبوك"
                >
                  <Facebook size={20} />
                </button>
                <button
                  onClick={() => handleSocialClick('instagram')}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-3 rounded-full transition-all duration-300"
                  aria-label="انستجرام"
                >
                  <Instagram size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Services - 3 columns */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-semibold text-foreground text-lg">خدماتنا</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links - 3 columns */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-semibold text-foreground text-lg">روابط سريعة</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  الرئيسية
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  خدماتنا
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  معرض الأعمال
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  آراء العملاء
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  الأسئلة الشائعة
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/30 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              جميع الحقوق محفوظة © {currentYear} Pursuita Digital Agency
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors duration-300">
                سياسة الخصوصية
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                شروط الاستخدام
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;