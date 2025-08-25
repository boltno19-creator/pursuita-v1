import { useState } from 'react';
import { Eye } from 'lucide-react';
import WebsiteModal from './WebsiteModal';
import ImageModal from './ImageModal';

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState('websites');
  const [selectedWebsite, setSelectedWebsite] = useState<any>(null);
  const [selectedDesign, setSelectedDesign] = useState<any>(null);

  const websites = [
    {
      title: 'Payless - Discount Card',
      description: 'موقع عصري لخدمة بطاقات الخصم، بيعرض العروض بطريقة واضحة وبسيط في الحجز عشان يوفّر تجربة استخدام سلسة.',
      image: '/payless.png',
      link: 'https://www.paylesseg.com',
      category: 'صفحة هبوط'
    },
    {
      title: 'Medical Conference',
      description: 'موقع مخصص لمؤتمر طبي، مصمم بشكل احترافي يوضح تفاصيل الفعاليات والفئات المستهدفة مع سهولة في التسجيل والمتابعة',
      image: '/medical.png',
      link: 'https://effervescent-bavarois-567c87.netlify.app',
      category: 'موقع فعاليات'
    },
    {
      title: 'About Me',
      description: 'موقع شخصي تفاعلي لعرض السيرة الذاتية بطريقة عصرية، بيوضح الخبرات والمهارات بشكل منظم وجذاب',
      image: '/about.png',
      link: 'https://pursuita-agency.github.io/MyCv',
      category: 'موقع شخصي'
    },
    {
      title: 'المسار الرائد للمقاولات',
      description: 'موقع تعريفي متكامل يوضح خدمات وإنجازات الشركة في مجال المقاولات، مع تصميم احترافي يبرز هوية العلامة التجارية',
      image: '/elraed.png',
      link: 'https://pursuita-agency.github.io/msaar',
      category: 'موقع مقاولات'
    },
    {
      title: 'أصول',
      description: 'موقع عقاري مميز مع لوحة تحكم٫ لعرض المشاريع والوحدات السكنية، بتصميم عصري سهل الاستخدام يساعد العملاء على تصفح واختيار ما يناسبهم بسهولة',
      image: '/osool.png',
      link: 'https://fantastic-lily-ccf7a9.netlify.app',
      category: 'موقع عقاري'
    },
    {
      title: 'مدار الساعة للنظافة',
      description: 'موقع تعريفي لخدمات النظافة المتكاملة، يبرز الباقات للشركات والمنازل مع نموذج طلب سريع وتجربة استخدام سلسة',
      image: '/mdar.png',
      link: 'https://pursuita-agency.github.io/cleanliness',
      category: 'موقع خدمات'
    },
     {
      title: 'Zaytona',
      description: 'موقع متخصص في خدمات الحجامة والطب البديل، يعرض الفوائد، المواعيد، وخدمة الحجز أونلاين بسهولة',
      image: '/zaytona.png',
      link: 'https://pursuita-agency.github.io/Zaytona',
      category: 'موقع طبي'
    },
     {
      title: 'Invoice',
      description: 'نظام إلكتروني مبسط لإدارة وإصدار الفواتير، يساعد الشركات والأفراد على تتبع المدفوعات وتنظيم عملياتهم المالية باحترافية',
      image: '/invoice.png',
      link: 'https://pursuita-agency.github.io/invoice',
      category: 'نظام إدارة'
    },
     {
      title: 'Password Generator',
      description: 'أداة ذكية لتوليد كلمات مرور قوية وعشوائية، تضمن أمان الحسابات وحماية البيانات من الاختراق',
      image: '/password.png',
      link: 'https://pursuita-agency.github.io/generate',
      category: 'أداة ويب'
    }
  ];

  const designs = [
    {
      title: 'JUHHD Logo Branding',
      description: 'هوية بصرية راقية تعكس احترافية JUHHD وتفرد علامتها',
      image: '/juhhd.png',
      category: 'هوية بصرية',
      projectLink: 'https://pursuita-agency.github.io/pursuita/assets/images/design/JUHHD_Logo_Branding.png'
    },
    {
      title: 'Ahmed El Sallab',
      description: 'تصاميم سوشيال ميديا تعكس فخامة وتميز أحمد السلاب',
      image: '/sallab.png',
      category: 'سوشيال ميديا',
      projectLink: 'https://pursuita-agency.github.io/pursuita/assets/images/design/Ahmed_El_Sallab%20Social_media_posts.png'
    },
    {
      title: 'Chefaa',
      description: 'تصميم يعكس هوية شفاء بروح عصرية واحترافية.',
      image: '/chefaa.png',
      category: 'شعارات',
      projectLink: 'https://pursuita-agency.github.io/pursuita/assets/images/design/Chefaa_Project.png'
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-muted/10">
      <div className="container-max">
        <div className="text-center space-y-4 mb-16 scroll-animate">
          <h2 className="text-3xl md:text-5xl font-bold" style={{ color: '#fafcff' }}>
            معرض أعمالنا
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            إستكشف مجموعة من أفضل أعمالنا في تصميم المواقع والهوية البصرية
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12 scroll-animate">
          <div className="bg-card rounded-xl p-2 border border-border/20">
            <button
              onClick={() => setActiveTab('websites')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'websites'
                  ? 'bg-primary text-primary-foreground shadow-soft'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              مواقع
            </button>
            <button
              onClick={() => setActiveTab('designs')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'designs'
                  ? 'bg-primary text-primary-foreground shadow-soft'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              تصميم & هوية بصرية
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="min-h-[600px]">
          {activeTab === 'websites' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {websites.map((website, index) => (
                <div 
                  key={website.title} 
                  className="group relative bg-card rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedWebsite(website)}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={website.image} 
                      alt={website.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-primary text-primary-foreground p-2 rounded-full hover:scale-110 transition-transform duration-200">
                        <Eye size={20} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <h3 className="text-center text-xl font-bold text-foreground">{website.title}</h3>
                    <p className="text-muted-foreground">{website.description}</p>
                    <div className="flex justify-end">
                      <span className="inline-block px-3 py-1 text-xs rounded-full" style={{
                        backgroundColor: '#6081ff20',
                        color: '#6081ff'
                      }}>
                        {website.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {designs.map((design, index) => (
                <div 
                  key={design.title} 
                  className="group relative bg-card rounded-xl overflow-hidden cursor-pointer"
                  onClick={() => setSelectedDesign(design)}
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img 
                      src={design.image} 
                      alt={design.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-accent text-accent-foreground p-2 rounded-full hover:scale-110 transition-transform duration-200">
                        <Eye size={20} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 space-y-2">
                    <h3 className="text-lg font-bold text-foreground">{design.title}</h3>
                    <p className="text-sm text-muted-foreground">{design.description}</p>
                    <span className="inline-block px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">
                      {design.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Website Modal */}
        {selectedWebsite && (
          <WebsiteModal
            isOpen={!!selectedWebsite}
            onClose={() => setSelectedWebsite(null)}
            website={selectedWebsite}
          />
        )}
        
        {/* Design Modal */}
        {selectedDesign && (
          <ImageModal
            isOpen={!!selectedDesign}
            onClose={() => setSelectedDesign(null)}
            design={selectedDesign}
          />
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;