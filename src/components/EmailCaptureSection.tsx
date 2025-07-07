
import EarlyAccessForm from '@/components/EarlyAccessForm';

const EmailCaptureSection = () => {

  return (
    <section id="email-capture" className="py-24 px-6 bg-gray-900">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-12 text-white">
          JOIN THE FUTURE
        </h2>
        
        <EarlyAccessForm />
        
        <p className="text-sm text-gray-400 mt-6">
          We won't spam. Just early access + legal AI insights.
        </p>
      </div>
    </section>
  );
};

export default EmailCaptureSection;
