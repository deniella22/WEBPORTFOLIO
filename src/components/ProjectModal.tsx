import React, { useEffect } from 'react';
import { Project } from '../types';
import { 
  X, 
  ExternalLink, 
  Calendar, 
  MapPin, 
  Users, 
  AlertTriangle, 
  CheckCircle2, 
  UserCircle, 
  BookOpen, 
  Sparkles,
  Rocket,
  Calculator,
  Brain,
  FileText
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const renderIcon = (name: string) => {
    switch (name) {
      case 'rocket':
        return <Rocket className="w-8 h-8 text-maroon-950" />;
      case 'calculator':
        return <Calculator className="w-8 h-8 text-maroon-950" />;
      case 'brain':
        return <Brain className="w-8 h-8 text-maroon-950" />;
      case 'file-text':
      default:
        return <FileText className="w-8 h-8 text-maroon-950" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-maroon-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Banner */}
        <div className="relative bg-gradient-to-br from-maroon-950 via-maroon-900 to-maroon-800 p-6 sm:p-8 text-white flex-shrink-0 overflow-hidden">
          <div className="absolute inset-0 pattern-dots-dark opacity-30"></div>
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-colors focus:outline-none focus:ring-2 focus:ring-gold-400"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-gold-400/20">
              {renderIcon(project.iconName)}
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="bg-gold-400/20 text-gold-300 text-xs font-heading font-semibold px-3 py-1 rounded-full border border-gold-400/30 uppercase tracking-wider">
                  {project.category}
                </span>
                <span className="bg-white/10 text-gray-200 text-xs font-heading px-2.5 py-0.5 rounded-full border border-white/10">
                  <Calendar className="w-3 h-3 inline mr-1 text-gold-400" />
                  {project.year}
                </span>
              </div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white">
                {project.title}
              </h2>
              {project.subtitle && (
                <p className="text-gray-300 font-heading text-sm sm:text-base mt-1">
                  {project.subtitle}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          {/* Meta bar */}
          <div className="flex flex-wrap items-center gap-4 p-4 bg-maroon-50/60 rounded-2xl border border-maroon-100">
            {project.location && (
              <div className="flex items-center gap-2 text-xs sm:text-sm font-heading text-maroon-950">
                <MapPin className="w-4 h-4 text-gold-500" />
                <span>{project.location}</span>
              </div>
            )}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-heading text-maroon-950">
              <Sparkles className="w-4 h-4 text-gold-500" />
              <span>Project Type: {project.category}</span>
            </div>
          </div>

          {/* Full Description */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-maroon-950 rounded-lg flex items-center justify-center">
                <FileText className="w-4 h-4 text-gold-400" />
              </div>
              <h3 className="font-heading font-bold text-lg text-maroon-950">Overview</h3>
            </div>
            <div className="bg-cream rounded-2xl p-6 border border-maroon-100">
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base font-body">
                {project.fullDescription}
              </p>
            </div>
          </div>

          {/* Problem and Outcome Grid */}
          {(project.problem || project.outcome) && (
            <div className="grid sm:grid-cols-2 gap-6">
              {project.problem && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                      <AlertTriangle className="w-4 h-4 text-red-600" />
                    </div>
                    <h3 className="font-heading font-bold text-base text-maroon-950">Problem It Solves</h3>
                  </div>
                  <div className="bg-red-50/50 rounded-2xl p-5 border border-red-100 h-full">
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {project.problem}
                    </p>
                  </div>
                </div>
              )}

              {project.outcome && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <h3 className="font-heading font-bold text-base text-maroon-950">Key Outcome</h3>
                  </div>
                  <div className="bg-green-50/50 rounded-2xl p-5 border border-green-100 h-full">
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {project.outcome}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Timeline if present */}
          {project.timeline && project.timeline.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-maroon-950 rounded-lg flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-gold-400" />
                </div>
                <h3 className="font-heading font-bold text-lg text-maroon-950">Project Timeline</h3>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                {project.timeline.map((item, idx) => (
                  <div key={idx} className="p-4 bg-white rounded-xl border border-maroon-100 shadow-sm relative">
                    <span className="inline-block bg-maroon-50 text-maroon-950 text-xs font-heading font-semibold px-2.5 py-0.5 rounded-full mb-2">
                      {item.timeframe}
                    </span>
                    <h4 className="font-heading font-bold text-maroon-950 text-sm mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Role & Teammates */}
          <div className="grid sm:grid-cols-2 gap-6">
            {/* My Role */}
            {project.role && (
              <div className="bg-maroon-950 text-white rounded-2xl p-6 pattern-dots-dark">
                <div className="flex items-center gap-2 mb-3">
                  <UserCircle className="w-5 h-5 text-gold-400" />
                  <h3 className="font-heading font-bold text-base text-white">My Role: {project.role}</h3>
                </div>
                {project.responsibilities && (
                  <ul className="space-y-2 mt-3">
                    {project.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-200">
                        <span className="text-gold-400 font-bold">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {/* Teammates */}
            {project.teammates && project.teammates.length > 0 && (
              <div className="bg-white rounded-2xl p-6 border border-maroon-100 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-5 h-5 text-maroon-950" />
                  <h3 className="font-heading font-bold text-base text-maroon-950">Project Collaborators</h3>
                </div>
                <div className="space-y-2.5">
                  {project.teammates.map((tm, idx) => (
                    <div 
                      key={idx} 
                      className={`flex items-center gap-3 p-2.5 rounded-xl border ${
                        tm.isUser 
                          ? 'bg-gold-50 border-gold-200' 
                          : 'bg-maroon-50/50 border-maroon-100'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-heading font-bold text-xs ${
                        tm.isUser ? 'bg-gold-400 text-maroon-950' : 'bg-maroon-950 text-gold-400'
                      }`}>
                        {tm.initials}
                      </div>
                      <div>
                        <p className="text-maroon-950 text-xs font-heading font-bold">{tm.name}</p>
                        <p className="text-gray-500 text-[11px]">{tm.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Learnings if present */}
          {project.learnings && project.learnings.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-maroon-950 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-gold-400" />
                </div>
                <h3 className="font-heading font-bold text-lg text-maroon-950">Key Learnings & Takeaways</h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.learnings.map((item, idx) => (
                  <div key={idx} className="p-4 bg-cream rounded-xl border border-maroon-100">
                    <h4 className="font-heading font-bold text-maroon-950 text-sm mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tools Used */}
          <div>
            <span className="text-xs font-heading font-semibold text-maroon-950/70 uppercase tracking-wider block mb-2">
              Technologies & Frameworks Applied:
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-maroon-50 text-maroon-950 rounded-xl text-xs font-heading font-semibold border border-maroon-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer / Action Button */}
        <div className="p-6 bg-cream border-t border-maroon-100 flex items-center justify-between gap-4 flex-shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-white hover:bg-gray-100 text-gray-700 rounded-xl font-heading font-semibold text-xs border border-gray-300 transition-colors"
          >
            Close Details
          </button>

          {project.prototypeUrl && (
            <a
              href={project.prototypeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-maroon-950 hover:bg-maroon-800 text-white px-6 py-2.5 rounded-xl font-heading font-semibold text-xs transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gold-400"
            >
              <ExternalLink className="w-4 h-4 text-gold-400" />
              <span>Open Working Prototype</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
