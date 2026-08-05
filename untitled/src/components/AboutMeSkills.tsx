import React from 'react';
import { Star, Zap, Lightbulb, Timer, Shuffle, ScanEye, ListChecks, MessageSquare, Users } from 'lucide-react';

export const AboutMeSkills: React.FC = () => {
  const softSkillItems = [
    { label: 'Critical Thinking', icon: Lightbulb },
    { label: 'Time Management', icon: Timer },
    { label: 'Flexibility', icon: Shuffle },
    { label: 'Attention to Detail', icon: ScanEye },
    { label: 'Organization Skills', icon: ListChecks },
    { label: 'Communication', icon: MessageSquare },
  ];

  return (
    <section id="aboutme" className="relative py-20 lg:py-28 bg-white section-connector" aria-label="About Me and Skills section">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="section-badge">05</span>
            <span className="font-heading font-semibold text-maroon-950/50 text-sm uppercase tracking-widest">Personal</span>
          </div>
          <h2 className="font-heading font-800 text-3xl sm:text-4xl lg:text-5xl text-maroon-950 tracking-tight">
            ABOUT ME & <span class="text-gold-400">SKILLS</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="card-hover bg-cream rounded-2xl p-8 border border-maroon-100 shadow-sm h-full flex flex-col">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="profile-border mb-5">
                  <div className="w-28 h-28 rounded-full overflow-hidden bg-maroon-100">
                    <img src="/profile.png" onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }} alt="Deniella A. Halili profile photo" className="w-full h-full object-cover" />
                  </div>
                </div>
                <h3 className="font-heading font-bold text-xl text-maroon-950 mb-1">Deniella A. Halili</h3>
                <span className="inline-flex items-center gap-1.5 text-gold-500 text-sm font-heading font-medium">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  Senior High School Student
                </span>
              </div>
              <div className="flex-1">
                <div className="bg-white rounded-xl p-5 border border-maroon-100">
                  <p className="text-gray-600 text-sm leading-relaxed italic">
                    "A disciplined and motivated senior high school student passionate about bookkeeping, organization, and continuous learning. Committed to building professional skills and gaining real-world experience."
                  </p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-center gap-3">
                <div className="w-3 h-3 rounded-full bg-maroon-950"></div>
                <div className="w-3 h-3 rounded-full bg-gold-400"></div>
                <div className="w-3 h-3 rounded-full bg-maroon-300"></div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="card-hover bg-maroon-950 rounded-2xl p-8 sm:p-10 h-full pattern-dots-dark">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gold-400 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-maroon-950" />
                </div>
                <h3 className="font-heading font-bold text-xl text-white">Soft Skills</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {softSkillItems.map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <div key={idx} className="flex items-center gap-4 bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="w-10 h-10 bg-gold-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComp className="w-5 h-5 text-gold-400" />
                      </div>
                      <span className="text-white text-sm font-heading font-medium">{item.label}</span>
                    </div>
                  );
                })}

                <div className="flex items-center gap-4 bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors sm:col-span-2">
                  <div className="w-10 h-10 bg-gold-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-gold-400" />
                  </div>
                  <span className="text-white text-sm font-heading font-medium">Teamwork & Collaboration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
