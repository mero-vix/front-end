import React from 'react';
import { Instagram, Linkedin, Twitter, Github } from 'lucide-react';
import { Link } from '@tanstack/react-router';

const footerColumns = [
  {
    title: 'Company',
    links: [
      { label: 'Home', href: '/#home' },
      { label: 'About', href: '/#about' },
      { label: 'Features', href: '/#features' },
      { label: 'Pricing', href: '/#pricing' },
      { label: 'Contact', href: '/#contact' },
    ],
  },
];

const legalLinks = [
  { text: 'Terms & Conditions', href: '/terms' },
  { text: 'Privacy Policy', href: '/privacy' },
  { text: 'Cookies Policy', href: '/cookies' },
];

const socialIcons = [
  { icon: <Instagram className="h-5 w-5" />, href: '#' },
  { icon: <Twitter className="h-5 w-5" />, href: '#' },
  { icon: <Linkedin className="h-5 w-5" />, href: '#' },
  { icon: <Github className="h-5 w-5" />, href: '#' },
];

const FORMSPREE_URL = 'https://formspree.io/f/mzdqvkzn';
const STORAGE_KEY = 'merovix_newsletter_subscribed';

function SubscribedMessage() {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-sand/30 bg-gradient-to-r from-sand/10 via-umber/10 to-cocoa/10 px-4 py-3 shadow-lg shadow-sand/10">
      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sand/20 border border-sand/40">
        <svg className="h-4 w-4 text-sand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div>
        <p className="text-sm font-semibold text-sand">Thank you for your subscription!</p>
        <p className="text-xs text-muted-foreground mt-0.5">You're now part of the Mero-Vix community.</p>
      </div>
    </div>
  );
}

function NewsletterForm() {
  const [email, setEmail] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [subscribed, setSubscribed] = React.useState(() =>
    typeof window !== 'undefined' && localStorage.getItem(STORAGE_KEY) === 'true'
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || subscribed) return;
    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        localStorage.setItem(STORAGE_KEY, 'true');
        setSubscribed(true);
        setEmail('');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (subscribed) return <SubscribedMessage />;

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-sand/40 focus:border-sand/40 transition-all"
          required
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-sand text-background rounded-xl px-4 py-2.5 font-medium shadow-lg hover:scale-[1.02] active:scale-95 transition-all glow-sand whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
              </svg>
              Subscribing...
            </>
          ) : 'Subscribe'}
        </button>
      </form>
  );
}

export function FooterNewsletter({ logo }: { logo?: React.ReactNode }) {
  return (
    <div className="relative w-full pt-20 pb-10">
      <div className="pointer-events-none absolute top-0 left-0 z-0 h-full w-full overflow-hidden">
        <div className="bg-sand absolute top-1/3 left-1/4 h-64 w-64 rounded-full opacity-[0.03] blur-3xl" />
        <div className="bg-sand absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full opacity-[0.03] blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="glass-strong mb-16 rounded-3xl p-8 md:p-12 border border-white/5">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-3xl font-bold md:text-4xl font-heading text-gradient">
                Stay ahead with Mero-Vix.
              </h3>
              <p className="text-muted-foreground mb-8 text-lg">
                Join thousands of operators who trust Mero-Vix for innovative business intelligence solutions.
              </p>
              <a
                href="/#features"
                className="inline-flex bg-sand text-background rounded-xl px-8 py-3 font-medium shadow-lg hover:scale-[1.02] active:scale-95 transition-all glow-sand"
              >
                VixIQ X1
              </a>
            </div>
            <div className="hidden justify-end md:flex">
              <div className="relative">
                <div className="bg-sand/10 absolute inset-0 rotate-6 rounded-2xl" />
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop"
                  alt="Mero-Vix Dashboard Analytics"
                  className="relative w-96 rounded-2xl object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <div className="mb-2 flex items-center space-x-2">
              {logo || (
                <span className="text-xl font-bold">Mero-Vix</span>
              )}
            </div>
            <p className="text-muted-foreground mb-6 text-sm">
              The generative AI intelligence layer for modern marketing teams.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="h-10 w-10 rounded-full glass grid place-items-center text-muted-foreground hover:text-foreground hover:border-sand/30 transition-colors"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          {footerColumns.map((col, index) => (
            <div key={col.title} className={index === 0 ? "lg:ml-16" : ""}>
              <h4 className="mb-5 text-base font-semibold text-foreground/90">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-sand transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Newsletter Column */}
          <div className="col-span-2 lg:col-span-2 lg:ml-8">
            <h4 className="mb-5 text-base font-semibold text-foreground/90">Newsletter</h4>
            <p className="text-muted-foreground mb-4 text-sm">
              Subscribe to our newsletter for the latest updates and exclusive insights.
            </p>
            <NewsletterForm />
          </div>
        </div>
        <div className="border-white/10 flex flex-col items-center justify-between border-t py-8 md:flex-row">
          <p className="text-muted-foreground mb-4 text-sm md:mb-0">
            © {new Date().getFullYear()} Mero-Vix. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {legalLinks.map((link) =>
              link.href.startsWith('/') ? (
                <Link
                  key={link.text}
                  to={link.href}
                  className="text-muted-foreground hover:text-sand text-sm transition-colors"
                >
                  {link.text}
                </Link>
              ) : (
                <a
                  key={link.text}
                  href={link.href}
                  className="text-muted-foreground hover:text-sand text-sm transition-colors"
                >
                  {link.text}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
