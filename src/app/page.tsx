"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardFive from '@/components/sections/pricing/PricingCardFive';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="largeSmall"
        background="circleGradient"
        cardStyle="soft-shadow"
        primaryButtonStyle="flat"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Learn",
          id: "features",
        },
        {
          name: "Verify",
          id: "product",
        },
        {
          name: "Report",
          id: "contact",
        },
      ]}
      brandName="CyberGuard"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlay
      title="Stay Secure in the Digital Frontier"
      description="Learn to identify fake apps, phishing websites, and online scams before they compromise your data."
      buttons={[
        {
          text: "Start Learning",
          href: "#features",
        },
        {
          text: "Check a Link",
          href: "#product",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/illustration-circle-with-abstract-neon-light-effects-great-futuristic-background_181624-32778.jpg"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/girl-student-is-talking-phone-home-conversation-phone_169016-67688.jpg",
          alt: "A girl student is talking on the phone at home Conversation on the phone",
        },
        {
          src: "http://img.b2bpic.net/free-photo/photo-serious-woman-concentrated-tablet-screen-draws-pictures-with-stylus-poses-wooden-bench-dressed-hoodie-spends-leisure-time-outdoors-against-blurred-background-works-freelance_273609-57010.jpg",
          alt: "Photo of serious woman concentrated at tablet screen",
        },
        {
          src: "http://img.b2bpic.net/free-photo/man-portrait-posing-loft-modern-space_158595-5362.jpg",
          alt: "Man portrait posing in a loft modern space",
        },
        {
          src: "http://img.b2bpic.net/free-photo/happy-laughing-senior-woman-talking-grandchildren_1262-18502.jpg",
          alt: "Happy laughing senior woman talking to grandchildren",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-smiley-man-library_23-2149204750.jpg",
          alt: "Close up smiley man at library",
        },
      ]}
      avatarText="Join 10,000+ protected users"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={true}
      heading={[
        {
          type: "text",
          content: "Our Mission to Prevent Digital Fraud",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardMedia
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",
          title: "Phishing Websites",
          description: "Identify fraudulent domains and deceptive URLs.",
          imageSrc: "http://img.b2bpic.net/free-photo/futurism-perspective-digital-nomads-lifestyle_23-2151252420.jpg",
        },
        {
          id: "f2",
          title: "OTP & UPI Scams",
          description: "Learn how to protect your banking and transaction security.",
          imageSrc: "http://img.b2bpic.net/free-photo/cybersecurity-data-protection-concept-futuristic-shield-lock_23-2151998492.jpg",
        },
        {
          id: "f3",
          title: "Fake Mobile Apps",
          description: "Recognize signs of malicious applications in app stores.",
          imageSrc: "http://img.b2bpic.net/free-photo/online-payment-security-concept-3d-phone-bill_107791-16722.jpg",
        },
      ]}
      title="Awareness Modules"
      description="Master the skills to stay safe online."
    />
  </div>

  <div id="product" data-section="product">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          brand: "Bank",
          name: "Official Login Page",
          price: "Secure",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/security-breach-burning-smartphone-neon-sign_23-2152004104.jpg",
        },
        {
          id: "p2",
          brand: "Bank",
          name: "Phishing Landing Page",
          price: "Malicious",
          rating: 1,
          imageSrc: "http://img.b2bpic.net/free-vector/mobile-banking_24877-49207.jpg",
        },
        {
          id: "p3",
          brand: "App",
          name: "Official App Store",
          price: "Verified",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/online-shopping-concept_23-2151896810.jpg",
        },
        {
          id: "p4",
          brand: "App",
          name: "Third-party APK",
          price: "Suspicious",
          rating: 1,
          imageSrc: "http://img.b2bpic.net/free-photo/3d-technology-digital-wave-particle-background_1048-12583.jpg",
        },
      ]}
      title="Real vs Fake Comparison"
      description="Side-by-side analysis of genuine vs fraudulent platforms."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "basic",
          tag: "Beginner",
          price: "Free",
          period: "Module 1",
          description: "Basic security principles quiz.",
          button: {
            text: "Take Quiz",
          },
          featuresTitle: "Included",
          features: [
            "Basic phishing detection",
            "OTP safety tips",
          ],
        },
        {
          id: "pro",
          tag: "Expert",
          price: "Free",
          period: "Full Access",
          description: "Full advanced modules and assessment.",
          button: {
            text: "Start Test",
          },
          featuresTitle: "Included",
          features: [
            "Advanced UPI scenarios",
            "Full site audit simulation",
          ],
        },
      ]}
      title="Interactive Assessment"
      description="Test your knowledge with our scenario-based quizzes."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          name: "Sarah J.",
          role: "Student",
          company: "University of Tech",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/girl-headphones-works-laptop-girl-with-laptop_169016-65975.jpg",
        },
        {
          id: "t2",
          name: "Mark D.",
          role: "Owner",
          company: "Local Retail",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/business-woman-talking-phone-staying-late-night-office_1303-27087.jpg",
        },
        {
          id: "t3",
          name: "Elena R.",
          role: "User",
          company: "Home Shopper",
          rating: 4,
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-albino-woman-holding-smartphone_23-2150171859.jpg",
        },
        {
          id: "t4",
          name: "James L.",
          role: "IT Consultant",
          company: "CyberOps",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/interior-designer-working-out-office_23-2150379242.jpg",
        },
        {
          id: "t5",
          name: "Maria S.",
          role: "Educator",
          company: "Online Academy",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-portrait-caucasian-happy-teacher-glasses_74855-9736.jpg",
        },
      ]}
      kpiItems={[
        {
          value: "10k+",
          label: "Users Protected",
        },
        {
          value: "500+",
          label: "Scams Reported",
        },
        {
          value: "4.9",
          label: "Avg Rating",
        },
      ]}
      title="User Experiences"
      description="Learn from others who have navigated digital threats."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "Is the check tool 100% accurate?",
          content: "Our tool provides a risk score but cannot guarantee 100% accuracy. Always cross-verify official sources.",
        },
        {
          id: "q2",
          title: "Can I report a new scam?",
          content: "Yes, use the Report Scam section to submit findings which our team will verify.",
        },
        {
          id: "q3",
          title: "Is this platform free?",
          content: "Yes, CyberGuard is entirely free and designed for community safety.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/abstract-cybersecurity-concept-design_23-2151841648.jpg"
      mediaAnimation="slide-up"
      title="Frequently Asked Questions"
      description="Find quick answers about our detection tools and awareness modules."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "radial-gradient",
      }}
      tag="Get Involved"
      title="Report a Scam Platform"
      description="Have you encountered a suspicious website or app? Help us protect others by reporting it today."
      buttons={[
        {
          text: "Submit Report",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="CyberGuard"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "Government Resources",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
