export default function AboutUs() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 flex flex-col items-center relative overflow-x-clip overflow-hidden">
      {/* Section Header */}
      <div className="w-full text-center mb-12 sm:mb-16 lg:mb-20 z-10 px-4 sm:px-8 lg:px-0">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8">
          About Us
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
      </div>
      {/* Content - now stretches wider */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center z-10 px-2 sm:px-8 lg:px-24 xl:px-40">
        {/* Text Content */}
        <div className="space-y-6 sm:space-y-8">
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed">
              National Esports is an Indian Esports Organization, built around organizing and training rosters of different games on different platforms. It was formed in October 2021. It is situated in Kolkata, West Bengal, India.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed">
              We also act as a talent hub and help building underdog Esports stars, as well as content creators to reach their dream and make their careers in gaming and content creation.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed">
              Our goal is to make the biggest facility in the gaming and content creation industry across India and globally; to do that we provide the best management for our creators and provide them the best management team and best analyzing team who will train them 24/7.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8">
            <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-1">2021</div>
              <div className="text-xs sm:text-sm text-white/70">Founded</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">24/7</div>
              <div className="text-xs sm:text-sm text-white/70">Support</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-pink-400 mb-1">Global</div>
              <div className="text-xs sm:text-sm text-white/70">Reach</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1">100+</div>
              <div className="text-xs sm:text-sm text-white/70">Players</div>
            </div>
          </div>
        </div>

        {/* Visual Element */}
        <div className="relative flex items-center justify-center">
          <div className="relative group">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-purple-500/20 rounded-full blur-3xl group-hover:blur-2xl transition-all duration-500 animate-pulse" />
            
            {/* Main image/illustration */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-red-600/20 to-purple-600/20 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-red-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl sm:text-3xl">🏆</span>
                </div>
                <div className="text-white/80 text-sm sm:text-base font-medium">
                  National Esports
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500/30 rounded-full animate-bounce" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-red-500/30 rounded-full animate-bounce delay-1000" />
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-blue-500/30 rounded-full animate-bounce delay-500" />
          </div>
        </div>
      </div>

      {/* Enhanced Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200vw] h-[200vw] sm:w-[160vw] sm:h-[160vw] lg:w-[120vw] lg:h-[120vw] bg-gradient-radial from-red-700/30 via-red-500/10 to-transparent rounded-full blur-3xl z-0 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[80vw] h-[80vw] sm:w-[60vw] sm:h-[60vw] bg-gradient-to-tl from-purple-500/20 to-transparent rounded-full blur-2xl z-0 animate-pulse delay-1000" />
      <div className="absolute top-1/3 left-0 w-[50vw] h-[50vw] bg-gradient-to-br from-orange-500/15 to-transparent rounded-full blur-xl z-0 animate-pulse delay-500" />
    </section>
  );
} 