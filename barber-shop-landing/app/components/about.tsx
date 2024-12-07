/* eslint-disable react/no-unescaped-entities */
export default function About() {
    return (
      <section id="about" className="py-16 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Classic Cuts</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg mb-4">
                At Classic Cuts, we blend traditional barbering techniques with modern styles to give you the perfect look.
                Our skilled barbers are passionate about their craft and dedicated to providing exceptional service.
              </p>
              <p className="text-lg">
                Whether you're looking for a classic cut, a trendy style, or a luxurious shave, we've got you covered.
                Step into our shop and experience the difference at Classic Cuts.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/placeholder.svg?height=200&width=200" alt="Barber Shop Interior" className="rounded-lg" />
              <img src="/placeholder.svg?height=200&width=200" alt="Barber at Work" className="rounded-lg" />
              <img src="/placeholder.svg?height=200&width=200" alt="Haircut Example 1" className="rounded-lg" />
              <img src="/placeholder.svg?height=200&width=200" alt="Haircut Example 2" className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  