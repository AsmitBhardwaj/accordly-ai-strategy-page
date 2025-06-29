
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
    <section id="demo" className="py-24 px-6 bg-gray-100">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-black">
            TRUSTED BY LEGAL PROFESSIONALS
          </h2>
        </div>

        {/* Testimonials */}
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-4 border-black p-8 bg-white">
              <blockquote className="text-lg font-mono text-black mb-4">
                "It's like having a smart associate inside Word."
              </blockquote>
            </div>
            
            <div className="border-4 border-black p-8 bg-white">
              <blockquote className="text-lg font-mono text-black mb-4">
                "Clause benchmarking saves hours — every time."
              </blockquote>
            </div>
            
            <div className="border-4 border-black p-8 bg-white">
              <blockquote className="text-lg font-mono text-black mb-4">
                "Finally, a tool that understands how legal teams really work."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
