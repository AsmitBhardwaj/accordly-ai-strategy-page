
import { useState, useEffect } from 'react';

const SocialProofSection = () => {
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

    const section = document.getElementById('social-proof-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const firmLogos = [
    'VENTURE LEGAL',
    'CORPORATE LAW PARTNERS',
    'ENTERPRISE COUNSEL',
    'GLOBAL LEGAL ADVISORS',
    'INNOVATION LAW GROUP'
  ];

  return (
    <section id="social-proof-section" className="py-16 px-6 bg-gray-950 border-y-4 border-white">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h3 className="text-lg font-bold text-gray-400 mb-8 tracking-wider">
            TRUSTED BY TOP-TIER LEGAL TEAMS
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {firmLogos.map((firm, index) => (
              <div
                key={index}
                className={`text-white font-black text-sm text-center opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-110 ${
                  isVisible ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {firm}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
