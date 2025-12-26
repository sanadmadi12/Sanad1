import { useState } from 'react';
import { ExternalLink, Github, X, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { cn } from '@/lib/utils';

const projectsData = [
  {
    id: 1,
    title: 'Autonomous Mobile Robot Platform',
    category: 'Robotics',
    thumbnail: null,
    problem: 'Design a modular mobile robot platform capable of autonomous navigation in unstructured environments for research applications.',
    approach: 'Integrated ROS-based navigation stack with custom-designed chassis featuring modular sensor mounts. Implemented SLAM algorithms for mapping and localization.',
    results: 'Successfully deployed platform for indoor navigation with 95% path completion rate. Modular design allows for rapid reconfiguration.',
    tools: ['SolidWorks', 'ROS', 'Python', 'Arduino', 'LIDAR'],
    github: 'https://github.com/example/robot-platform',
  },
  {
    id: 2,
    title: 'Wind Turbine Blade Optimization',
    category: 'Energy Systems',
    thumbnail: null,
    problem: 'Optimize wind turbine blade geometry for maximum energy capture while minimizing structural weight and manufacturing cost.',
    approach: 'Applied genetic algorithm-based optimization coupled with CFD simulations. Parametric blade model allowed rapid design iteration.',
    results: 'Achieved 12% improvement in power coefficient with 8% weight reduction compared to baseline design.',
    tools: ['MATLAB', 'ANSYS Fluent', 'Python', 'CATIA'],
    github: 'https://github.com/example/turbine-opt',
  },
  {
    id: 3,
    title: 'Heat Exchanger Design Tool',
    category: 'Thermal Systems',
    thumbnail: null,
    problem: 'Develop a comprehensive design tool for compact heat exchangers used in aerospace applications.',
    approach: 'Created MATLAB-based tool implementing correlations for various heat exchanger types. GUI allows parametric studies and optimization.',
    results: 'Tool adopted by industry partner for preliminary design phase, reducing design time by 40%.',
    tools: ['MATLAB', 'Python', 'Excel VBA'],
    github: null,
  },
  {
    id: 4,
    title: 'Vibration Analysis System',
    category: 'Dynamics',
    thumbnail: null,
    problem: 'Develop a real-time vibration monitoring system for rotating machinery condition monitoring.',
    approach: 'Designed sensor array and data acquisition system. Implemented FFT-based analysis with machine learning for fault detection.',
    results: 'System detects bearing faults 2-3 weeks before failure with 92% accuracy.',
    tools: ['LabVIEW', 'Python', 'TensorFlow', 'MATLAB'],
    github: 'https://github.com/example/vibration-monitor',
  },
  {
    id: 5,
    title: 'Lightweight Bracket Design',
    category: 'Structural',
    thumbnail: null,
    problem: 'Redesign aerospace mounting bracket for additive manufacturing to reduce weight while maintaining structural integrity.',
    approach: 'Applied topology optimization with manufacturing constraints. Validated design through FEA and physical testing.',
    results: '45% weight reduction achieved while meeting all structural requirements. Successfully printed and tested.',
    tools: ['SolidWorks', 'ANSYS', 'Altair Inspire', 'GD&T'],
    github: null,
  },
  {
    id: 6,
    title: 'Pneumatic Actuator Control',
    category: 'Control Systems',
    thumbnail: null,
    problem: 'Design precise position control system for pneumatic actuators in industrial automation applications.',
    approach: 'Implemented model predictive control with pressure feedback. Hardware-in-the-loop simulation for controller tuning.',
    results: 'Achieved ±0.1mm positioning accuracy with 50% faster response than conventional PID control.',
    tools: ['Simulink', 'C++', 'Arduino', 'PLC'],
    github: 'https://github.com/example/pneumatic-control',
  },
];

export default function Projects() {
  const { t, dir } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

  return (
    <div className="section-padding">
      <div className="container-narrow">
        <SectionHeader 
          title={t('projects.title')}
          subtitle="Engineering projects showcasing design, analysis, and implementation skills"
        />

        {/* Project Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {projectsData.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={cn(
                "card-academic text-left group",
                dir === 'rtl' && 'text-right'
              )}
            >
              {/* Thumbnail Placeholder */}
              <div className="aspect-video bg-secondary rounded-lg mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <svg className="w-12 h-12 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              {/* Category */}
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                {project.category}
              </span>

              {/* Title */}
              <h3 className="font-serif text-lg font-medium text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              {/* Tools */}
              <div className="flex flex-wrap gap-1.5">
                {project.tools.slice(0, 3).map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-0.5 bg-secondary text-muted-foreground text-xs rounded"
                  >
                    {tool}
                  </span>
                ))}
                {project.tools.length > 3 && (
                  <span className="px-2 py-0.5 text-muted-foreground text-xs">
                    +{project.tools.length - 3}
                  </span>
                )}
              </div>

              {/* View Details */}
              <div className={cn(
                "flex items-center gap-1 mt-4 text-sm text-primary font-medium group-hover:gap-2 transition-all",
                dir === 'rtl' && 'flex-row-reverse'
              )}>
                {t('projects.viewDetails')}
                <ArrowRight className={cn("w-4 h-4", dir === 'rtl' && 'rotate-180')} />
              </div>
            </button>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-foreground/50 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal */}
            <div className="relative bg-card rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className={cn(
                  "absolute top-4 z-10 p-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-full transition-colors",
                  dir === 'rtl' ? 'left-4' : 'right-4'
                )}
              >
                <X className="w-5 h-5" />
              </button>

              {/* Content */}
              <div className="p-6 lg:p-8">
                {/* Header */}
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                <h2 className="font-serif text-2xl lg:text-3xl font-medium text-foreground mt-2 mb-6">
                  {selectedProject.title}
                </h2>

                {/* Problem */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    {t('projects.problem')}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.problem}
                  </p>
                </div>

                {/* Approach */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    {t('projects.approach')}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.approach}
                  </p>
                </div>

                {/* Results */}
                <div className="mb-6 p-4 bg-accent/50 rounded-lg">
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                    {t('projects.results')}
                  </h4>
                  <p className="text-foreground leading-relaxed">
                    {selectedProject.results}
                  </p>
                </div>

                {/* Tools */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    {t('projects.tools')}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 bg-secondary text-foreground text-sm rounded"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded hover:bg-primary/90 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    {t('projects.viewGithub')}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
