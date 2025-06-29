
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const EmailCaptureSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const validateWorkEmail = (email: string) => {
    const workEmailPattern = /^[^\s@]+@[^\s@]+\.(com|org|edu|gov|net)$/i;
    const personalDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'];
    const domain = email.split('@')[1]?.toLowerCase();
    
    return workEmailPattern.test(email) && !personalDomains.includes(domain);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      if (validateWorkEmail(email)) {
        console.log('Email submitted:', email);
        setIsSubmitted(true);
        setIsValidEmail(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setEmail('');
        }, 3000);
      } else {
        setIsValidEmail(false);
      }
    }
  };

  return (
    <section className="py-24 px-6 bg-gray-900">
      <div className="container mx-auto max-w-2xl">
        {isSubmitted ? (
          <div className="text-center animate-scale-in">
            <h3 className="text-3xl font-black text-white mb-4">
              REQUEST RECEIVED
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              We'll be in touch soon.
            </p>
            <div className="text-sm text-green-400 bg-green-900 border border-green-400 p-4 rounded">
              Welcome to the future of legal AI
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-white">
              JOIN THE FUTURE
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-4">
              <Input
                type="email"
                placeholder="Enter work email (company domain required)"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setIsValidEmail(true);
                }}
                className={`flex-1 h-14 px-4 border-4 rounded-none bg-black text-white placeholder:text-gray-400 focus:outline-none focus:ring-0 transition-all duration-300 ${
                  isValidEmail 
                    ? 'border-white focus:border-blue-400' 
                    : 'border-red-400 focus:border-red-400'
                }`}
                required
              />
              <Button
                type="submit"
                className="h-14 px-8 bg-white text-black border-4 border-white hover:bg-blue-400 hover:text-white hover:border-blue-400 font-bold rounded-none transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
              >
                REQUEST ACCESS
              </Button>
            </div>

            {!isValidEmail && (
              <div className="text-red-400 text-sm mb-4 bg-red-900 border border-red-400 p-3 rounded">
                Please enter a valid work email (company domain required)
              </div>
            )}

            <p className="text-sm text-gray-400 mt-4">
              We won't spam. Just early access + legal AI insights.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailCaptureSection;
