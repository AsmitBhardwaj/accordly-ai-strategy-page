import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/HeroSection';
import SocialProofSection from '@/components/SocialProofSection';
import FeatureSection from '@/components/FeatureSection';
import DemoSection from '@/components/DemoSection';
import TestimonialSection from '@/components/TestimonialSection';
import EmailCaptureSection from '@/components/EmailCaptureSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [company1, setCompany1] = useState('');
  const [company2, setCompany2] = useState('');
  const [scope, setScope] = useState('');
  const [jurisdiction, setJurisdiction] = useState('USA');
  const [contract, setContract] = useState('');
  const [docxLink, setDocxLink] = useState('');
  const [loading, setLoading] = useState(false);

  const generateContract = async () => {
    const query = `company_1=${encodeURIComponent(company1)}&company_2=${encodeURIComponent(company2)}&scope=${encodeURIComponent(scope)}&jurisdiction=${encodeURIComponent(jurisdiction)}`;
    setLoading(true);

    try {
      const res = await fetch(`http://localhost:8000/generate/nda?${query}`);
      const data = await res.json();
      setContract(data.contract);
      setDocxLink(`http://localhost:8000/export/nda-docx?${query}`);
    } catch (err) {
      console.error('Failed to generate contract:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b-4 border-white">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-black text-white">
            ACCORDLY
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Button 
              variant="ghost" 
              className="text-white hover:text-blue-400 font-bold"
              onClick={() => window.location.href = '/generate'}
            >
              GENERATE CONTRACT
            </Button>
            <Button 
              variant="ghost" 
              className="text-white hover:text-blue-400 font-bold"
            >
              REVIEW
            </Button>
            <Button 
              variant="ghost" 
              className="text-white hover:text-blue-400 font-bold"
            >
              CLAUSE LIBRARY
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-black font-bold rounded-none"
              onClick={() => window.location.href = '/login'}
            >
              SIGN IN
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Contract Generator Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto bg-gray-900 p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-4">Generate NDA</h2>
          <input value={company1} onChange={(e) => setCompany1(e.target.value)} placeholder="Company 1" className="w-full p-2 mb-2 bg-gray-800 rounded" />
          <input value={company2} onChange={(e) => setCompany2(e.target.value)} placeholder="Company 2" className="w-full p-2 mb-2 bg-gray-800 rounded" />
          <input value={scope} onChange={(e) => setScope(e.target.value)} placeholder="Scope of agreement" className="w-full p-2 mb-2 bg-gray-800 rounded" />
          <input value={jurisdiction} onChange={(e) => setJurisdiction(e.target.value)} placeholder="Jurisdiction (default: USA)" className="w-full p-2 mb-4 bg-gray-800 rounded" />
          <Button className="bg-blue-600 hover:bg-blue-700 font-bold py-2 px-4 rounded disabled:opacity-50" onClick={generateContract} disabled={loading}>
            {loading ? 'Generating...' : 'Generate NDA'}
          </Button>
          {contract && (
            <>
              <div className="mt-4 p-4 bg-gray-800 rounded overflow-auto max-h-96">
                <pre className="whitespace-pre-wrap text-sm">{contract}</pre>
              </div>
              <a href={docxLink} className="mt-4 inline-block underline text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">Download .docx</a>
            </>
          )}
        </div>
      </div>

      {/* Social Proof Section */}
      <SocialProofSection />

      {/* Feature Section */}
      <FeatureSection />

      {/* Demo Section (now Testimonials) */}
      <DemoSection />

      {/* Testimonial Section (now CTA) */}
      <TestimonialSection />

      {/* Email Capture Section */}
      <EmailCaptureSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
