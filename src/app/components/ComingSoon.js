'use client';

import { Clock } from 'lucide-react';

export default function ComingSoon() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center relative overflow-hidden w-full bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white px-4">
      {/* Background animated blobs */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-purple-700/30 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-blue-600/30 rounded-full blur-3xl animate-pulse z-0" />

      {/* Card */}
      <div className="relative z-10 max-w-xl w-full rounded-3xl border border-white/20 bg-white/10 backdrop-blur-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] p-10 text-center animate-fade-in-up">
        {/* Clock with ring glow */}
        <div className="relative mb-6">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 blur-xl opacity-30 animate-spin-slow" />
          <Clock className="w-20 h-20 text-purple-400 z-10 relative animate-pulse" />
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text drop-shadow-lg tracking-tight">
          Coming Soon
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 mt-4 text-lg sm:text-xl">
          This section is under construction. Hang tight for something amazing!
        </p>

        {/* Badge */}
        <div className="mt-6">
          <span className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-indigo-600 text-white font-bold shadow-md animate-bounce">
            🚀 Stay Excited!
          </span>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-spin-slow {
          animation: spin-slow 6s linear infinite;
        }
      `}</style>
    </div>
  );
}
