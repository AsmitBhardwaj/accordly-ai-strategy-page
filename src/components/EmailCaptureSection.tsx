
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const EmailCaptureSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Email submitted:', email);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
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
            <p className="text-lg text-gray-300">
              We'll be in touch soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-white">
              JOIN THE FUTURE
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-4">
              <Input
                type="email"
                placeholder="Enter work email to join private beta"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-14 px-4 border-4 border-white rounded-none bg-black text-white placeholder:text-gray-400 focus:outline-none focus:ring-0 focus:border-white"
                required
              />
              <Button
                type="submit"
                className="h-14 px-8 bg-white text-black border-4 border-white hover:bg-black hover:text-white font-bold rounded-none transition-all duration-300 transform hover:scale-105"
              >
                REQUEST ACCESS
              </Button>
            </div>
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
