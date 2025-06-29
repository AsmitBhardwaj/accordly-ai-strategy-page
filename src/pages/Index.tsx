
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import DemoSection from '@/components/DemoSection';
import TestimonialSection from '@/components/TestimonialSection';
import EmailCaptureSection from '@/components/EmailCaptureSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b-4 border-white">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-black text-white">
            ACCORDLY
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black font-bold rounded-none">
              LOGIN
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Feature Section */}
      <FeatureSection />

      {/* Demo Section (now Testimonials) */}
      <DemoSection />

      {/* Testimonial Section (now CTA) */}
      <TestimonialSection />

      {/* Email Capture Section */}
      <EmailCaptureSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
