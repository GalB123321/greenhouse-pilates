import ContactHero from '@/components/contact/ContactHero'
import ContactInfo from '@/components/contact/ContactInfo'
import ContactGallery from '@/components/contact/ContactGallery'
import ContactForm from '@/components/contact/ContactForm'
import ContactMap from '@/components/contact/ContactMap'

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHero />
      <ContactInfo />
      <ContactGallery />
      <ContactForm />
      <ContactMap />
    </main>
  )
}