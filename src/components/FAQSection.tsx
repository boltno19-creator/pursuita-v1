import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'كم المدة المطلوبة لتسليم الموقع؟',
      answer: 'المدة تختلف حسب نوع وحجم المشروع. عادة ما نحتاج من 5-15 يوم عمل للمواقع البسيطة، ومن 3-6 أسابيع للمشاريع المعقدة. نحدد المدة الدقيقة بعد مناقشة تفاصيل مشروعك معك.'
    },
    {
      question: 'هل تقدمون خدمة الصيانة والدعم الفني؟',
      answer: 'نعم، نقدم خدمة دعم فني شاملة تتضمن: صيانة دورية للموقع، تحديثات أمنية، نسخ احتياطية، وحل أي مشاكل تقنية. كما نوفر دعم فني سريع عبر الواتساب والإيميل.'
    },
    {
      question: 'هل يمكنني تعديل المحتوى لاحقاً؟',
      answer: 'بالطبع! نقوم بتسليمك لوحة تحكم سهلة الاستخدام تمكنك من تعديل المحتوى، إضافة صفحات جديدة، رفع الصور، وإدارة الموقع بالكامل دون الحاجة لخبرة تقنية. كما نقدم تدريب مجاني على استخدام اللوحة.'
    },
    {
      question: 'ما هي وسائل الدفع المتاحة؟',
      answer: 'نوفر مرونة كاملة في الدفع: دفع مقدم جزئي وباقي المبلغ عند التسليم، تقسيط على دفعات، تحويل بنكي، فودافون كاش، أو أي طريقة تناسبك. الهدف راحتك وضمان حصولك على الخدمة.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding">
      <div className="container-max max-w-4xl">
        <div className="text-center space-y-4 mb-16 scroll-animate">
          <h2 className="text-3xl md:text-5xl font-bold" style={{ color: '#fafcff' }}>
            الأسئلة الشائعة
          </h2>
          <p className="text-xl text-muted-foreground">
            في القسم ده، جمعنا أكتر الأسئلة اللي بتوصلنا من عملاؤنا الكرام، 
            عشان نوضحلك كل حاجة بشفافية كاملة.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="card-premium cursor-pointer scroll-animate"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground flex-1 ml-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  size={20}
                  className={`text-primary transition-transform duration-300 flex-shrink-0 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </div>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pt-4 border-t border-border/30 mt-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 scroll-animate">
          <p className="text-muted-foreground mb-6">
            مازال عندك أسئلة أخرى؟ تواصل معنا مباشرة
          </p>
          <button
            onClick={() => window.open('https://wa.me/201025736993', '_blank')}
            className="btn-primary"
          >
            إسأل سؤالك
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;