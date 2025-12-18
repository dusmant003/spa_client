import { useEffect } from "react";
import AOS from "aos";

export default function AboutUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10
        grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* LEFT IMAGE + CARDS */}
        <div className="relative flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">

          {/* Image */}
          <div
            data-aos="fade-right"
            className="rounded-3xl overflow-hidden w-full sm:w-[320px] md:w-[360px]"
          >
            <img
              src="https://bestwpware.com/html/tf/ascent/assets/img/about/about-1.png"
              alt="students"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Cards */}
          <div className="flex flex-col gap-5 sm:gap-6 justify-center">

            {/* Academy Card */}
            <div
              data-aos="fade-up"
              className="bg-[#fff1e6] rounded-2xl p-5 sm:p-6 shadow-lg
              w-full sm:w-64"
            >
              <div className="text-teal-500 text-2xl mb-3">
                📈
              </div>
              <h3 className="text-lg sm:text-xl font-semibold">
                Academy
              </h3>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                Learning Ladder School
              </p>
            </div>

            {/* Experience Card */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-xl
              w-full sm:w-64"
            >
              <h3 className="text-3xl sm:text-4xl font-bold text-teal-500">
                10+
              </h3>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                years of experiences
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div data-aos="fade-left" className="text-center lg:text-left">
          <p className="text-teal-500 font-semibold mb-3 sm:mb-4">
            About Us
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl
            font-bold leading-snug mb-5 sm:mb-6">
            Unlocking Potential, One Child <br className="hidden sm:block" />
            At A Just Time In School
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8
            text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipiscing elit platea
            pharetra, nostra mattis hendrerit proin mollis pretium facilisi
            in, ligula volutpat lobortis molestie sed per accumsan conubia.
            Sed dis loren ipsum dummy text
          </p>

          <button
            data-aos="zoom-in"
            className="px-6 sm:px-8 py-3 sm:py-4
            border border-gray-300 rounded-xl font-semibold
            transition-all duration-300
            hover:bg-black hover:text-white hover:-translate-y-1"
          >
            Read More
          </button>
        </div>

      </div>
    </section>
  );
}
