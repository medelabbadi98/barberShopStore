import Link from 'next/link'
import { Button } from '@/app/components/ui/button'

export default function Header() {
  return (
    <header className="bg-background py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Classic Cuts
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="#about" className="text-foreground hover:text-primary">About</Link></li>
            <li><Link href="#services" className="text-foreground hover:text-primary">Services</Link></li>
            <li><Link href="#appointment" className="text-foreground hover:text-primary">Book Now</Link></li>
          </ul>
        </nav>
        <Button variant="outline">Contact</Button>
      </div>
    </header>
  )
}

