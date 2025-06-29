
import { useState, useEffect } from 'react';

const useCases = [
  {
    title: 'Review NDAs in Word with AI risk flags',
    icon: '⚠️'
  },
  {
    title: 'Benchmark clauses during live negotiations',
    icon: '📊'
  },
  {
    title: 'Manage versions & renewals for investor agreements',
    icon: '📋'
  },
  {
    title: 'Redline LPAs with confidence during deal closing',
    icon: '✏️'
  }
];

const UseCaseSection = () => {
  const [visibleCases, setVisibleCases] = useState<boolean[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCases(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    const caseElements = document.querySelectorAll('.use-case-item');
    caseElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 px-6 bg-gray-900">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
            HOW LEGAL TEAMS USE ACCORDLY
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              data-index={index}
              className={`use-case-item border-l-8 border-blue-400 bg-black p-8 transition-all duration-700 hover:bg-gray-800 hover:border-blue-300 hover:shadow-lg hover:transform hover:scale-105 ${
                visibleCases[index] ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">{useCase.icon}</span>
                <h3 className="text-xl font-bold text-white">
                  {useCase.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCaseSection;
