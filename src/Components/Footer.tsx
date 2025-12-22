import { 
  Instagram, 
  Facebook, 
  Linkedin, 
  Home,
  MenuIcon,
  Wrench,
  UserRound,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="   bg-gray-700 py-10">
      <div className="container max-w-7xl mx-auto bg-gray-700 px-4">

        {/* Main Flex Wrapper */}
        <div className="flex flex-col  pl-3 md:flex-row md:justify-between gap-12 text-amber-50">

          {/* Social Section */}
          <div className="flex flex-col gap-6">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
               className="flex items-center space-x-2 hover:text-amber-400 transition">
              <Instagram className="w-5 h-5" />
              <span>Instagram</span>
            </a>

            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
               className="flex items-center space-x-2 hover:text-amber-400 transition">
              <Facebook className="w-5 h-5" />
              <span>Facebook</span>
            </a>

            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"
               className="flex items-center space-x-2 hover:text-amber-400 transition">
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Navigation Section */}
          <div className="flex flex-col gap-6">
            <a href="#" className="flex items-center space-x-2 hover:text-amber-400 transition">
              <Home className="w-5 h-5" />
              <span>Home</span>
            </a>

            <a href="#" className="flex items-center space-x-2 hover:text-amber-400 transition">
              <MenuIcon className="w-5 h-5" />
              <span>Menu</span>
            </a>

            <a href="#" className="flex items-center space-x-2 hover:text-amber-400 transition">
              <Wrench className="w-5 h-5" />
              <span>Services</span>
            </a>

            <a href="#" className="flex items-center space-x-2 hover:text-amber-400 transition">
              <UserRound className="w-5 h-5" />
              <span>About Us</span>
            </a>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col gap-6">
            <p className="font-semibold text-lg">Get in touch</p>

            <a href="mailto:alishbasehar505@gmail.com" className="flex items-center space-x-2 hover:text-amber-400 transition">
              <Mail className="w-5 h-5" />
              <span>Email: alishbasehar505@gmail.com</span>
            </a>

            <a href="tel:03079158998" className="flex items-center space-x-2 hover:text-amber-400 transition">
              <Phone className="w-5 h-5" />
              <span>Phone: 03079158998</span>
            </a>

            <a href="#" className="flex items-center space-x-2 hover:text-amber-400 transition">
              <MapPin className="w-5 h-5" />
              <span>johar town lahore</span>
            </a>
          </div>

        </div>

        {/* Footer Bottom */}
        <p className="mt-10 text-center text-sm text-amber-50">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
