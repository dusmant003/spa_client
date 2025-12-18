import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { MdLocationOn, MdEmail, MdCall } from 'react-icons/md';

const Topbar = () => {
  return (
    <div className="hidden md:flex justify-between items-center text-white text-sm bg-[#242cc9]">
      {/* Left side: Social Media */}
      <div className="flex items-center bg-orange-500 px-6 py-2 gap-3">
        <span className="font-medium">Follow Us:</span>
        <div className="flex gap-3">
          <a
            href="#"
            className="bg-[#242cc9] p-2 rounded-full  hover:scale-105 transition-all duration-500"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="bg-[#242cc9] p-2 rounded-full  hover:scale-105 transition-all duration-500"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="bg-[#242cc9] p-2 rounded-full  hover:scale-105 transition-all duration-500"
          >
            <FaYoutube />
          </a>
          <a
            href="#"
            className="bg-[#242cc9] p-2 rounded-full  hover:scale-105 transition-all duration-500"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Right side: Contact Info */}
      <div className="flex items-center gap-6 px-6">
        <div className="flex items-center gap-1">
          <MdLocationOn className="text-orange-500" />
          <span>25/B Milford Road, New York</span>
        </div>
        <div className="flex items-center gap-1">
          <MdEmail className="text-orange-500" />
          <span>info@example.com</span>
        </div>
        <div className="flex items-center gap-1">
          <MdCall className="text-orange-500" />
          <span>+2 123 654 7898</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
