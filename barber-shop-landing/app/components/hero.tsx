import Link from 'next/link'
import { Button } from '@/app/components/ui/button'

export default function Hero() {
  return (
    <section className="bg-[url('/barber-shop.jpg')] bg-cover bg-center py-32 text-white">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Classic Cuts</h1>
        <p className="text-xl mb-8">Experience the art of grooming</p>
        <Button size="lg">
          <Link href="#appointment">Book an Appointment</Link>
        </Button>
      </div>
    </section>
  )
}

