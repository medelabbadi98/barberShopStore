import Image from 'next/image';

const AppointmentSection = () => {
  return (
    <section id="appointment" className="relative bg-gray-100">
     
      <div className="absolute inset-0 z-0">
        <Image
          src="/appopng.png" 
          alt="Appointment Background"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-wrap">
        {/* Left Section */}
        <div className="w-full md:w-1/2 text-white space-y-6 p-8 bg-black bg-opacity-50 rounded-lg">
          <h1 className="text-4xl font-bold">MAKE AN APPOINTMENT</h1>
          <p className="text-gray-300">
            Nulla egestas sapien integer mi fermentum tellus tristique
            consequat pulvinar sagittis adipiscing egestas purus et mi tempus
            semper id vel orci eu magna in senectus sit eget justo.
          </p>

          <div className="space-y-4">
            <div className="flex items-center">
              <span className="inline-flex items-center justify-center w-10 h-10 bg-white text-black rounded-full">
                📞
              </span>
              <p className="ml-4 text-lg">Give us a call: (475) 453 - 3465</p>
            </div>

            <div className="flex items-center">
              <span className="inline-flex items-center justify-center w-10 h-10 bg-white text-black rounded-full">
                📧
              </span>
              <p className="ml-4 text-lg">Send us an email: hello@example.com</p>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="w-full md:w-1/2 bg-white p-8 shadow-lg rounded-lg">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Subject"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Phone Number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Email Address"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Please type your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              BOOK AN APPOINTMENT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
