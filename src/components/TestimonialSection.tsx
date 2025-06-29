
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
    <section className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-5xl md:text-6xl font-black mb-8 text-black">
              DON'T DRAFT BLIND.<br />
              DRAFT WITH ACCORDLY.
            </h2>
            <p className="text-xl text-gray-600 mb-12 font-bold">
              Built for precision. Powered by AI. Made for Word.
            </p>
            <button className="border-4 border-black bg-black text-white hover:bg-white hover:text-black px-12 py-6 text-xl font-bold transition-all duration-300">
              SCHEDULE A DEMO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
