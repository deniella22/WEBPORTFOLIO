import React from 'react';
import { GraduationCap, School, Briefcase, MapPin, CheckCircle, Brain, Check } from 'lucide-react';

export const EducationExperience: React.FC = () => {
  const aiTopics = [
    'History & Uses of AI',
    'AI Hallucinations',
    'Ethical & Responsible AI Use',
    'Prompt Frameworks',
    'Myths and Facts about AI',
    'Supervised & Unsupervised Learning',
    'Deceptive AI'
  ];

  return (
    <section id="education" className="relative py-20 lg:py-28 bg-cream section-connector" aria-label="Education and Experience section">
      <div className="absolute inset-0 pattern-dots opacity-50"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="section-badge">03</span>
            <span className="font-heading font-semibold text-maroon-950/50 text-sm uppercase tracking-widest">Background</span>
          </div>
          <h2 className="font-heading font-800 text-3xl sm:text-4xl lg:text-5xl text-maroon-950 tracking-tight">
            EDUCATION & <span className="text-gold-400">EXPERIENCE</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Education Column */}
          <div>
            <div className="card-hover bg-white rounded-2xl p-8 border border-maroon-100 shadow-sm h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-maroon-950 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-gold-400" />
                </div>
                <h3 className="font-heading font-bold text-xl text-maroon-950">Education</h3>
              </div>
              <div className="relative space-y-8">
                <div className="absolute left-[19px] top-10 bottom-8 w-0.5 bg-gradient-to-b from-maroon-950 to-gold-400"></div>
                
                <div className="relative flex items-start gap-5">
                  <div className="relative z-10 flex-shrink-0 w-10 h-10 bg-maroon-950 rounded-full flex items-center justify-center border-4 border-white shadow">
                    <School className="w-4 h-4 text-gold-400" />
                  </div>
                  <div className="pt-1">
                    <span className="inline-block bg-maroon-50 text-maroon-950 text-xs font-heading font-semibold px-3 py-1 rounded-full mb-2">
                      2015 – 2021
                    </span>
                    <h4 className="font-heading font-bold text-maroon-950 text-base">Antonino Elementary School</h4>
                    <p className="text-gray-500 text-sm mt-1">Primary Education</p>
                  </div>
                </div>

                <div className="relative flex items-start gap-5">
                  <div className="relative z-10 flex-shrink-0 w-10 h-10 bg-gold-400 rounded-full flex items-center justify-center border-4 border-white shadow">
                    <School className="w-4 h-4 text-maroon-950" />
                  </div>
                  <div className="pt-1">
                    <span className="inline-block bg-gold-50 text-maroon-950 text-xs font-heading font-semibold px-3 py-1 rounded-full mb-2 border border-gold-200">
                      2021 – 2026
                    </span>
                    <h4 className="font-heading font-bold text-maroon-950 text-base">Sisters of Mary of Banneux Inc.</h4>
                    <p className="text-gray-500 text-sm mt-1">Secondary Education</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Column */}
          <div>
            <div className="card-hover bg-white rounded-2xl p-8 border border-maroon-100 shadow-sm h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-maroon-950 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-gold-400" />
                </div>
                <h3 className="font-heading font-bold text-xl text-maroon-950">Experience</h3>
              </div>
              <div className="space-y-6">
                <div className="p-5 bg-maroon-50 rounded-xl border border-maroon-100">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-maroon-950" />
                    <span className="text-xs font-heading font-semibold text-maroon-950/70 uppercase tracking-wide">
                      Sisters of Mary School, Silang Cavite
                    </span>
                  </div>
                  <h4 className="font-heading font-bold text-maroon-950">Bookkeeping Training</h4>
                  <p className="text-gray-500 text-sm mt-1">2025 – 2026</p>
                </div>

                <div className="p-5 bg-maroon-50 rounded-xl border border-maroon-100">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-xs font-heading font-semibold text-green-700 uppercase tracking-wide">
                      Assessment Passed
                    </span>
                  </div>
                  <h4 className="font-heading font-bold text-maroon-950">Bookkeeping Assessment</h4>
                  <p className="text-gray-500 text-sm mt-1">2026</p>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                    Successfully passed practical bookkeeping assessment including transaction recording and ledger posting.
                  </p>
                </div>

                {/* AI Foundations */}
                <div className="p-5 bg-gradient-to-br from-maroon-950 to-maroon-800 rounded-xl border border-maroon-800">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-gold-400 rounded-lg flex items-center justify-center">
                      <Brain className="w-4 h-4 text-maroon-950" />
                    </div>
                    <span className="text-xs font-heading font-semibold text-gold-400 uppercase tracking-wide">
                      AI Training Experience
                    </span>
                  </div>
                  <h4 className="font-heading font-bold text-white mb-4">AI Foundations</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                    {aiTopics.map((topic, idx) => (
                      <div key={idx} className={`flex items-center gap-2 text-gray-300 text-xs ${idx === aiTopics.length - 1 ? 'sm:col-span-2' : ''}`}>
                        <Check className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <p className="text-gray-300 text-sm leading-relaxed italic">
                      "In the three weeks of the Educate phase of my AI training, I learned the foundations of artificial intelligence, including its history and uses today. I became more aware of ethical responsibility, including avoiding bias, respecting privacy, and using AI honestly. I also learned about AI hallucinations, deceptive AI, and how machine learning works through supervised and unsupervised learning. These lessons helped me become a more responsible and informed AI user."
                    </p>
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
