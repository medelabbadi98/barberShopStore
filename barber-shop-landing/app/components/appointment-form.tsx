"use client"

import { useState, FormEvent } from 'react'
import { Button } from '@/app/components/ui/button'
import { Input } from '@/app/components/ui/input'
import { Label } from '@/app/components/ui/label'
import { Select } from '@/app/components/ui/select'
import { Toast, useToast } from '@/app/components/ui/toast'

export default function AppointmentForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [service, setService] = useState('')
  const { toast, showToast, hideToast } = useToast()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    console.log({ name, email, date, service })
    showToast('Appointment Booked! We\'ll see you soon!')
    // Reset form
    setName('')
    setEmail('')
    setDate('')
    setService('')
  }

  return (
    <section id="appointment" className="py-16 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Book an Appointment</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="date">Date</Label>
              <Input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="service">Service</Label>
              <Select id="service" value={service} onChange={(e) => setService(e.target.value)} required>
                <option value="">Select a service</option>
                <option value="haircut">Haircut</option>
                <option value="shave">Shave</option>
                <option value="beard-trim">Beard Trim</option>
                <option value="hair-color">Hair Color</option>
              </Select>
            </div>
            <Button type="submit" className="w-full">Book Appointment</Button>
          </div>
        </form>
      </div>
      {toast && <Toast message={toast.message} onClose={hideToast} />}
    </section>
  )
}

