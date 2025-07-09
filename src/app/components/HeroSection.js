"use client";

import useRevealOnScroll from "../lib/useRevealOnScroll";
import React from "react";

export default function HeroSection() {
  const revealRef = useRevealOnScroll();
  return (
    <section className="relative w-full min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-24 pt-20 pb-12 lg:py-20 bg-transparent overflow-hidden overflow-x-hidden">
      {/* Enhanced Glowing background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[180vw] h-[180vw] sm:w-[140vw] sm:h-[140vw] lg:w-[100vw] lg:h-[100vw] xl:w-[80vw] xl:h-[80vw] bg-gradient-radial from-purple-700/50 via-purple-500/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-2/3 h-2/3 sm:w-1/2 sm:h-1/2 bg-gradient-to-tr from-blue-500/40 to-transparent rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-gradient-to-br from-pink-500/30 to-transparent rounded-full blur-xl animate-pulse delay-500" />
      </div>

      {/* Main Content Row (Reveal Animation) */}
      <div
        ref={revealRef}
        className="flex flex-col-reverse lg:flex-row items-center justify-center w-full z-10 opacity-0 translate-y-8 transition-all duration-1000 ease-out will-change-transform"
        data-reveal
      >
        {/* Text Content */}
        <div className="flex-1 flex flex-col items-center lg:items-start justify-center gap-6 w-full lg:w-1/2 px-4 sm:px-8 lg:px-0">
          <div className="w-full text-center lg:text-left">
            <h1
              className="neon-text text-6xl xs:text-7xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl font-extrabold leading-[1.05] drop-shadow-2xl mb-2"
              style={{ fontFamily: 'Orbitron, Lufga, sans-serif', letterSpacing: '-0.04em', textTransform: 'uppercase' }}
            >
              Pl
              <span className="play-symbol">▶</span>
              y<br />
              For<br />
              Nation
            </h1>
            <p className="text-lg sm:text-2xl text-white/80 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-0 lg:mb-2" style={{ fontFamily: 'Lufga, sans-serif' }}>
              Join the ultimate gaming community. Compete, connect, and rise to the top.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start pt-6">
            <button className="px-8 py-4 bg-gradient-to-r from-pink-600 to-indigo-500 text-white font-bold text-lg rounded-full shadow-2xl">
              Join Now
            </button>
            <button className="px-8 py-4 border-2 border-white/30 text-white font-bold text-lg rounded-full">
              Learn More
            </button>
          </div>
        </div>

        {/* Console Image */}
        <div className="flex-1 flex items-center justify-center w-full lg:w-1/2 px-4 sm:px-8 lg:px-0">
          <div className="relative group flex items-center justify-center w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl group-hover:blur-2xl transition-all duration-500 animate-pulse" />
            <img
              src="/assets/controller_2.png"
              alt="Game Controller"
              className="relative w-full max-w-[800px] md:max-w-[1000px] xl:max-w-[1200px] h-auto object-contain drop-shadow-2xl select-none transform rotate-[-16deg] transition-all duration-500 hidden xs:block sm:block md:block lg:block xl:block"
              draggable="false"
              style={{ aspectRatio: '4/3' }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}