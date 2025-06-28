
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
    <section id="demo" className="py-20 px-6" id="demo-section">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See Accordly in <span className="text-gradient">Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here's how Accordly thinks like a lawyer — but moves like AI.
          </p>
        </div>

        {/* Demo Browser Frame */}
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
          <div className="glass-card rounded-2xl overflow-hidden shadow-2xl">
            {/* Browser Header */}
            <div className="bg-card/80 px-6 py-4 border-b border-white/10 flex items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-background/50 rounded-lg px-4 py-2 text-sm text-muted-foreground">
                  app.accordly.ai/cases/employment-dispute-2024
                </div>
              </div>
            </div>

            {/* Demo Content */}
            <div className="p-8 bg-gradient-to-br from-card/30 to-card/10">
              <div className="space-y-6">
                {/* Case Analysis Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Thompson v. TechCorp Employment Dispute</h3>
                    <p className="text-muted-foreground">Case Intelligence Updated 2 hours ago</p>
                  </div>
                  <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    87% Match Confidence
                  </div>
                </div>

                {/* AI Insights Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                      <span className="text-blue-400 font-medium">Recent Precedent</span>
                    </div>
                    <p className="text-sm text-foreground/90">
                      <strong>Martinez v. StartupCo (2024)</strong> - Similar non-compete dispute ruled in employee's favor. 
                      Key argument: geographic overreach in tech sector.
                    </p>
                  </div>
                  
                  <div className="bg-teal-500/10 border border-teal-500/20 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-2 h-2 bg-teal-400 rounded-full mr-2"></div>
                      <span className="text-teal-400 font-medium">Strategy Suggestion</span>
                    </div>
                    <p className="text-sm text-foreground/90">
                      Focus on industry standard practices and demonstrate narrow scope of role. 
                      Precedent suggests 67% success rate for this approach.
                    </p>
                  </div>
                </div>

                {/* Action Items */}
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-6">
                  <h4 className="text-purple-400 font-medium mb-4">Recommended Actions</h4>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <div className="w-4 h-4 bg-purple-400/20 rounded mr-3 flex items-center justify-center">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      </div>
                      Draft motion citing Martinez precedent (template generated)
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-4 h-4 bg-purple-400/20 rounded mr-3 flex items-center justify-center">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      </div>
                      Request industry standard analysis from opposing counsel
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-4 h-4 bg-purple-400/20 rounded mr-3 flex items-center justify-center">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      </div>
                      Schedule client meeting to discuss settlement probability (73%)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
