import React from 'react';
import { School, BookMarked, Users, Cpu, FileText, Calculator, BarChart3, NotebookPen, RefreshCw } from 'lucide-react';

export const Qualifications: React.FC = () => {
  const softSkills = [
    'Critical Thinking',
    'Time Management',
    'Flexibility',
    'Creativity',
    'Attention to Detail',
    'Willingness to Learn',
    'Communication',
    'Interpersonal Skills',
    'Organization Skills'
  ];

  const technicalSkills = [
    { title: 'Recording Transactions', icon: FileText },
    { title: 'Payroll Processing', icon: Calculator },
    { title: 'Preparing Basic Financial Reports', icon: BarChart3 },
    { title: 'Basic Bookkeeping', icon: NotebookPen },
    { title: 'Whole Cycle Transactions', icon: RefreshCw }
  ];

  return (
    <section id="qualifications" className="relative py-20 lg:py-28 bg-white section-connector" aria-label="Qualifications and Certifications section">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="section-badge">02</span>
            <span className="font-heading font-semibold text-maroon-950/50 text-sm uppercase tracking-widest">Credentials</span>
          </div>
          <h2 className="font-heading font-800 text-3xl sm:text-4xl lg:text-5xl text-maroon-950 tracking-tight">
            QUALIFICATIONS & <span class="text-gold-400">CERTIFICATIONS</span>
          </h2>
        </div>

        {/* Academic Background */}
        <div className="mb-10">
          <div className="card-hover bg-maroon-950 rounded-2xl p-8 sm:p-10 pattern-dots-dark">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gold-400 rounded-lg flex items-center justify-center">
                <School className="w-5 h-5 text-maroon-950" />
              </div>
              <h3 className="font-heading font-bold text-xl text-white">Academic Background</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-white/5 rounded-xl p-5 border border-white/10">
                <div className="flex-shrink-0 w-12 h-12 bg-gold-400/20 rounded-lg flex items-center justify-center mt-0.5">
                  <BookMarked className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-white text-base">Antonino Elementary School</h4>
                  <p className="text-gray-400 text-sm mt-1">Primary Education · 2015 – 2021</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/5 rounded-xl p-5 border border-white/10">
                <div className="flex-shrink-0 w-12 h-12 bg-gold-400/20 rounded-lg flex items-center justify-center mt-0.5">
                  <BookMarked className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-white text-base">Sisters of Mary of Banneux Inc.</h4>
                  <p className="text-gray-400 text-sm mt-1">Secondary Education · 2021 – 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Soft Skills & Tech Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Soft Skills */}
          <div>
            <div className="card-hover bg-white rounded-2xl p-8 border border-maroon-100 shadow-sm h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-maroon-950 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-gold-400" />
                </div>
                <h3 className="font-heading font-bold text-lg text-maroon-950">Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {softSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="skill-tag px-4 py-2 bg-maroon-50 text-maroon-950 rounded-full text-sm font-medium font-heading border border-maroon-100 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <div className="card-hover bg-white rounded-2xl p-8 border border-maroon-100 shadow-sm h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-maroon-950 rounded-lg flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-gold-400" />
                </div>
                <h3 className="font-heading font-bold text-lg text-maroon-950">Technical Skills</h3>
              </div>
              <div className="space-y-3">
                {technicalSkills.map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-gold-50 rounded-xl border border-gold-100">
                      <div className="w-8 h-8 bg-gold-400 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComp className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium text-maroon-950 font-heading">{item.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
