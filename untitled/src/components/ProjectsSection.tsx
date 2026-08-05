import React, { useState } from 'react';
import { Project } from '../types';
import { PROJECTS_DATA } from '../data/projectsData';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { FolderGit2, ArrowUpRight, Sparkles, FolderOpen } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section 
      id="capstone" 
      className="relative py-20 lg:py-28 bg-cream section-connector" 
      aria-label="Projects and Community Work section"
    >
      <div className="absolute inset-0 pattern-dots opacity-50"></div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold-100 rounded-full blur-3xl opacity-30 -translate-y-1/3 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-maroon-100 rounded-full blur-3xl opacity-30 translate-y-1/3 -translate-x-1/3"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="fade-in text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="section-badge">06</span>
            <span className="font-heading font-semibold text-maroon-950/50 text-sm uppercase tracking-widest">Portfolio</span>
          </div>
          <h2 className="font-heading font-800 text-3xl sm:text-4xl lg:text-5xl text-maroon-950 tracking-tight">
            PROJECTS & <span className="text-gold-400">COMMUNITY WORK</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base font-body">
            A showcase of my community capstone project and technical initiatives.
          </p>
        </div>

        {/* Project Card Grid (Centered for single or multiple projects) */}
        <div className="flex justify-center mb-16">
          <div className="w-full max-w-xl">
            {PROJECTS_DATA.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onViewDetails={setSelectedProject} 
              />
            ))}
          </div>
        </div>

        {/* Main Button Below: "View Full Portfolio" */}
        <div className="fade-in text-center">
          <div className="inline-flex flex-col items-center bg-white rounded-3xl p-8 sm:p-10 border-2 border-dashed border-gold-300 shadow-md hover:shadow-xl transition-all duration-300 hover:border-gold-400 max-w-xl mx-auto w-full">
            <div className="w-16 h-16 bg-gradient-to-br from-maroon-950 to-maroon-800 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-maroon-950/20">
              <FolderOpen className="w-8 h-8 text-gold-400" />
            </div>
            
            <h3 className="font-heading font-bold text-xl text-maroon-950 mb-2">
              Explore All Code & Case Studies
            </h3>
            
            <p className="text-gray-600 text-sm mb-6 max-w-md font-body leading-relaxed">
              Visit my full GitHub repository collection and external portfolio archives for complete project documentation.
            </p>

            <a
              href="https://github.com/deniella22"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-maroon-950 hover:bg-maroon-800 text-white px-8 py-4 rounded-full font-heading font-bold text-sm tracking-wide transition-all duration-200 hover:shadow-xl hover:shadow-maroon-950/30 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 group"
            >
              <FolderGit2 className="w-5 h-5 text-gold-400 group-hover:scale-110 transition-transform" />
              <span>View Full Portfolio</span>
              <ArrowUpRight className="w-4 h-4 text-gold-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Interactive Modal for detailed view */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};
