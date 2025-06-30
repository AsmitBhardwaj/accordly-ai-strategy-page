import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  email: z
    .string()
    .email('Please enter a valid email address'),
});

type FormData = z.infer<typeof formSchema>;

const EarlyAccessForm = () => {
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (data: FormData) => {
    console.log('Early access request:', data.email);
    
    toast({
      title: "Request received!",
      description: "We'll be in touch soon with early access details.",
    });
    
    form.reset();
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white font-bold">Request Early Access</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email address"
                    className="h-12 bg-black border-2 border-white text-white placeholder:text-gray-400 focus:border-blue-400 rounded-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full h-12 bg-white text-black border-2 border-white hover:bg-blue-400 hover:text-white hover:border-blue-400 font-bold rounded-none transition-all duration-300"
          >
            REQUEST EARLY ACCESS
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default EarlyAccessForm;