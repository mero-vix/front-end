import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

const COOKIE_CONSENT_KEY = "vixiq_cookie_consent";

function CookieConsentBanner({
  onAccept,
  onReject,
  rejected,
}: {
  onAccept: () => void;
  onReject: () => void;
  rejected: boolean;
}) {
  return (
    <div className="mb-8 rounded-3xl border border-white/10 bg-[#111111]/90 p-6 shadow-2xl shadow-black/40">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.32em] text-[#E1DCC9]" style={{ fontFamily: "var(--font-sub)" }}>
            Cookie consent required
          </p>
          <h2 className="text-2xl font-semibold text-white" style={{ fontFamily: "var(--font-heading)" }}>
            Please accept cookies to continue.
          </h2>
          <p className="text-sm leading-6 text-white/80" style={{ fontFamily: "var(--font-body)" }}>
            Accepting cookies hides this notification permanently. If you reject, the consent prompt will return every time this page is opened or refreshed.
          </p>
          {rejected ? (
            <p className="text-sm text-amber-300">You rejected cookies. The policy reminder will keep appearing until you accept.</p>
          ) : null}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={onAccept}
            className="inline-flex items-center justify-center rounded-full bg-sand px-6 py-3 text-sm font-semibold text-black transition-all hover:brightness-110"
          >
            Accept Cookies
          </button>
          <button
            type="button"
            onClick={onReject}
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
          >
            Reject Cookies
          </button>
        </div>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookies Policy | VixIQ X1" },
      {
        name: "description",
        content:
          "Read the VixIQ X1 Cookies Policy to understand how we use cookies, what data we collect, and how you can manage your cookie preferences.",
      },
    ],
  }),
  component: CookiesPolicy,
});

