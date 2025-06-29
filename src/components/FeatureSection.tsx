
import { useState, useEffect } from 'react';

const features = [
  {
    title: 'Clause Risk Scoring',
    description: 'Identify risky language with contextual alerts and suggested alternatives',
    example: '⚠️ Uncapped indemnity – outside market range (Red Flag)'
  },
  {
    title: 'AI Redlining',
    description: 'Suggests inline changes based on past negotiations and deal structure',
    example: '✏️ Suggested edit: "shall" → "will" (market standard)'
  },
  {
    title: 'Clause Benchmarking',
    description: 'Instantly compare any term to market-standard clauses by industry and region',
    example: '📊 Term is 15% above market median for SaaS agreements'
  },
  {
    title: 'Contract Lifecycle Dashboard',
    description: 'Track versions, deadlines, and renewals with automated alerts',
    example: '📅 Renewal deadline in 30 days - auto-alert sent'
  },
  {
    title: 'Live Legal Intelligence',
    description: 'Surface clause trends and negotiation patterns from recent deals',
    example: '📈 This clause accepted in 78% of Q4 negotiations'
  },
  {
    title: 'Works in Microsoft Word',
    description: 'Draft, edit, and review contracts directly in Word - no new tools to learn',
    highlighted: true,
    example: '💼 Native Word integration - zero learning curve'
  }
];

const FeatureSection = () => {
  const [visibleFeatures, setVisibleFeatures] = useState<boolean[]>([]);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

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
    <section className="py-24 px-6 bg-black">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-4 text-white">
            WHAT ACCORDLY DELIVERS
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-index={index}
              className={`feature-card border-4 border-white p-8 transition-all duration-700 hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:border-blue-400 hover:scale-105 cursor-pointer ${
                feature.highlighted ? 'bg-gray-900 text-white' : 'bg-black text-white'
              } ${
                visibleFeatures[index] ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <h3 className="text-xl font-black mb-3 uppercase tracking-wide">
                {feature.title}
              </h3>
              <p className="text-base leading-relaxed mb-4">
                {feature.description}
              </p>
              {hoveredFeature === index && (
                <div className="text-sm font-mono bg-gray-800 text-green-400 p-3 rounded border animate-fade-in">
                  {feature.example}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
