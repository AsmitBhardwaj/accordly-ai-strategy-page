import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Login functionality requires Supabase",
      description: "Connect to Supabase to enable authentication",
    });
    
    setIsLoading(false);
  };

  const handleOAuthLogin = (provider: string) => {
    toast({
      title: `${provider} login requires Supabase`,
      description: "Connect to Supabase to enable OAuth authentication",
    });
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-12">
          <Link to="/" className="text-3xl font-black text-white">
            ACCORDLY
          </Link>
          <p className="text-muted-foreground mt-2 text-sm">
            Where Contracts Think Ahead
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-black border-2 border-white p-8">
          <h1 className="text-2xl font-black mb-6 text-center">LOG IN</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white font-bold">
                EMAIL ADDRESS
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="h-12 bg-black border-2 border-white text-white placeholder:text-gray-400 focus:border-blue-400 rounded-none"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-white font-bold">
                PASSWORD
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="h-12 bg-black border-2 border-white text-white placeholder:text-gray-400 focus:border-blue-400 rounded-none"
                required
              />
            </div>

            <div className="text-right">
              <Link 
                to="/forgot-password" 
                className="text-sm text-blue-400 hover:text-blue-300 font-medium"
              >
                Forgot Password?
              </Link>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-white text-black border-2 border-white hover:bg-blue-400 hover:text-white hover:border-blue-400 font-bold rounded-none transition-all duration-300"
            >
              {isLoading ? "LOGGING IN..." : "LOG IN"}
            </Button>
          </form>

          {/* OAuth Buttons */}
          <div className="mt-6 space-y-3">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-600" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-black px-4 text-gray-400">OR</span>
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              onClick={() => handleOAuthLogin('Google')}
              className="w-full h-12 border-2 border-white text-white hover:bg-white hover:text-black font-bold rounded-none"
            >
              CONTINUE WITH GOOGLE
            </Button>

            <Button
              type="button"
              variant="outline"
              onClick={() => handleOAuthLogin('GitHub')}
              className="w-full h-12 border-2 border-white text-white hover:bg-white hover:text-black font-bold rounded-none"
            >
              CONTINUE WITH GITHUB
            </Button>
          </div>

          {/* Sign Up Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Don't have an account?{' '}
              <Link 
                to="/signup" 
                className="text-white font-bold hover:text-blue-400 transition-colors"
              >
                → SIGN UP
              </Link>
            </p>
          </div>
        </div>

        {/* Brand Message */}
        <div className="text-center mt-8">
          <p className="text-xs text-gray-500">
            Log in to Accordly and draft, review, and manage your contracts — faster, smarter, and more secure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;