import HeroSmooth from "@/components/HeroSmooth";
import HeroCTASection from "@/components/sections/HeroCTASection";
import StorySectionEnhanced from "@/components/sections/StorySectionEnhanced";
import PhilosophySectionRefined from "@/components/sections/PhilosophySectionRefined";
import BenefitsSectionRefined from "@/components/sections/BenefitsSectionRefined";
import ClassesSectionWithTabs from "@/components/sections/ClassesSectionWithTabs";
import PhotoGallerySection from "@/components/sections/PhotoGallerySection";
import CommunitySection from "@/components/sections/CommunitySection";
import InstructorsSection from "@/components/sections/InstructorsSection";
import CTASection from "@/components/sections/CTASection";
import { getHomePageContent } from "@/lib/sanity-queries";
import { urlForImage } from "@/sanity/lib/image";

export default async function Home() {
  // Fetch content from Sanity
  const content = await getHomePageContent();
  
  // Fallback content if Sanity fails or no content exists
  const fallback = {
    hero: {
      video: undefined,
      image: undefined,
      inspirationalText: 'תנועו מתוך אהבה, לא מתוך פחד',
      transitionText: 'זוזו בדרך שלכם',
      ctaButtonText: 'גלו איזה אימון מתאים לכם',
      ctaButtonLink: '/questionnaire'
    },
    contentBox: {
      logo: undefined,
      subtitle: 'פילאטיס • יוגה • תנועה • קהילה',
      location: 'אביחיל',
      secondaryCtaText: 'רוצה לשמוע עוד',
      secondaryCtaLink: '/contact'
    }
  };

  // Use Sanity content if available, otherwise use fallback
  const heroData = content?.hero || fallback.hero;
  const contentBoxData = content?.contentBox || fallback.contentBox;
  
  // Process image URLs from Sanity
  const videoUrl = heroData.video?.asset?.url || '/videos/tal.MOV';
  const imageUrl = heroData.image?.asset ? urlForImage(heroData.image)?.url() : undefined;
  const logoUrl = contentBoxData.logo?.asset ? urlForImage(contentBoxData.logo)?.url() : '/images/LOGO.png';

  return (
    <>
      <section id="hero">
        <HeroSmooth
        // Media - prioritize video, then Sanity image, then local video
        videoUrl={heroData.video?.asset?.url || (!imageUrl ? '/videos/tal.MOV' : undefined)}
        imageUrl={imageUrl}
        imageAlt={heroData.image?.alt}
        
        // Animation texts from Sanity
        inspirationalText={heroData.inspirationalText}
        transitionText={heroData.transitionText}
        ctaButtonText={heroData.ctaButtonText}
        ctaButtonLink={heroData.ctaButtonLink}
        
        // Content box from Sanity
        logoUrl={logoUrl}
        subtitle={contentBoxData.subtitle}
        location={contentBoxData.location}
        secondaryCtaText={contentBoxData.secondaryCtaText}
        secondaryCtaLink={contentBoxData.secondaryCtaLink}
        />
      </section>
      
      <HeroCTASection />
      
      <section id="story">
        <StorySectionEnhanced />
      </section>
      
      <section id="classes">
        <ClassesSectionWithTabs />
      </section>
      
      <section id="philosophy">
        <PhilosophySectionRefined />
      </section>
      
      <InstructorsSection />
      
      <section id="benefits">
        <BenefitsSectionRefined />
      </section>
      
      <section id="gallery">
        <PhotoGallerySection />
      </section>
      
      <section id="community">
        <CommunitySection />
      </section>
      
      <section id="contact">
        <CTASection />
      </section>
    </>
  );
}