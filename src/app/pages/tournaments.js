"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Calendar, ArrowRight, Users } from "lucide-react";
import ComingSoon from '../components/ComingSoon';

// Example assets (replace with your actual asset paths)
const featuredImg = "/assets/controller 2 1.png";
const newsImg1 = "/assets/image 1.png";
const newsImg2 = "/assets/image 1-1.png";
const newsImg3 = "/assets/image 4.png";
const recapImg = "/assets/Frame 1.png";

export default function TournamentsPage() {
  return <ComingSoon />;
}

/* --- ORIGINAL TOURNAMENTS PAGE CODE BELOW, DO NOT DELETE ---

// export default function Tournaments() {
//   return (
//     <div className="min-h-screen bg-[#181024] flex flex-col">
//       <Navbar />
//       <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 py-10">
//         {/* Featured Tournament */}
//         <section className="flex flex-col md:flex-row gap-8 mb-12">
//           <div className="flex-1 flex flex-col justify-center">
//             <span className="text-xs text-white/60 tracking-widest mb-2">LATEST NEWS | <span className="ml-2">1 August 2023</span></span>
//             <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">Fnatic vs EG Valorant Masters Tokyo Grand Final: Fnatic are Crowned Masters Tokyo Champions</h1>
//             <p className="text-white/80 mb-4">The time has come for the Masters Tokyo Grand Final and we have an incredible matchup in the form of Fnatic vs EG. This has the potential to be a true match for the ages and you will not want to miss out on this one.</p>
//             <a href="#" className="text-purple-400 font-semibold flex items-center gap-1 hover:underline">Read More <ArrowRight size={16} /></a>
//           </div>
//           <div className="flex-1 flex items-center justify-center">
//             <img src={featuredImg} alt="Featured Tournament" className="rounded-xl w-full max-w-md object-cover shadow-2xl" />
//           </div>
//         </section>
//         {/* ...rest of the code... */}
//       </main>
//       <Footer />
//     </div>
//   );
// }

--- END ORIGINAL CODE --- */ 