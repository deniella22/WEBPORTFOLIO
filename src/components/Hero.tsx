import React from 'react';
import { Sparkles, GraduationCap, Award, TrendingUp, ArrowDown, Mail, Heart, Share2, Globe } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" aria-label="Hero section">
      <div className="absolute inset-0 pattern-dots"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-maroon-100 rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-100 rounded-full blur-3xl opacity-40 translate-y-1/3 -translate-x-1/3"></div>
      <div className="absolute top-28 left-8 w-16 h-16 border-t-2 border-l-2 border-maroon-950/10 rounded-tl-lg hidden lg:block"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-maroon-950/10 rounded-br-lg hidden lg:block"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-maroon-950 text-white px-5 py-2 rounded-full text-xs font-heading font-semibold uppercase tracking-widest mb-8">
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          Welcome to my Portfolio
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
        </div>

        <div className="flex justify-center mb-8">
          <div className="profile-border">
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden bg-maroon-100">
              <img src="/profile.png" onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }} alt="Portrait photo of Deniella A. Halili" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <h1 className="font-heading font-900 text-4xl sm:text-5xl lg:text-7xl text-maroon-950 tracking-tight leading-none mb-4">
          DENIELLA<br />
          <span className="bg-gradient-to-r from-maroon-950 via-maroon-800 to-gold-400 bg-clip-text text-transparent">A. HALILI</span>
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <span className="inline-flex items-center gap-1.5 bg-maroon-50 text-maroon-950 px-4 py-2 rounded-full text-xs sm:text-sm font-medium font-heading border border-maroon-200">
            <GraduationCap className="w-4 h-4 text-gold-400" />
            Senior High School Student
          </span>
          <span className="inline-flex items-center gap-1.5 bg-gold-50 text-maroon-950 px-4 py-2 rounded-full text-xs sm:text-sm font-medium font-heading border border-gold-200">
            <Award className="w-4 h-4 text-gold-400" />
            Bookkeeping NC III Holder
          </span>
          <span className="inline-flex items-center gap-1.5 bg-maroon-50 text-maroon-950 px-4 py-2 rounded-full text-xs sm:text-sm font-medium font-heading border border-maroon-200">
            <TrendingUp className="w-4 h-4 text-gold-400" />
            Aspiring Professional
          </span>
        </div>

        <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto mb-10 font-body leading-relaxed italic">
          "Focused on growth, discipline, and professional development."
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="#whoami" className="inline-flex items-center gap-2 bg-maroon-950 hover:bg-maroon-800 text-white px-8 py-3.5 rounded-full font-heading font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-maroon-950/20 focus:outline-none focus:ring-2 focus:ring-maroon-950 focus:ring-offset-2">
            Explore My Portfolio
            <ArrowDown className="w-4 h-4" />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 bg-white hover:bg-maroon-50 text-maroon-950 px-8 py-3.5 rounded-full font-heading font-semibold text-sm border-2 border-maroon-950/20 hover:border-maroon-950/40 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-maroon-950 focus:ring-offset-2">
            <Mail className="w-4 h-4" />
            Contact Me
          </a>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6 text-maroon-300">
          <Heart className="w-5 h-5" />
          <Share2 className="w-5 h-5" />
          <Globe className="w-5 h-5" />
          <Heart className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
};
