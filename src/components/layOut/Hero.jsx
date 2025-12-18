import { useEffect, useState } from "react";
import AOS from "aos";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Where Education",
    highlight: "Meets Imagination",
    desc: "Welcome to Escada where every child's potential is nurtured through quality education and positive values.",
    image: "https://cdn.pixabay.com/photo/2018/06/10/11/15/schultute-3466185_1280.jpg",
  },
  {
    title: "Building Bright",
    highlight: "Young Minds",
    desc: "A safe and inspiring place for children to explore, learn, and grow together.",
    image: "https://cdn.pixabay.com/photo/2022/07/31/06/38/school-7355056_1280.jpg",
  },
  {
    title: "Learning Today",
    highlight: "Leading Tomorrow",
    desc: "Empowering students with creativity, confidence, and curiosity.",
    image: "https://cdn.pixabay.com/photo/2018/08/08/12/54/school-3592114_1280.jpg",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
      offset: 50,
      disableMutationObserver: true,
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () =>
    setIndex(index === 0 ? slides.length - 1 : index - 1);
  const nextSlide = () => setIndex((index + 1) % slides.length);

  return (
    <section className="relative w-full overflow-hidden min-h-[72vh] md:min-h-[85vh] lg:min-h-screen">
      {/* Background */}
      <img
        src={slides[index].image}
        alt="hero"
        className="absolute top-0 left-0 w-full h-full object-cover"
        draggable="false"
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-full flex items-start">
        <div className="overflow-hidden w-full">
          <div
            data-aos="fade-up"
            className="text-white max-w-2xl pt-24 sm:pt-28 md:pt-32"
          >
            <p className="text-orange-400 tracking-widest text-xs sm:text-sm mb-3">
              PRIMARY SCHOOL
            </p>

            <h1 className="font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              {slides[index].title} <br />
              <span>{slides[index].highlight}</span>
            </h1>

            <p className="text-gray-300 mt-4 text-sm sm:text-base">
              {slides[index].desc}
            </p>

            {/* Buttons */}
            <div className="flex gap-3 mt-6 whitespace-nowrap">
              <button className="px-4 sm:px-6 py-3 bg-orange-500 rounded-full font-semibold">
                GET STARTED ↗
              </button>
              <button className="px-4 sm:px-6 py-3 border border-white rounded-full font-semibold">
                ABOUT US ↗
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-black/70 p-2 md:p-3 rounded-full"
      >
        <ChevronLeft className="text-white w-5 h-5 md:w-6 md:h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-black/70 p-2 md:p-3 rounded-full"
      >
        <ChevronRight className="text-white w-5 h-5 md:w-6 md:h-6" />
      </button>
    </section>
  );
}
