import React from 'react';
import { Project } from '../types';
import { 
  Rocket, 
  Calculator, 
  Brain, 
  FileText, 
  ArrowUpRight, 
  Eye, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
  const renderIcon = (name: string) => {
    switch (name) {
      case 'rocket':
        return <Rocket className="w-6 h-6 text-maroon-950" />;
      case 'calculator':
        return <Calculator className="w-6 h-6 text-maroon-950" />;
      case 'brain':
        return <Brain className="w-6 h-6 text-maroon-950" />;
      case 'file-text':
      default:
        return <FileText className="w-6 h-6 text-maroon-950" />;
    }
  };

  return (
    <div className="card-hover bg-white rounded-2xl border border-maroon-100 shadow-sm hover:shadow-xl flex flex-col overflow-hidden group transition-all duration-300">
      {/* Top Banner Accent */}
      <div className="relative h-44 bg-gradient-to-br from-maroon-950 via-maroon-900 to-maroon-800 p-6 flex flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 pattern-dots-dark opacity-30"></div>
        <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-gold-400/10 rounded-full blur-xl"></div>

        {/* Top Badges */}
        <div className="relative z-10 flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-heading font-semibold uppercase tracking-wider border border-white/20">
            <Sparkles className="w-3 h-3 text-gold-400" />
            {project.category}
          </span>
          <span className="inline-flex items-center gap-1 bg-gold-400/20 backdrop-blur-md text-gold-300 px-2.5 py-0.5 rounded-full text-xs font-heading font-medium border border-gold-400/30">
            <Calendar className="w-3 h-3 text-gold-400" />
            {project.year}
          </span>
        </div>

        {/* Icon & Title snippet in header */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md shadow-gold-400/20 group-hover:scale-105 transition-transform duration-300">
            {renderIcon(project.iconName)}
          </div>
          <div>
            <h3 className="font-heading font-bold text-white text-lg leading-snug line-clamp-1 group-hover:text-gold-300 transition-colors">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-gray-300 text-xs font-heading font-medium line-clamp-1">
                {project.subtitle}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Location / Meta info if available */}
          {project.location && (
            <div className="flex items-center gap-1.5 text-xs text-gray-500 font-heading mb-3">
              <MapPin className="w-3.5 h-3.5 text-gold-500" />
              <span>{project.location}</span>
            </div>
          )}

          {/* Short Description */}
          <p className="text-gray-600 text-sm leading-relaxed mb-5 font-body line-clamp-3">
            {project.shortDescription}
          </p>

          {/* Tools Used */}
          <div className="mb-6">
            <span className="text-xs font-heading font-semibold text-maroon-950/70 uppercase tracking-wider block mb-2">
              Tools Used:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-maroon-50 text-maroon-950 rounded-lg text-xs font-medium font-heading border border-maroon-100/80 hover:bg-maroon-100 transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Card Action Buttons */}
        <div className="pt-4 border-t border-maroon-100/60 flex items-center justify-between gap-3">
          <button
            onClick={() => onViewDetails(project)}
            className="w-full inline-flex items-center justify-center gap-2 bg-maroon-950 hover:bg-maroon-800 text-white px-4 py-2.5 rounded-xl text-xs font-heading font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 shadow-sm hover:shadow-md group/btn"
          >
            <Eye className="w-4 h-4 text-gold-400 group-hover/btn:scale-110 transition-transform" />
            <span>View Details</span>
          </button>

          {project.prototypeUrl && (
            <a
              href={project.prototypeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center justify-center p-2.5 bg-gold-50 hover:bg-gold-100 text-maroon-950 rounded-xl border border-gold-200 text-xs font-heading font-semibold transition-all duration-200 hover:shadow-sm"
              title="Open Prototype Link"
            >
              <ArrowUpRight className="w-4 h-4 text-maroon-950" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
