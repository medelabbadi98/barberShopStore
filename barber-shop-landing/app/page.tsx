import Header from '@/app/components/header'
import Hero from '@/app/components/hero'
import About from '@/app/components/about'
import AppointmentForm from '@/app/components/appointment-form'
import Footer from '@/app/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <AppointmentForm />
      </main>
      <Footer />
    </div>
  )
}

