import Header from '@/app/components/header'
import Hero from '@/app/components/hero'
import AppointmentForm from '@/app/components/appointment-form'
import Footer from '@/app/components/footer'
import WhyChooseUs from './components/whychooseus'
import BarberServices from './components/services'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <BarberServices/>
        <WhyChooseUs/>
        <AppointmentForm />
      </main>
      <Footer />
    </div>
  )
}

