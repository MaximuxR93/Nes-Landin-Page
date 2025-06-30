"use client";
import { useState } from "react";
import { SignIn, SignUp } from "@clerk/nextjs";

const logo = "/assets/National Esports New Logo png 1.png";
const illustration = "/photoassets/Lucas Ian Blaze _ science fiction fantasy abenteuer.jpg";

export default function LoginRegister() {
  const [tab, setTab] = useState("login");

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative font-sans overflow-hidden bg-gradient-to-br from-[#1a0030] via-[#2b0a53] to-[#1a0030]">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150vw] h-[150vw] bg-gradient-radial from-purple-700/30 via-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-to-tl from-blue-500/20 to-transparent rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute top-1/3 left-0 w-1/3 h-1/3 bg-gradient-to-br from-pink-500/15 to-transparent rounded-full blur-xl animate-pulse delay-500" />
      </div>

      {/* Logo */}
      <img src={logo} alt="logo" className="absolute top-4 sm:top-8 left-4 sm:left-8 w-12 h-12 sm:w-16 sm:h-16 z-20" />

      {/* Card */}
      <div className="relative z-20 w-full max-w-4xl sm:max-w-5xl mx-4 sm:mx-8 rounded-2xl sm:rounded-3xl bg-white/10 backdrop-blur-2xl shadow-2xl flex flex-col lg:flex-row overflow-hidden border border-white/20">
        {/* Left: Form Side */}
        <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-center min-w-[280px] sm:min-w-[320px]">
          <div className="flex justify-center mb-8">
            <button
              className={`px-6 py-2 rounded-t-lg font-bold text-lg transition-all duration-300 ${tab === "login" ? "bg-gradient-to-r from-purple-700 to-blue-500 text-white shadow-lg" : "bg-transparent text-white/60"}`}
              onClick={() => setTab("login")}
            >
              Login
            </button>
            <button
              className={`px-6 py-2 rounded-t-lg font-bold text-lg transition-all duration-300 ${tab === "register" ? "bg-gradient-to-r from-purple-700 to-blue-500 text-white shadow-lg" : "bg-transparent text-white/60"}`}
              onClick={() => setTab("register")}
            >
              Register
            </button>
          </div>
          <div className="relative min-h-[360px] w-full flex items-center justify-center">
            {tab === "login" ? (
              <SignIn appearance={{ elements: { card: "bg-transparent shadow-none border-none", formButtonPrimary: "bg-gradient-to-r from-purple-700 to-blue-500 text-white font-bold" } }} routing="hash" path="/login" signUpUrl="#register" afterSignInUrl="/" />
            ) : (
              <SignUp appearance={{ elements: { card: "bg-transparent shadow-none border-none", formButtonPrimary: "bg-gradient-to-r from-purple-700 to-blue-500 text-white font-bold" } }} routing="hash" path="/login" signInUrl="#login" afterSignUpUrl="/" />
            )}
          </div>
        </div>
        {/* Right: Illustration Side */}
        <div className="hidden lg:flex flex-col items-center justify-center bg-gradient-to-br from-purple-900/40 via-blue-900/30 to-transparent p-8 min-w-[340px]">
          <img
            src={illustration}
            alt="illustration"
            className="rounded-2xl shadow-xl object-cover w-full h-[420px] max-w-[320px] border-4 border-white/10"
            style={{ objectPosition: "center" }}
          />
        </div>
      </div>
    </div>
  );
}
