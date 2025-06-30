
import ComingSoon from '../components/ComingSoon';

export default function NewsPage() {
  return <ComingSoon />;
}
// "use client";
// import Navbar from "../components/Navbar";
// import { ArrowRight, Calendar, Users, Trophy } from "lucide-react";
// import { useEffect, useState } from "react";

// // Use images from public/photoassets
// const photoassets = [
//   "/photoassets/pexels-tima-miroshnichenko-7047530.jpg",
//   "/photoassets/pexels-andres-garcia-57040618-7923260.jpg",
//   "/photoassets/pexels-florenz-mendoza-3667096-5489398.jpg",
//   "/photoassets/pexels-nolandlive-30111699.jpg",
//   "/photoassets/pexels-nolandlive-30111700.jpg",
//   "/photoassets/pexels-ron-lach-7848989.jpg",
//   "/photoassets/pexels-xexusdesigner-777001.jpg",
//   "/photoassets/pexels-cottonbro-4009622.jpg",
//   "/photoassets/pexels-inspiredimages-139038.jpg",
//   "/photoassets/pexels-fox-58267-3829227.jpg",
// ];

// export default function Tournaments() {
//   // Slider state
//   const sliderImages = photoassets.slice(0, 4);
//   const [current, setCurrent] = useState(0);
//   const [fade, setFade] = useState(true);
  
//   useEffect(() => {
//     setFade(false);
//     const fadeTimeout = setTimeout(() => setFade(true), 100);
//     const interval = setInterval(() => {
//       setFade(false);
//       setTimeout(() => {
//         setCurrent((prev) => (prev + 1) % sliderImages.length);
//         setFade(true);
//       }, 300);
//     }, 4000);
//     return () => {
//       clearInterval(interval);
//       clearTimeout(fadeTimeout);
//     };
//   }, [sliderImages.length]);

//   return (
//     <div className="min-h-screen bg-[#13071C] flex flex-col">
//       <Navbar />
//       <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-10">
//         {/* Featured Tournament (Slider) */}
//         <section className="flex flex-col lg:flex-row gap-8 sm:gap-12 mb-12 sm:mb-16 items-center">
//           <div className="flex-1 flex flex-col justify-center order-2 lg:order-1">
//             <div className="space-y-4 sm:space-y-6">
//               <div className="flex items-center gap-2 text-xs sm:text-sm text-white/60 tracking-widest">
//                 <Calendar size={16} />
//                 <span>LATEST NEWS | 1 August 2023</span>
//               </div>
//               <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
//                 Fnatic vs EG Valorant Masters Tokyo Grand Final: Fnatic are Crowned Masters Tokyo Champions
//               </h1>
//               <p className="text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed">
//                 The time has come for the Masters Tokyo Grand Final and we have an incredible matchup in the form of Fnatic vs EG. This has the potential to be a true match for the ages and you will not want to miss out on this one.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <a href="#" className="inline-flex items-center gap-2 text-purple-400 font-semibold hover:text-purple-300 transition-colors duration-300 text-sm sm:text-base">
//                   Read More <ArrowRight size={16} />
//                 </a>
//                 <div className="flex items-center gap-4 text-white/60 text-sm">
//                   <div className="flex items-center gap-1">
//                     <Users size={16} />
//                     <span>2.5K viewers</span>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <Trophy size={16} />
//                     <span>$50K Prize Pool</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex-1 flex items-center justify-center order-1 lg:order-2">
//             <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl aspect-[4/3] bg-black/30 rounded-xl overflow-hidden shadow-2xl">
//               <img
//                 src={sliderImages[current]}
//                 alt="Featured Tournament"
//                 className={`absolute inset-0 w-full h-full object-cover rounded-xl transition-opacity duration-700 ${fade ? 'opacity-100' : 'opacity-0'}`}
//                 style={{transitionProperty: 'opacity'}}
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
//             </div>
//           </div>
//         </section>

//         {/* Carousel Dots */}
//         <div className="flex justify-center items-center gap-2 mb-8 sm:mb-12">
//           {sliderImages.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => setCurrent(idx)}
//               className={
//                 idx === current
//                   ? "w-8 h-2 rounded-full bg-white/80 inline-block transition-all duration-300"
//                   : "w-2 h-2 rounded-full bg-white/30 inline-block transition-all duration-300 hover:bg-white/50"
//               }
//             />
//           ))}
//         </div>

//         {/* Divider */}
//         <div className="w-full h-1 bg-white/20 rounded-full mb-8 sm:mb-12" />

