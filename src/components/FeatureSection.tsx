
import { useState, useEffect } from 'react';

const features = [
  {
    icon: '🕵️‍♂️',
    title: 'Live Legal Case Intelligence',
    description: 'Scrapes new court rulings daily. Matches them to your matter. Suggests arguments, strategies, and clauses you can use.',
    highlight: true
  },
  {
    icon: '✍️',
    title: 'AI-Powered Contract Drafting',
    description: 'Generate comprehensive contracts with industry-specific clauses and real-time legal precedent integration.'
  },
  {
    icon: '🔍',
    title: 'Clause Risk Scoring & Detection',
    description: 'Automatically identify high-risk clauses and get AI-powered recommendations for safer alternatives.'
  },
  {
    icon: '✒️',
    title: 'Smart Redlining with Best Practices',
    description: 'Intelligent contract review with suggestions based on current legal standards and recent case outcomes.'
  },
  {
    icon: '🔁',
    title: 'Contract Lifecycle Tracking',
    description: 'Monitor renewals, status changes, and important deadlines with automated alerts and reminders.'
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
    <section id="features" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Intelligent Legal Tools</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From case research to contract management, Accordly handles the complex legal work 
            so you can focus on strategy and client relationships.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-index={index}
              className={`feature-card glass-card p-8 rounded-2xl hover-lift transition-all duration-700 ${
                feature.highlight ? 'ring-2 ring-primary/30 bg-primary/5' : ''
              } ${
                visibleFeatures[index] ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-foreground">
                {feature.title}
                {feature.highlight && (
                  <span className="ml-2 text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                    FLAGSHIP
                  </span>
                )}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
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
