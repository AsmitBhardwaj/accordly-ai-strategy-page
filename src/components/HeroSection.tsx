
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = "Let AI surface the rulings, write the redlines, and whisper the strategy.";

  useEffect(() => {
    setIsVisible(true);
    
    // Typing animation for subtext
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 bg-black">
      <div className="text-center max-w-4xl mx-auto">
        {/* Main Headline */}
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tight leading-tight">
            The Future of Law,<br />
            Delivered in Real Time.
          </h1>
        </div>

        {/* Subtext */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed font-mono tracking-wide min-h-[80px]">
            {typedText}<span className="animate-pulse">|</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
          <Button 
            size="lg" 
            variant="outline"
            className="border-4 border-white text-white hover:bg-white hover:text-black px-12 py-6 text-xl font-bold rounded-none transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:border-pulse group"
            onClick={() => document.getElementById('email-capture')?.scrollIntoView({ behavior: 'smooth' })}
          >
            REQUEST EARLY ACCESS
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
