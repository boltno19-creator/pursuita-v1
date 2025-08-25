import { Star, Quote } from 'lucide-react';

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: 'أحمد محمد العلي',
      title: 'مدير شركة الأحلام للتجارة',
      rating: 5,
      review: 'تعاملت مع فريق Pursuita لتصميم موقع شركتي والنتيجة فاقت كل التوقعات. الموقع احترافي جداً والخدمة ممتازة. ينصح بهم بقوة!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'سارة حسن إبراهيم',
      title: 'صاحبة متجر أزياء',
      rating: 5,
      review: 'صمموا لي متجر إلكتروني رائع وهوية بصرية مميزة. الفريق متعاون ومتفهم وسلم العمل في الوقت المحدد. شكراً لكم!',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'خالد أشرف منصور',
      title: 'طبيب أسنان',
      rating: 5,
      review: 'موقع عيادتي بقى أحلى بكتير بعد التعامل معاهم. التصميم أنيق والموقع سريع. الأهم إن المرضى بقوا يحجزوا أونلاين بسهولة.',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 4,
      name: 'مريم عادل فهمي',
      title: 'مديرة مطعم النخيل',
      rating: 5,
      review: 'عملوا لنا موقع وتطبيق للطلبات أونلاين. زادت مبيعاتنا بشكل ملحوظ والعملاء بقوا راضيين عن سهولة الطلب. جزاهم الله خيراً.',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 5,
      name: 'عمر حسام الدين',
      title: 'مهندس ومقاول',
      rating: 5,
      review: 'تصميم موقع شركة المقاولات بتاعتي كان تحفة فنية. عرض أعمالنا بشكل احترافي وجذب عملاء جدد كتير. متشكر جداً.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 6,
      name: 'نور السيد محمد',
      title: 'صاحبة مركز تجميل',
      rating: 5,
      review: 'الهوية البصرية اللي صمموها لمركزي خلت شكله أكتر أناقة وجاذبية. العميلات بقوا يمدحوا في التصميم باستمرار. شغل راقي فعلاً.',
      image: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=150&h=150&fit=crop&crop=face'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={`${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="section-padding bg-muted/10">
      <div className="container-max">
        <div className="text-center space-y-4 mb-16 scroll-animate">
          <h2 className="text-3xl md:text-5xl font-bold" style={{ color: '#fafcff' }}>
            آراء عملاؤنا
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            بعض من آراء عملاؤنا اللتي نعتز بها… لأن رضاكم هو أغلى ما نسعى إليه
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={review.name} className="bg-card rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300 scroll-animate">
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-foreground mb-1">{review.name}</h3>
                  <p className="text-muted-foreground">{review.title}</p>
                </div>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  "{review.review}"
                </p>
              </div>
            ))}
        </div>

        {/* Overall Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 scroll-animate">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2" style={{ color: '#6181ff' }}>4.9</div>
            <div className="text-sm text-muted-foreground">تقييم العملاء</div>
            <div className="flex justify-center mt-1">
              {renderStars(5)}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2" style={{ color: '#6181ff' }}>150+</div>
            <div className="text-sm text-muted-foreground">مشروع مكتمل</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2" style={{ color: '#6181ff' }}>120+</div>
            <div className="text-sm text-muted-foreground">عميل راضي</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2" style={{ color: '#6181ff' }}>95%</div>
            <div className="text-sm text-muted-foreground">نسبة الرضا</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 scroll-animate">
          <p className="text-muted-foreground mb-6">
            انضم لقائمة العملاء الراضين واطلب مشروعك الآن
          </p>
          <button
            onClick={() => window.open('https://wa.me/201025736993', '_blank')}
            className="btn-primary"
          >
            ابدأ مشروعك معنا
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;