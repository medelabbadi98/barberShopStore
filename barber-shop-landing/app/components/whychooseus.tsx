import Image from 'next/image';

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-[#F8F5EF]">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl text-black font-bold mb-4">WHY CHOOSE US</h2>
        <p className="text-black max-w-2xl mx-auto mb-12">
          Nulla egestas sapien integer mi fermentum tellus tristique consequat
          pulvinar sagittis adipiscing egestas purus et mi tempus semper id vel
          orci eu magna in senectus sit eget justo eget.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <span className="inline-flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full">
                📄
              </span>
            </div>
            <h3 className="text-xl text-black font-bold">LICENSED</h3>
            <p className="text-black text-center mt-2">
              Our team of licensed and insured barbers follow strict cleanliness
              and sanitation guidelines for a safe and comfortable experience.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <span className="inline-flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full">
                🧔
              </span>
            </div>
            <h3 className="text-xl text-black font-bold">MASTERS</h3>
            <p className="text-black text-center mt-2">
              Our barbers are passionate about their craft and aim to provide
              high-quality haircuts for every client.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <span className="inline-flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full">
                ✅
              </span>
            </div>
            <h3 className="text-xl text-black font-bold">TRUSTED</h3>
            <p className="text-black text-center mt-2">
              We have a strong online reputation with a 5-star rating from over
              100 thousand satisfied clients.
            </p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8 md:flex md:items-center md:justify-between">
          <div className="flex-1 text-center md:text-left">
            <h4 className="text-3xl font-bold text-black mb-2">GOOGLE</h4>
            <p className="text-4xl font-bold text-yellow-500">4.9</p>
            <p className="text-gray-600">196 reviews</p>
          </div>

          <div className="flex flex-col items-center flex-1 mt-8 md:mt-0">
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-gray-200 mb-4">
              <Image
                src="/Image.png" 
                alt="Reviewer"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h5 className="text-lg text-black font-semibold mb-2">
              THE BEST BARBER SERVICES
            </h5>
            <p className="text-black text-sm text-center">
              Et proin ut in dignissim sem non a nullam magna lectus urna et dui
              quam tellus imperdiet sit purus at fringilla scelerisque diam
              amet fermentum orci fringilla aliquet nulla lectus erat eu auctor.
            </p>
            <p className="mt-4 text-black font-bold">SAM HOUSTON</p>
          </div>

          {/* Review Right */}
          <div className="flex-1 text-center md:text-right">
            <h4 className="text-3xl text-black font-bold  mb-2">
              TRIPADVISOR
            </h4>
            <p className="text-4xl font-bold text-yellow-500">5.0</p>
            <p className="text-black">196 reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
