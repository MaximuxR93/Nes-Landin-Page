"use client";

import useRevealOnScroll from "../lib/useRevealOnScroll";

export default function HeroSection() {
  const revealRef = useRevealOnScroll();
  return (
    <section className="relative w-full min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-24 pt-20 pb-12 lg:py-20 bg-transparent overflow-hidden">
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
        <div className="flex-1 flex flex-col items-center lg:items-start justify-center gap-6 w-full lg:w-1/2 text-center lg:text-left px-4 sm:px-8 lg:px-0">
          <div className="space-y-4 sm:space-y-6">
            <h1
              className="
                text-5xl
                xs:text-6xl
                sm:text-7xl
                md:text-7xl
                lg:text-7xl
                xl:text-8xl
                font-extrabold
                text-white
                leading-tight
                drop-shadow-2xl
                mb-2
                relative
              "
            >
              <span
                className="block text-[12vw] xs:text-6xl sm:text-7xl md:text-7xl lg:text-7xl xl:text-8xl font-black tracking-tight bg-gradient-to-r from-purple-400 via-white to-blue-400 bg-clip-text text-transparent animate-gradient-x"
                style={{ WebkitTextStroke: '1px #a78bfa', letterSpacing: '-0.04em' }}
              >
                Pl<span className="inline-block text-purple-400 animate-pulse">▶</span>y
              </span>
              <span
                className="block text-[10vw] xs:text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-black tracking-tight bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent animate-gradient-x"
                style={{ WebkitTextStroke: '1px #a78bfa', letterSpacing: '-0.04em' }}
              >
                For
              </span>
              <span
                className="block text-[13vw] xs:text-7xl sm:text-8xl md:text-8xl lg:text-8xl xl:text-9xl font-black tracking-tight bg-gradient-to-r from-purple-400 via-white to-blue-400 bg-clip-text text-transparent animate-gradient-x"
                style={{ WebkitTextStroke: '1.5px #a78bfa', letterSpacing: '-0.04em' }}
              >
                Nation
              </span>
            </h1>
            <p className="text-base xs:text-lg sm:text-xl lg:text-2xl text-white/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Join the ultimate gaming community and compete at the highest level
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold text-lg rounded-full shadow-2xl hover:from-purple-700 hover:to-blue-600 hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300">
                Join Now
              </button>
              <button className="px-8 py-4 border-2 border-white/30 text-white font-bold text-lg rounded-full hover:bg-white/10 hover:border-white/50 transform hover:scale-105 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Console Image */}
        <div className="flex-1 flex items-center justify-center w-full lg:w-1/2 px-4 sm:px-8 lg:px-0">
          <div className="relative group flex items-center justify-center w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl group-hover:blur-2xl transition-all duration-500 animate-pulse" />
            <img
              src="/assets/controller_2.png"
              alt="Game Controller"
              className="relative w-[95vw] max-w-[600px] md:max-w-[750px] xl:max-w-[900px] h-auto object-contain drop-shadow-2xl select-none transform group-hover:scale-105 group-hover:rotate-2 transition-all duration-500 hidden xs:block sm:block md:block lg:block xl:block"
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