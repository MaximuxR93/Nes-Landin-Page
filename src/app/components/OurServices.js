import { Trophy, Radio, Video, Users, Layers, Building2 } from "lucide-react";

const services = [
  {
    icon: <Trophy size={40} className="text-white drop-shadow-lg" />, // Grow Esports
    title: "Grow Esports",
    desc: "Encouraging Gaming Culture By Organizing Tournaments Worldwide.",
  },
  {
    icon: <Radio size={40} className="text-white drop-shadow-lg" />, // Broadcasting
    title: "Broadcasting",
    desc: "Providing Advance Broadcasting Service To Clients Worldwide.",
  },
  {
    icon: <Video size={40} className="text-white drop-shadow-lg" />, // Video Production
    title: "Video Production",
    desc: "Providing Quality Production Service For Commercial & Non Commercial Clients.",
  },
  {
    icon: <Users size={40} className="text-white drop-shadow-lg" />, // Talent Management
    title: "Talent Management",
    desc: "Finding & Managing Talents Across The Globe.",
  },
  {
    icon: <Layers size={40} className="text-white drop-shadow-lg" />, // Brand Integration
    title: "Brand Integration",
    desc: "We Emphasize On Equal Importance To Every Associated Brand.",
  },
  {
    icon: <Building2 size={40} className="text-white drop-shadow-lg" />, // Facility
    title: "Facility",
    desc: "Building Facilities For Train Gamers, Creators, Organizers And Many More.",
  },
];

export default function OurServices() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 flex flex-col items-center relative overflow-x-clip overflow-hidden">
      {/* Section Header */}
      <div className="w-full text-center mb-12 sm:mb-16 lg:mb-20 z-10 px-4 sm:px-8 lg:px-0">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
          Our Services
        </h2>
        <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
          Comprehensive esports solutions to elevate your gaming experience
        </p>
      </div>
      {/* Services Grid - now stretches wider */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 z-10 px-2 sm:px-8 lg:px-24 xl:px-40">
        {services.map((service, idx) => (
          <div
            key={service.title}
            className="group relative flex flex-col items-center text-center p-6 sm:p-8 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 backdrop-blur-sm"
            style={{
              animationDelay: `${idx * 100}ms`
            }}
          >
            {/* Hover effect background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Icon Container */}
            <div className="relative mb-6 sm:mb-8 flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-purple-600/80 to-blue-500/80 shadow-lg group-hover:from-purple-500 group-hover:to-blue-400 group-hover:scale-110 transition-all duration-500">
              <div className="transform group-hover:rotate-12 transition-transform duration-500">
                {service.icon}
              </div>
            </div>

            {/* Content */}
            <div className="relative space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-wide group-hover:text-purple-300 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                {service.desc}
              </p>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100" />
            <div className="absolute bottom-4 left-4 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 transform scale-0 group-hover:scale-100" />
          </div>
        ))}
      </div>

      {/* Enhanced Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200vw] h-[200vw] sm:w-[160vw] sm:h-[160vw] lg:w-[120vw] lg:h-[120vw] bg-gradient-radial from-purple-700/30 via-purple-500/10 to-transparent rounded-full blur-3xl z-0 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[80vw] h-[80vw] sm:w-[60vw] sm:h-[60vw] bg-gradient-to-tl from-blue-500/20 to-transparent rounded-full blur-2xl z-0 animate-pulse delay-1000" />
      <div className="absolute top-1/3 left-0 w-[50vw] h-[50vw] bg-gradient-to-br from-pink-500/15 to-transparent rounded-full blur-xl z-0 animate-pulse delay-500" />
    </section>
  );
} 