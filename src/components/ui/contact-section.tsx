import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

interface ContactSectionProps {
  title?: string;
  mainMessage?: string;
  contactEmail?: string;
  backgroundImageSrc?: string;
  onSubmit?: (data: any) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  title = "We can turn your dream project into reality",
  mainMessage = "Let's talk! 👋",
  contactEmail = "hello@pixelperfect.com",
  backgroundImageSrc = "https://images.unsplash.com/photo-1742273330004-ef9c9d228530?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=900",
  onSubmit,
}) => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
    projectType: [] as string[],
  });
  const [sent, setSent] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (type: string, checked: boolean) => {
    setFormData((prev) => {
      const currentTypes = prev.projectType;
      if (checked) {
        return { ...prev, projectType: [...currentTypes, type] };
      } else {
        return { ...prev, projectType: currentTypes.filter((t) => t !== type) };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/maqzojro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSent(true);
        setFormData({
          name: '',
          email: '',
          message: '',
          projectType: [],
        });
        setTimeout(() => setSent(false), 4000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
      onSubmit?.(formData);
    }
  };

  const projectTypeOptions = [
    'Website', 'Mobile App', 'Web App', 'E-Commerce',
    'Brand Identity', '3D & Animation', 'Social Media Marketing',
    'Brand Strategy & Consulting', 'Other'
  ];

  return (
    <section id="contact" className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Background Image and Animated Bubbles */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out opacity-20"
        style={{ backgroundImage: `url(${backgroundImageSrc})` }}
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-sand/20 rounded-full animate-bubble opacity-0 blur-xl"
              style={{
                width: `${Math.random() * 200 + 100}px`,
                height: `${Math.random() * 200 + 100}px`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${Math.random() * 20 + 10}s`,
                top: `${Math.random() * 100}%`,
                '--rand-x-offset': Math.random() > 0.5 ? 1 : -1,
              } as React.CSSProperties}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-4 md:p-8 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl rounded-xl">
          <div className="flex flex-col justify-center p-4 lg:p-8">
            <span className="font-sub text-lg md:text-xl uppercase tracking-[0.25em] text-orange-500 font-semibold mb-6">
              Contact
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight drop-shadow-lg max-w-lg font-heading">
              {title}
            </h1>
            
            <div className="w-full h-80 md:h-[450px] rounded-2xl overflow-hidden shadow-xl border border-white/10 mt-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648718453!2d-73.98784368459418!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-700 opacity-80 hover:opacity-100"
              ></iframe>
            </div>
          </div>

          <div className="glass-strong p-6 md:p-8 rounded-2xl shadow-2xl border border-white/10">
            <h2 className="text-2xl font-bold text-foreground mb-6 font-heading">{mainMessage}</h2>

            <div className="mb-6">
              <p className="text-muted-foreground mb-2 text-sm uppercase tracking-wider">Mail us at</p>
              <a href={`mailto:${contactEmail}`} className="text-sand hover:underline font-medium text-lg">
                {contactEmail}
              </a>
              <div className="mt-4">
                <p className="text-muted-foreground text-sm">We’re available by email — send your request and we’ll reply quickly.</p>
              </div>
            </div>

            <hr className="my-6 border-white/10" />

            <form onSubmit={handleSubmit} className="space-y-6">
              <p className="text-muted-foreground text-sm uppercase tracking-wider">Leave us a brief message</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-xs uppercase tracking-wider text-muted-foreground">Your name</Label>
                  <Input id="name" name="name" className="bg-white/[0.03] border-white/10 focus:ring-sand/50" placeholder="Your name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs uppercase tracking-wider text-muted-foreground">Email</Label>
                  <Input id="email" name="email" type="email" className="bg-white/[0.03] border-white/10 focus:ring-sand/50" placeholder="Email" value={formData.email} onChange={handleChange} required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-xs uppercase tracking-wider text-muted-foreground">Briefly describe your project idea...</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Briefly describe your project idea..."
                  className="min-h-[80px] bg-white/[0.03] border-white/10 focus:ring-sand/50 resize-none"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-4">
                <p className="text-muted-foreground text-xs uppercase tracking-wider">I'm looking for...</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {projectTypeOptions.map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <Checkbox
                        id={option.replace(/\s/g, '-').toLowerCase()}
                        checked={formData.projectType.includes(option)}
                        onCheckedChange={(checked) => handleCheckboxChange(option, checked as boolean)}
                        className="border-white/20 data-[state=checked]:bg-sand data-[state=checked]:text-background"
                      />
                      <Label htmlFor={option.replace(/\s/g, '-').toLowerCase()} className="text-sm font-normal text-muted-foreground">
                        {option}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {sent && (
                <div className="flex items-center gap-3 rounded-xl border border-sand/30 bg-gradient-to-r from-sand/10 via-umber/10 to-cocoa/10 px-5 py-4 shadow-lg shadow-sand/10 animate-fadeIn">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sand/20 border border-sand/40">
                    <svg className="h-4 w-4 text-sand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-sand">Message sent successfully!</p>
                    <p className="text-xs text-muted-foreground mt-0.5">We'll get back to you as soon as possible.</p>
                  </div>
                </div>
              )}

              <Button type="submit" disabled={isSubmitting} className="w-full bg-sand text-background hover:bg-sand/90 font-medium py-6 text-md shadow-lg glow-sand">
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Sending...
                  </span>
                ) : "Send a message"}
              </Button>
            </form>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bubble {
          0% {
            transform: translateY(0) translateX(0) scale(0.5);
            opacity: 0;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-100vh) translateX(calc(var(--rand-x-offset) * 10vw)) scale(1.2);
            opacity: 0;
          }
        }
        .animate-bubble {
          animation: bubble var(--animation-duration, 15s) ease-in-out infinite;
          animation-fill-mode: forwards;
        }
      `}} />
    </section>
  );
};
