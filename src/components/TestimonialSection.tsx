
import { useState, useEffect } from 'react';

const TestimonialSection = () => {
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

    const section = document.getElementById('testimonials-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials-section" className="py-24 px-6 bg-black">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-5xl md:text-6xl font-black mb-8 text-white">
              DON'T DRAFT BLIND.<br />
              DRAFT WITH ACCORDLY.
            </h2>
            <p className="text-xl text-gray-300 mb-12 font-bold">
              Precision meets compliance. Powered by AI. Embedded in Word.
            </p>
            <button 
              className="border-4 border-white bg-white text-black hover:bg-black hover:text-white px-12 py-6 text-xl font-bold transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById('email-capture')?.scrollIntoView({ behavior: 'smooth' })}
            >
              REQUEST EARLY ACCESS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
