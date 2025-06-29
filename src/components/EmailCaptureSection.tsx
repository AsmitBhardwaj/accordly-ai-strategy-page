
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
    <section className="py-24 px-6 bg-gray-100">
      <div className="container mx-auto max-w-2xl">
        {isSubmitted ? (
          <div className="text-center animate-scale-in">
            <h3 className="text-3xl font-black text-black mb-4">
              REQUEST RECEIVED
            </h3>
            <p className="text-lg text-gray-600">
              We'll be in touch soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-black">
              JOIN THE FUTURE
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-14 px-4 border-4 border-black rounded-none text-black placeholder:text-gray-500 focus:outline-none focus:ring-0 focus:border-black"
                required
              />
              <Button
                type="submit"
                className="h-14 px-8 bg-black text-white border-4 border-black hover:bg-white hover:text-black font-bold rounded-none transition-all duration-300"
              >
                SUBMIT
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailCaptureSection;
