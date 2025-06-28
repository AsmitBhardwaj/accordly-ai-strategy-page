
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-background to-teal-900/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Main Headline */}
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Real-Time Legal</span>
            <br />
            <span className="text-foreground">Strategy, Powered by AI</span>
          </h1>
        </div>

        {/* Subheadline */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Accordly finds the latest judgments that match your case — and turns them into 
            <span className="text-accent font-semibold"> plain-language suggestions</span> you can act on.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full group transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            ⚖️ See Case Intelligence
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
          >
            🚀 Join the Beta
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className={`mt-20 transition-all duration-1000 delay-700 ${isVisible ? 'animate-float' : 'opacity-0'}`}>
          <div className="flex flex-col items-center text-muted-foreground">
            <span className="text-sm mb-2">Discover the future of legal work</span>
            <ArrowDown className="h-6 w-6 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