function CookiesPolicy() {
  const [showConsentBanner, setShowConsentBanner] = useState(true);
  const [rejected, setRejected] = useState(false);

  useEffect(() => {
    const storedConsent = typeof window !== "undefined" ? localStorage.getItem(COOKIE_CONSENT_KEY) : null;
    const accepted = storedConsent === "accepted";
    setShowConsentBanner(!accepted);
    setRejected(storedConsent === "rejected");
  }, []);

  const acceptCookies = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    }
    setShowConsentBanner(false);
    setRejected(false);
  };

  const rejectCookies = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem(COOKIE_CONSENT_KEY, "rejected");
    }
    setShowConsentBanner(true);
    setRejected(true);
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen bg-gradient-to-b from-[#000000] via-[#1F150C] to-[#412D15] text-white"
    >
      <Navbar />
      <section className="relative isolate overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl mb-6">
          <Link
            to="/"
            className="inline-flex items-center rounded-full border border-white/10 bg-gradient-to-r from-sand via-umber to-cocoa px-4 py-2 text-sm text-white transition-all hover:opacity-90 hover:scale-105 shadow-lg"
          >
            ← Back to homepage
          </Link>
        </div>

        {showConsentBanner ? (
          <CookieConsentBanner
            onAccept={acceptCookies}
            onReject={rejectCookies}
            rejected={rejected}
          />
        ) : null}

        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-[#1F150C]/95 p-8 shadow-2xl shadow-black/40 sm:p-12">
          <div className="space-y-6">
            <div className="max-w-3xl space-y-3">
              <p className="text-sm uppercase tracking-[0.32em] text-[#E1DCC9]" style={{ fontFamily: "var(--font-sub)" }}>
                Cookies Policy
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>
                Cookies Policy
              </h1>
              <p className="text-sm text-[#E1DCC9]" style={{ fontFamily: "var(--font-body)" }}>
                Last updated: June 11, 2026
              </p>
              <p className="text-base leading-8 text-white/80" style={{ fontFamily: "var(--font-body)" }}>
                This Cookies Policy explains what Cookies are and how We use them. You should read this policy so You can understand what type of cookies We use, or the information We collect using Cookies and how that information is used.
              </p>
              <p className="text-base leading-8 text-white/80" style={{ fontFamily: "var(--font-body)" }}>
                Cookies do not typically contain any information that personally identifies a user, but personal information that We store about You may be linked to the information stored in and obtained from Cookies. For further information on how We use, store and keep your personal data secure, see our Privacy Policy.
              </p>
              <p className="text-base leading-8 text-white/80" style={{ fontFamily: "var(--font-body)" }}>
                We do not store sensitive personal information, such as mailing addresses, account passwords, etc. in the Cookies We use.
              </p>
            </div>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                Interpretation and Definitions
              </h2>
              <div className="space-y-4 text-white/80" style={{ fontFamily: "var(--font-body)" }}>
                <p>The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                <h3 className="text-xl font-semibold text-white" style={{ fontFamily: "var(--font-sub)" }}>
                  Interpretation
                </h3>
                <p>For the purposes of this Cookies Policy:</p>
                <ul className="ml-5 list-disc space-y-3">
                  <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Cookies Policy) refers to MeroVix Technologies Inc, 350 Mission Street, Suite 600, San Francisco, CA 94105, USA.</li>
                  <li><strong>Cookies</strong> means small files that are placed on Your computer, mobile device or any other device by a website, containing details of your browsing history on that website among its many uses.</li>
                  <li><strong>Website</strong> refers to mero-vix.com, accessible from <a className="text-[#E1DCC9] underline" href="https://mero-vix.com" rel="external nofollow noopener" target="_blank">https://mero-vix.com</a>.</li>
                  <li><strong>You</strong> means the individual accessing or using the Website, or a company, or any legal entity on behalf of which such individual is accessing or using the Website, as applicable.</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                The use of the Cookies
              </h2>
              <div className="space-y-4 text-white/80" style={{ fontFamily: "var(--font-body)" }}>
                <h3 className="text-xl font-semibold text-white" style={{ fontFamily: "var(--font-sub)" }}>
                  Type of Cookies We Use
                </h3>
                <p>Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close your web browser.</p>
                <p>Where required by law, We will request your consent before using Cookies that are not strictly necessary. Strictly necessary Cookies are used to provide the Website and cannot be switched off in our systems.</p>
                <p>We use both session and persistent Cookies for the purposes set out below:</p>
                <ul className="ml-5 list-disc space-y-4">
                  <li>
                    <strong>Necessary / Essential Cookies</strong>
                    <p>Type: Session Cookies</p>
                    <p>Administered by: Us</p>
                    <p>Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.</p>
                  </li>
                  <li>
                    <strong>Functionality Cookies</strong>
                    <p>Type: Persistent Cookies</p>
                    <p>Administered by: Us</p>
                    <p>Purpose: These Cookies allow Us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.</p>
                  </li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                Your Choices Regarding Cookies
              </h2>
              <div className="space-y-4 text-white/80" style={{ fontFamily: "var(--font-body)" }}>
                <p>If You prefer to avoid the use of Cookies on the Website, first You must disable the use of Cookies in your browser and then delete the Cookies saved in your browser associated with the Website. You may use this option for preventing the use of Cookies at any time.</p>
                <p>If You do not accept Our Cookies, You may experience some inconvenience in your use of the Website and some features may not function properly.</p>
                <p>If You'd like to delete Cookies or instruct your web browser to delete or refuse Cookies, please visit the help pages of your web browser.</p>
                <ul className="ml-5 list-disc space-y-3">
                  <li><p>For the Chrome web browser, please visit this page from Google: <a className="text-[#E1DCC9] underline" href="https://support.google.com/accounts/answer/32050" rel="external nofollow noopener" target="_blank">https://support.google.com/accounts/answer/32050</a></p></li>
                  <li><p>For the Microsoft Edge browser, please visit this page from Microsoft: <a className="text-[#E1DCC9] underline" href="https://support.microsoft.com/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" rel="external nofollow noopener" target="_blank">https://support.microsoft.com/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09</a></p></li>
                  <li><p>For the Firefox web browser, please visit this page from Mozilla: <a className="text-[#E1DCC9] underline" href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored" rel="external nofollow noopener" target="_blank">https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored</a></p></li>
                  <li><p>For the Safari web browser, please visit this page from Apple: <a className="text-[#E1DCC9] underline" href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" rel="external nofollow noopener" target="_blank">https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac</a></p></li>
                </ul>
                <p>For any other web browser, please visit your web browser's official web pages.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                Changes to this Cookies Policy
              </h2>
              <div className="space-y-4 text-white/80" style={{ fontFamily: "var(--font-body)" }}>
                <p>We may update this Cookies Policy from time to time. The "Last updated" date at the top indicates when it was last revised.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                Contact Us
              </h2>
              <div className="space-y-4 text-white/80" style={{ fontFamily: "var(--font-body)" }}>
                <p>If you have any questions about this Cookies Policy, You can contact us:</p>
                <ul className="ml-5 list-disc space-y-2">
                  <li>By email: contact@mero-vix.com</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </motion.main>
  );
}
