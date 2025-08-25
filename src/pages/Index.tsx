import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StripSection from '@/components/StripSection';
import ServicesSection from '@/components/ServicesSection';
import WhyUsSection from '@/components/WhyUsSection';
import PortfolioSection from '@/components/PortfolioSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import ReviewsSection from '@/components/ReviewsSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe all scroll-animate elements
    const animatedElements = document.querySelectorAll('.scroll-animate');
    animatedElements.forEach((element) => {
      observer.observe(element);
    });

    // Cleanup
    return () => {
      animatedElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-arabic">
      <Navbar />
      
      <main>
        <HeroSection />
        
        <StripSection
          title="متخليش حاجه تعطلك! إدفع المبلغ اللي يريحك، وابدأ رحلتك مع موقع وهوية بصرية إحترافية."
          buttonText="إبدأ الآن"
        />
        
        <ServicesSection />
        <WhyUsSection />
        <PortfolioSection />
        <PricingSection />
        <FAQSection />
        <ReviewsSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;