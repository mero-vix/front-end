import { FooterNewsletter } from "@/components/ui/footer-newsletter";

export function Footer() {
  const customLogo = (
    <a href="#home" className="flex items-center">
      <img
        src="/images/mero-vix_logo_footer.svg?v=2"
        alt="VixIQ X1 footer logo"
        className="h-28 md:h-32 w-auto rounded-lg filter brightness-150 contrast-125 transition-transform hover:scale-105"
      />
    </a>
  );

  return (
    <footer className="relative border-t border-white/5 mt-20">
      <div className="absolute inset-0 -z-10 bg-[#412D15]" />
      <FooterNewsletter logo={customLogo} />
    </footer>
  );
}
