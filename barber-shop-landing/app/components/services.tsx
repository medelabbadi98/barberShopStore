import Image from 'next/image';
import Link from 'next/link';

const BarberServices = () => {
  return (
    <section className="py-16 bg-[#F8F5EF]">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl text-black font-bold mb-4">
              YOUR PERSONAL BARBER SERVICE <br /> AT YOUR HOME
            </h2>
            <p className="text-black mb-6">
              Nulla egestas sapien integer mi fermentum tellus tristique consequat
              pulvinar sagittis adipiscing egestas purus et mi tempus semper id vel
              orci eu magna in senectus sit eget justo eget.
            </p>
            <div className="flex items-center space-x-12">
              <div>
                <h3 className="text-black text-3xl font-bold">99%</h3>
                <p className="text-black">Customer Satisfaction</p>
              </div>
              <div>
                <h3 className="text-black text-3xl font-bold">10+</h3>
                <p className="text-black">Years of Experience</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/Image.png" 
              alt="Barber Service"
              layout="responsive"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-black text-3xl font-bold text-center mb-4">BROWSE OUR SERVICES</h2>
          <p className="text-black text-center max-w-2xl mx-auto mb-12">
            Nulla egestas sapien integer mi fermentum tellus tristique consequat
            pulvinar sagittis adipiscing egestas purus et mi tempus semper id vel
            orci eu magna in senectus sit eget justo eget.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 bg-white gap-8 mb-12">
            {[
              { icon: '/Adulthaircutimg.png', title: 'Adult Haircut', price: '39 USD' },
              { icon: '/Kidshaircutimg.png', title: 'Kids Haircut', price: '19 USD' },
              { icon: '/beardtrimimg.png', title: 'Beard Trim', price: '29 USD' },
              { icon: '/neckshave.png', title: 'Neck Shave', price: '39 USD' },
              { icon: '/Scalpmoisturizing.png', title: 'Scalp Moisturizing', price: '10 USD' },
              { icon: '/beardicon.png', title: 'Beard Grooming', price: '49 USD' },
            ].map((service, index) => (
              <div
                key={index}
                className=" p-6 rounded-lg flex items-center space-x-4"
              >
                <div className='w-12 h-12 flex-shrink-0'> <Image
                    src={service.icon}
                    width={48}
                    height={48}
                    alt=""
                    /></div>
                   
                <div>
                  <h3 className="text-black text-lg font-bold">{service.title}</h3>
                  <p className="text-black mt-2">{service.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="#appointment" className="bg-dark-vanilla text-black font-bold px-6 py-3  rounded-lg shadow hover:bg-gray-800 transition duration-200">
              BOOK AN APPOINTMENT
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BarberServices;
