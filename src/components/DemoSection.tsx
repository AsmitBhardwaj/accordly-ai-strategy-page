
import { useState, useEffect } from 'react';

const DemoSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('demo-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="demo-section" className="py-24 px-6 bg-gray-900">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
            TRUSTED BY LEGAL PROFESSIONALS
          </h2>
        </div>

        {/* Testimonials */}
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-4 border-white p-8 bg-black transform hover:scale-105 transition-transform duration-300">
              <blockquote className="text-lg font-mono text-white mb-4">
                "It's like having a smart associate inside Word."
              </blockquote>
              <cite className="text-sm text-gray-400 font-bold">
                — Sarah Chen, General Counsel
              </cite>
            </div>
            
            <div className="border-4 border-white p-8 bg-black transform hover:scale-105 transition-transform duration-300">
              <blockquote className="text-lg font-mono text-white mb-4">
                "Clause benchmarking saves hours — every time."
              </blockquote>
              <cite className="text-sm text-gray-400 font-bold">
                — Michael Rodriguez, Partner
              </cite>
            </div>
            
            <div className="border-4 border-white p-8 bg-black transform hover:scale-105 transition-transform duration-300">
              <blockquote className="text-lg font-mono text-white mb-4">
                "Finally, a tool that understands how legal teams really work."
              </blockquote>
              <cite className="text-sm text-gray-400 font-bold">
                — Jennifer Park, Legal Operations
              </cite>
            </div>
          </div>

          {/* Additional testimonials row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-2xl mx-auto">
            <div className="border-4 border-white p-8 bg-black transform hover:scale-105 transition-transform duration-300">
              <blockquote className="text-lg font-mono text-white mb-4">
                "We replaced 80% of legal research with Accordly."
              </blockquote>
              <cite className="text-sm text-gray-400 font-bold">
                — David Kim, Chief Legal Officer
              </cite>
            </div>
            
            <div className="border-4 border-white p-8 bg-black transform hover:scale-105 transition-transform duration-300">
              <blockquote className="text-lg font-mono text-white mb-4">
                "Risk scoring caught issues we would have missed."
              </blockquote>
              <cite className="text-sm text-gray-400 font-bold">
                — Lisa Thompson, Associate
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
