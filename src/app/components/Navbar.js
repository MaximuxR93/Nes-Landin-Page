"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X, User, LogOut, Settings, Upload, MessageCircle, HelpCircle, Trophy } from "lucide-react";
import { UserButton, SignInButton, useUser, useClerk } from "@clerk/nextjs";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const { isSignedIn, user } = useUser();
  const { signOut, openSignIn } = useClerk();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Smooth scroll function for homepage sections
  const scrollToSection = (sectionId) => {
    closeMenu();
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Approximate navbar height
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  // Check if we're on the homepage
  const isHomePage = typeof window !== 'undefined' && window.location.pathname === '/';

  // Handle hash navigation when coming from other pages
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash.substring(1); // Remove the #
      setTimeout(() => {
        scrollToSection(hash);
      }, 100); // Small delay to ensure page is loaded
    }
  }, []);

  // Close profile dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    }
    if (profileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [profileOpen]);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-gradient-to-b from-black/80 to-black/40 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo only, bigger */}
          <Link href="/" className="flex items-center group" onClick={closeMenu}>
            <img
              src="/assets/National Esports New Logo png 1.png"
              alt="National Esports Logo"
              className="w-14 h-14 md:w-16 md:h-16 transition-transform duration-300 group-hover:scale-110"
              style={{ display: "block" }}
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {isHomePage ? (
              <button 
                onClick={() => scrollToSection('home')}
                className="text-white text-base lg:text-lg font-medium transition-all duration-300 hover:text-purple-400 hover:scale-105 relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ) : (
              <Link 
                href="/" 
                className="text-white text-base lg:text-lg font-medium transition-all duration-300 hover:text-purple-400 hover:scale-105 relative group"
                onClick={closeMenu}
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            )}
            {/* Services link */}
            {isHomePage ? (
              <button 
                onClick={() => scrollToSection('services')}
                className="text-white text-base lg:text-lg font-medium transition-all duration-300 hover:text-purple-400 hover:scale-105 relative group"
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ) : (
              <Link 
                href="/#services" 
                className="text-white text-base lg:text-lg font-medium transition-all duration-300 hover:text-purple-400 hover:scale-105 relative group"
                onClick={closeMenu}
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            )}
            {isHomePage ? (
              <button 
                onClick={() => scrollToSection('services')}
                className="text-white text-base lg:text-lg font-medium transition-all duration-300 hover:text-purple-400 hover:scale-105 relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ) : (
              <Link 
                href="/#services" 
                className="text-white text-base lg:text-lg font-medium transition-all duration-300 hover:text-purple-400 hover:scale-105 relative group"
                onClick={closeMenu}
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            )}
            <Link 
              href="/tournaments" 
              className="text-white text-base lg:text-lg font-medium transition-all duration-300 hover:text-purple-400 hover:scale-105 relative group"
              onClick={closeMenu}
            >
              Tournaments
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/news" 
              className="text-white text-base lg:text-lg font-medium transition-all duration-300 hover:text-purple-400 hover:scale-105 relative group"
              onClick={closeMenu}
            >
              News
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <div className="flex items-center gap-4">
              <Link
                href="/feedback"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold shadow-lg hover:from-purple-700 hover:to-blue-600 hover:shadow-xl hover:scale-105 transition-all duration-300"
                onClick={closeMenu}
              >
                <MessageCircle size={20} /> Feedback
              </Link>
              {isSignedIn ? (
                <UserButton afterSignOutUrl="/" />
              ) : (
                <SignInButton mode="modal" />
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <Menu size={24} className="text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? "max-h-96 opacity-100 visible" 
            : "max-h-0 opacity-0 invisible"
        } overflow-hidden`}>
          <div className="py-4 space-y-3 border-t border-white/10">
            {isHomePage ? (
              <button 
                onClick={() => scrollToSection('home')}
                className="block text-white text-lg font-medium py-3 px-4 rounded-lg hover:bg-white/10 hover:text-purple-400 transition-all duration-200 w-full text-left"
              >
                Home
              </button>
            ) : (
              <Link 
                href="/" 
                className="block text-white text-lg font-medium py-3 px-4 rounded-lg hover:bg-white/10 hover:text-purple-400 transition-all duration-200"
                onClick={closeMenu}
              >
                Home
              </Link>
            )}
            {/* Services link */}
            {isHomePage ? (
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-white text-lg font-medium py-3 px-4 rounded-lg hover:bg-white/10 hover:text-purple-400 transition-all duration-200 w-full text-left"
              >
                Services
              </button>
            ) : (
              <Link 
                href="/#services" 
                className="block text-white text-lg font-medium py-3 px-4 rounded-lg hover:bg-white/10 hover:text-purple-400 transition-all duration-200"
                onClick={closeMenu}
              >
                Services
              </Link>
            )}
            {isHomePage ? (
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-white text-lg font-medium py-3 px-4 rounded-lg hover:bg-white/10 hover:text-purple-400 transition-all duration-200 w-full text-left"
              >
                About
              </button>
            ) : (
              <Link 
                href="/#services" 
                className="block text-white text-lg font-medium py-3 px-4 rounded-lg hover:bg-white/10 hover:text-purple-400 transition-all duration-200"
                onClick={closeMenu}
              >
                About
              </Link>
            )}
            <Link 
              href="/tournaments" 
              className="block text-white text-lg font-medium py-3 px-4 rounded-lg hover:bg-white/10 hover:text-purple-400 transition-all duration-200"
              onClick={closeMenu}
            >
              Tournaments
            </Link>
            <Link 
              href="/news" 
              className="block text-white text-lg font-medium py-3 px-4 rounded-lg hover:bg-white/10 hover:text-purple-400 transition-all duration-200"
              onClick={closeMenu}
            >
              News
            </Link>
            <div className="flex items-center gap-4">
              <Link
                href="/feedback"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold shadow-lg hover:from-purple-700 hover:to-blue-600 hover:shadow-xl hover:scale-105 transition-all duration-300"
                onClick={closeMenu}
              >
                <MessageCircle size={20} /> Feedback
              </Link>
              {isSignedIn ? (
                <UserButton afterSignOutUrl="/" />
              ) : (
                <SignInButton mode="modal" />
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 