//         {/* Latest News Carousel */}
//         <section className="mb-12 sm:mb-16">
//           <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-8">LATEST NEWS</h2>
//           <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 scrollbar-hide">
//             {photoassets.slice(1, 5).map((img, i) => (
//               <div key={i} className="min-w-[280px] sm:min-w-[320px] bg-[#23183a] rounded-xl shadow-lg p-4 sm:p-6 flex flex-col gap-3 relative group hover:bg-[#2a1f42] transition-all duration-300">
//                 <div className="relative overflow-hidden rounded-lg">
//                   <img src={img} alt="News" className="w-full h-40 sm:h-48 object-cover mb-3 group-hover:scale-105 transition-transform duration-300" />
//                   <span className="absolute top-3 right-3 bg-red-500 text-xs text-white px-2 py-1 rounded-full font-bold">NEW</span>
//                 </div>
//                 <h3 className="text-white font-semibold text-base sm:text-lg mb-2 line-clamp-2">Sample News Title That Could Be Longer</h3>
//                 <span className="text-xs sm:text-sm text-white/60">29 July 2023</span>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* News and Matches */}
//         <section className="flex flex-col lg:flex-row gap-8 sm:gap-12 mb-12">
//           {/* News */}
//           <div className="flex-1 space-y-6 sm:space-y-8">
//             <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-8">NEWS</h2>
            
//             {/* Featured News */}
//             <div className="bg-[#23183a] rounded-xl shadow-lg p-6 sm:p-8 group hover:bg-[#2a1f42] transition-all duration-300">
//               <div className="relative overflow-hidden rounded-lg mb-6">
//                 <img src={photoassets[5]} alt="Recap" className="w-full h-48 sm:h-64 object-cover object-center rounded-lg group-hover:scale-105 transition-transform duration-300" />
//               </div>
//               <div className="space-y-3 sm:space-y-4">
//                 <span className="text-xs sm:text-sm text-white/60">LATEST NEWS | 25 July 2023</span>
//                 <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white leading-tight">
//                   VCT LAST CHANCE QUALIFIER EMEA RECAP: GIANTS AND NAVI SECURE THE FINAL CHAMPIONS SPOTS
//                 </h3>
//                 <p className="text-white/80 text-sm sm:text-base leading-relaxed">
//                   With two spots at VALORANT Champions 2023 on the line, EMEA's finest battled it out in a race to the finish line.
//                 </p>
//                 <a href="#" className="inline-flex items-center gap-2 text-purple-400 font-semibold hover:text-purple-300 transition-colors duration-300 text-sm sm:text-base">
//                   Read More <ArrowRight size={16} />
//                 </a>
//               </div>
//             </div>

//             {/* News Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
//               {photoassets.slice(6, 8).map((img, i) => (
//                 <div key={i} className="bg-[#23183a] rounded-xl shadow-lg p-4 sm:p-6 flex flex-col group hover:bg-[#2a1f42] transition-all duration-300">
//                   <div className="relative overflow-hidden rounded-lg mb-4">
//                     <img src={img} alt="News" className="w-full h-32 sm:h-40 object-cover object-center rounded-lg group-hover:scale-105 transition-transform duration-300" />
//                   </div>
//                   <div className="space-y-2 sm:space-y-3 flex-1">
//                     <span className="text-xs sm:text-sm text-white/60">18 July 2023</span>
//                     <h4 className="text-base sm:text-lg font-semibold text-white leading-tight">
//                       VCT ASCENSION EMEA RECAP: FRANCE'S FINEST TAKE THE CROWN
//                     </h4>
//                     <p className="text-white/80 text-sm sm:text-base leading-relaxed flex-1">
//                       Relive the inaugural Ascension tournament, which saw France: Revolution's Gentle Mates take the trophy, and a spot in VCT EMEA
//                     </p>
//                     <a href="#" className="inline-flex items-center gap-1 text-purple-400 font-semibold hover:text-purple-300 transition-colors duration-300 text-sm sm:text-base">
//                       Read More <ArrowRight size={14} />
//                     </a>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Matches */}
//           <div className="w-full lg:w-80 flex-shrink-0">
//             <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-8">MATCHES</h2>
//             <div className="space-y-4 sm:space-y-6">
//               {[0, 1, 2, 3].map((m) => (
//                 <div key={m} className="flex items-center justify-between bg-[#23183a] rounded-lg px-4 sm:px-6 py-4 sm:py-5 shadow-md hover:bg-[#2a1f42] transition-all duration-300 group">
//                   <div className="flex items-center gap-3">
//                     <img src={photoassets[(m+8)%photoassets.length]} alt="Team 1" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover" />
//                     <span className="text-white font-bold text-sm sm:text-base">Fnatic</span>
//                   </div>
//                   <div className="text-center">
//                     <span className="text-white/60 font-bold text-sm sm:text-base">VS</span>
//                     <div className="text-xs text-white/40 mt-1">Today 8:00 PM</div>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <span className="text-white font-bold text-sm sm:text-base">Team Secret</span>
//                     <img src={photoassets[(m+7)%photoassets.length]} alt="Team 2" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover" />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// } 