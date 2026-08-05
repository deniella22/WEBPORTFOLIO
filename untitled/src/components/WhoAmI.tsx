import React from 'react';
import { MessageCircle, ShieldCheck, BookOpen, Briefcase } from 'lucide-react';

export const WhoAmI: React.FC = () => {
  return (
    <section id="whoami" className="relative py-20 lg:py-28 bg-cream section-connector" aria-label="Who Am I section">
      <div className="absolute inset-0 pattern-dots opacity-50"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="section-badge">01</span>
            <span className="font-heading font-semibold text-maroon-950/50 text-sm uppercase tracking-widest">Introduction</span>
          </div>
          <h2 className="font-heading font-800 text-3xl sm:text-4xl lg:text-5xl text-maroon-950 tracking-tight">
            WHO AM <span className="text-gold-400">I</span>?
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="card-hover bg-white rounded-2xl p-8 sm:p-12 border border-maroon-100 shadow-sm">
            <div className="flex flex-col lg:flex-row items-start gap-10">
              <div className="flex-shrink-0 mx-auto lg:mx-0">
                <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-2xl overflow-hidden border-4 border-maroon-100 shadow-lg">
                  <img src="/profile.png" onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }} alt="Deniella A. Halili casual photo" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-maroon-950 mb-4">Deniella A. Halili</h3>
                <p class="text-gray-600 leading-relaxed mb-8 font-body">
                  Dedicated senior high school student seeking internship opportunities to develop skills, contribute to team goals, and gain professional experience.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="flex flex-col items-center gap-2 p-4 bg-maroon-50 rounded-xl">
                    <div className="w-10 h-10 bg-maroon-950 rounded-lg flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-gold-400" />
                    </div>
                    <span className="text-xs font-heading font-semibold text-maroon-950">Communication</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-4 bg-maroon-50 rounded-xl">
                    <div className="w-10 h-10 bg-maroon-950 rounded-lg flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-gold-400" />
                    </div>
                    <span className="text-xs font-heading font-semibold text-maroon-950">Discipline</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-4 bg-maroon-50 rounded-xl">
                    <div className="w-10 h-10 bg-maroon-950 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-gold-400" />
                    </div>
                    <span className="text-xs font-heading font-semibold text-maroon-950">Learning</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-4 bg-maroon-50 rounded-xl">
                    <div className="w-10 h-10 bg-maroon-950 rounded-lg flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-gold-400" />
                    </div>
                    <span className="text-xs font-heading font-semibold text-maroon-950">Professionalism</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
