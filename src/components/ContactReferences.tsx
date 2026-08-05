import React from 'react';
import { Send, Mail, Phone, MapPin, Users, Building, Info } from 'lucide-react';

export const ContactReferences: React.FC = () => {
  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-white section-connector" aria-label="Contact and References section">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="section-badge">07</span>
            <span className="font-heading font-semibold text-maroon-950/50 text-sm uppercase tracking-widest">Connect</span>
          </div>
          <h2 className="font-heading font-800 text-3xl sm:text-4xl lg:text-5xl text-maroon-950 tracking-tight">
            CONTACT & <span className="text-gold-400">REFERENCES</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Get in Touch */}
          <div>
            <div className="card-hover bg-maroon-950 rounded-2xl p-8 sm:p-10 pattern-dots-dark h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-gold-400 rounded-lg flex items-center justify-center">
                    <Send className="w-5 h-5 text-maroon-950" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-white">Get in Touch</h3>
                </div>

                <div className="space-y-5">
                  <a href="mailto:halili.deniella@biga.onesms.edu.ph" className="flex items-center gap-4 bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 bg-gold-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-gold-400" />
                    </div>
                    <div>
                      <span className="text-gray-400 text-xs font-heading uppercase tracking-wide block">Email</span>
                      <p className="text-white text-sm font-medium mt-0.5 break-all">halili.deniella@biga.onesms.edu.ph</p>
                    </div>
                  </a>

                  <a href="tel:(046) 414-0575" className="flex items-center gap-4 bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 bg-gold-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-gold-400" />
                    </div>
                    <div>
                      <span className="text-gray-400 text-xs font-heading uppercase tracking-wide block">Phone</span>
                      <p className="text-white text-sm font-medium mt-0.5">(046) 414-0575</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="w-10 h-10 bg-gold-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-gold-400" />
                    </div>
                    <div>
                      <span className="text-gray-400 text-xs font-heading uppercase tracking-wide block">Location</span>
                      <p className="text-white text-sm font-medium mt-0.5">Silang, Cavite, Philippines</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* GitHub Link */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <span className="text-gray-400 text-xs font-heading uppercase tracking-wide block mb-4">
                  Find me on GitHub & Socials
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/deniella22"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-wrap social-icon-wrap-dark w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/10 hover:bg-white/20"
                    aria-label="GitHub Profile"
                  >
                    <svg className="github-svg w-6 h-6" fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a
                    href="mailto:halili.deniella@biga.onesms.edu.ph"
                    className="social-icon-wrap social-icon-wrap-dark w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/10 hover:bg-white/20"
                    aria-label="Send Email"
                  >
                    <Mail className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="tel:(046) 414-0575"
                    className="social-icon-wrap social-icon-wrap-dark w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/10 hover:bg-white/20"
                    aria-label="Call Phone"
                  >
                    <Phone className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* References */}
          <div>
            <div className="card-hover bg-white rounded-2xl p-8 border border-maroon-100 shadow-sm h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-maroon-950 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-gold-400" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-maroon-950">References</h3>
                </div>

                <div className="space-y-6">
                  <div className="p-5 bg-maroon-50 rounded-xl border border-maroon-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-maroon-950 rounded-full flex items-center justify-center text-gold-400 font-heading font-bold text-sm">
                        MA
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-maroon-950 text-sm">Sr. Mylene Arambulo, SM.</h4>
                        <p className="text-gray-500 text-xs">School Principal</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500 font-heading">
                      <Building className="w-3.5 h-3.5" />
                      <span>Sisters of Mary of Banneux Inc.</span>
                    </div>
                  </div>

                  <div className="p-5 bg-maroon-50 rounded-xl border border-maroon-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gold-400 rounded-full flex items-center justify-center text-maroon-950 font-heading font-bold text-sm">
                        AD
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-maroon-950 text-sm">Sr. Lea Gonzaga, SM.</h4>
                        <p className="text-gray-500 text-xs">Mother Sister</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500 font-heading">
                      <Building className="w-3.5 h-3.5" />
                      <span>Sisters of Mary of Banneux Inc.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-5 bg-cream rounded-xl border border-maroon-100">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600 text-xs leading-relaxed font-body">
                    References are available upon request. Contact details provided above for verification purposes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
