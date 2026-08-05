import React from 'react';
import { Trophy, Award, Shield, Clock } from 'lucide-react';

export const Achievements: React.FC = () => {
  const achievements = [
    {
      title: 'With Honor Student',
      desc: 'Consistent honors from Grade 8 through Grade 11',
      icon: Trophy
    },
    {
      title: 'Bookkeeping NC III Holder',
      desc: 'Nationally certified in bookkeeping competency',
      icon: Award
    },
    {
      title: 'Leadership & Discipline',
      desc: 'Disciplined achiever with leadership and multitasking skills',
      icon: Shield
    },
    {
      title: 'Strong Analytical Skills',
      desc: 'Strong analytical and time management abilities',
      icon: Clock
    }
  ];

  return (
    <section id="achievements" className="relative py-20 lg:py-28 bg-maroon-950 section-connector" aria-label="Key Achievements section">
      <div className="absolute inset-0 pattern-dots-dark"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-400/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="section-badge" style={{ background: 'linear-gradient(135deg, #D4A843, #C49B38)', color: '#6B0F1A' }}>
              04
            </span>
            <span className="font-heading font-semibold text-white/50 text-sm uppercase tracking-widest">Milestones</span>
          </div>
          <h2 className="font-heading font-800 text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            KEY <span class="text-gold-400">ACHIEVEMENTS</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx}>
                <div className="trophy-glow card-hover bg-white/5 backdrop-blur-sm rounded-2xl p-7 border border-white/10 text-center h-full flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-500 rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-gold-400/20">
                    <IconComp className="w-8 h-8 text-maroon-950" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-base mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
