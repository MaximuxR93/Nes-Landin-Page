import { Facebook, Twitter, Instagram, Linkedin, Youtube, Send, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black/90 text-white pt-12 sm:pt-16 lg:pt-20 pb-6 px-0 mt-12 border-t border-white/10 relative overflow-x-clip overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-purple-900/20 to-transparent z-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200vw] h-[200vw] bg-gradient-radial from-purple-700/20 via-purple-500/10 to-transparent rounded-full blur-3xl z-0" />
      
      <div className="relative z-10 w-full flex flex-col gap-12">
        {/* Main Footer Content */}
        <div className="w-full flex flex-col lg:flex-row justify-between gap-8 sm:gap-12 lg:gap-16 px-4 sm:px-10 lg:px-24 xl:px-40">
          {/* Company Info */}
          <div className="flex-1 min-w-[200px] space-y-4 sm:space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="/assets/National Esports New Logo png 1.png" 
                alt="National Esports Logo" 
                className="w-12 h-12 sm:w-14 sm:h-14" 
              />
              <span className="font-bold text-lg sm:text-xl tracking-widest">NATIONAL ESPORTS</span>
            </div>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-xs">
              National Esports is your one-stop site for gaming, blogging, esports, creation, and talent. Our 24/7 support will help you and fulfill your need in no time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex-1 min-w-[160px] space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Quick Links</h3>
            <div className="space-y-2 sm:space-y-3">
              <a href="/" className="block text-white/70 hover:text-white transition-colors duration-300 text-sm sm:text-base">Home</a>
              <a href="/#services" className="block text-white/70 hover:text-white transition-colors duration-300 text-sm sm:text-base">About Us</a>
              <a href="/tournaments" className="block text-white/70 hover:text-white transition-colors duration-300 text-sm sm:text-base">Tournaments</a>
              <a href="/news" className="block text-white/70 hover:text-white transition-colors duration-300 text-sm sm:text-base">News</a>
              <a href="/#contact" className="block text-white/70 hover:text-white transition-colors duration-300 text-sm sm:text-base">Contact</a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex-1 min-w-[200px] space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Contact Info</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                    154, Shyama Mukherjee Rd, Kolkata, North 24 Parganas, West Bengal, PIN 700110, India
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-purple-400 flex-shrink-0" />
                <a href="mailto:support@nationaleesports.in" className="text-white/70 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                  support@nationaleesports.in
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-purple-400 flex-shrink-0" />
                <a href="tel:+913335647407" className="text-white/70 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                  +91-3335647407
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex-1 min-w-[220px] space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Newsletter</h3>
            <p className="text-white/70 text-sm sm:text-base">
              Subscribe to our newsletter for the latest updates and exclusive content.
            </p>
            <form className="space-y-3">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-l-lg bg-white/10 text-white placeholder-white/50 border border-white/10 focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all duration-300 text-sm sm:text-base"
                />
                <button 
                  type="submit" 
                  className="px-4 py-3 rounded-r-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold hover:from-purple-700 hover:to-blue-600 transition-all duration-300 flex items-center gap-2 hover:scale-105"
                >
                  <Send size={18} />
                  <span className="hidden sm:inline">Subscribe</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Social Links & Bottom Bar */}
        <div className="w-full border-t border-white/10 pt-8 sm:pt-12 px-4 sm:px-10 lg:px-24 xl:px-40">
          {/* Social Links */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="flex items-center gap-4 sm:gap-6">
              <span className="text-white/70 text-sm sm:text-base font-medium">Follow us:</span>
              <div className="flex gap-3 sm:gap-4">
                <a href="#" className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-purple-500/80 hover:scale-110 transition-all duration-300 group">
                  <Facebook className="text-white group-hover:text-white" size={18} />
                </a>
                <a href="#" className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-blue-500/80 hover:scale-110 transition-all duration-300 group">
                  <Twitter className="text-white group-hover:text-white" size={18} />
                </a>
                <a href="#" className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-pink-500/80 hover:scale-110 transition-all duration-300 group">
                  <Instagram className="text-white group-hover:text-white" size={18} />
                </a>
                <a href="#" className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-blue-600/80 hover:scale-110 transition-all duration-300 group">
                  <Linkedin className="text-white group-hover:text-white" size={18} />
                </a>
                <a href="#" className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-red-500/80 hover:scale-110 transition-all duration-300 group">
                  <Youtube className="text-white group-hover:text-white" size={18} />
                </a>
              </div>
            </div>
            
            <div className="flex gap-4 sm:gap-6 text-sm sm:text-base">
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-300 underline underline-offset-4">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-300 underline underline-offset-4">
                Terms & Conditions
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-xs sm:text-sm text-white/40">
            <p>National Esports India © 2021 - All Rights Reserved</p>
            <p className="mt-1">Designed with ❤️ for the gaming community</p>
          </div>
        </div>
      </div>
    </footer>
  );
} 