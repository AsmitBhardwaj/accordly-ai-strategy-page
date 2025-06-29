
import { useState, useEffect } from 'react';

const features = [
  {
    title: 'Clause Risk Scoring',
    description: 'Identify risky language with contextual alerts'
  },
  {
    title: 'AI Redlining',
    description: 'Smart redlines based on deal type and structure'
  },
  {
    title: 'Clause Benchmarking',
    description: 'Compare terms to market norms by industry and geography'
  },
  {
    title: 'Contract Lifecycle Dashboard',
    description: 'Track versions, deadlines, and renewals'
  },
  {
    title: 'Live Legal Intelligence',
    description: 'Surface clause trends and negotiation patterns'
  },
  {
    title: 'Works in Microsoft Word',
    description: 'Draft, edit, and review contracts directly in Word'
  }
];

const FeatureSection = () => {
  const [visibleFeatures, setVisibleFeatures] = useState<boolean[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleFeatures(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    const featureElements = document.querySelectorAll('.feature-card');
    featureElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-4 text-black">
            WHAT ACCORDLY DELIVERS
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-index={index}
              className={`feature-card border-4 border-black p-8 bg-white transition-all duration-700 hover:bg-black hover:text-white ${
                visibleFeatures[index] ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-black mb-3 uppercase tracking-wide">
                {feature.title}
              </h3>
              <p className="text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
