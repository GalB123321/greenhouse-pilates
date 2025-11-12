import AboutHero from '@/components/about/AboutHero'
import AboutStory from '@/components/about/AboutStory'
import AboutPhilosophy from '@/components/about/AboutPhilosophy'
import AboutValues from '@/components/about/AboutValues'
import AboutTeam from '@/components/about/AboutTeam'
import AboutCommunity from '@/components/about/AboutCommunity'
import AboutCTA from '@/components/about/AboutCTA'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <AboutStory />
      <AboutPhilosophy />
      <AboutValues />
      <AboutTeam />
      <AboutCommunity />
      <AboutCTA />
    </main>
  )
}