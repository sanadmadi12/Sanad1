import { useState } from 'react';
import { ExternalLink, Github, X, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { cn } from '@/lib/utils';

const projectsData = [
  {
    id: 1,
    title: 'Rankine Cycle Simulator (XSteam)',
    category: 'Energy Systems',
    thumbnail: 'rankcs.png',
    problem: 'Build a MATLAB tool that simulates Rankine-cycle power plants using steam tables to compare ideal, reheat, and regenerative configurations.',
    approach: 'Implemented an interactive MATLAB workflow that calls XSteam properties to compute state points, turbine/pump work, heat transfer, and cycle efficiency across multiple cycle types.',
    results: 'Enabled quick comparison between Ideal Rankine, Reheat Rankine, and Regenerative Rankine cycles with consistent state-property calculations and repeatable outputs for analysis.',
    tools: ['MATLAB', 'XSteam', 'Thermodynamics', 'Energy Systems'],
    github: 'https://github.com/sanadmadi12/Rankine-Cycle-Simulator',
  },
  {
    id: 2,
    title: 'Shoulder Joint Housing for a 6-DOF Robot',
    category: 'Mechanical Design',
    thumbnail: 'jointsc.png',
    problem: 'Design a compact shoulder-joint housing for a 6-DOF robotic arm that securely integrates a 65×50×7 bearing and an AS5600 encoder mount, supports repeatable assembly, and uses M2.5 fasteners while maintaining manufacturability.',
    approach: 'Designed the housing in SolidWorks around the bearing and encoder geometry, then evaluated the design using SolidWorks Simulation and refined it using optimization tools to improve structural performance and fit.',
    results: 'Produced an optimized shoulder-joint housing with validated clearances for the bearing and encoder mount and improved mechanical robustness for assembly and integration.',
    tools: ['SolidWorks',
      'SolidWorks Simulation',
      'Design Optimization',
      'Mechanical Assembly Design'],
    github: 'https://github.com/sanadmadi12/6dof-robot-shoulder-joint-housing',
  },
  {
    id: 3,
    title: 'Encoder & Bearing Enclosure',
    category: 'Mechanical Design',
    thumbnail: 'encsc.png',
    problem: 'Design a compact enclosure to securely house an AS5600 encoder and a 65×50×7 bearing with precise alignment, repeatable assembly using M2 screws, and manufacturability through 3D printing.',
    approach: 'Modeled the enclosure in SolidWorks with dedicated mounting features for the encoder and bearing, applied geometric dimensioning and tolerancing (GD&T), and fabricated the design using 3D printing for physical validation.',
    results: 'Achieved a verified enclosure with confirmed dimensional accuracy, proper encoder alignment, and successful assembly after physical testing of the printed part.',
    tools: ['SolidWorks',
      'GD&T',
      '3D Printing',
      'Mechanical Fit & Tolerance Analysis',],
    github: 'https://github.com/sanadmadi12/encoder-bearing-enclosure-gdt',
  },
  {
    id: 4,
    title: 'UR20 Choreography Software & Robotic Performance System',
    category: 'Robotics & Automation',
    thumbnail: 'gitexsc.png',
    problem: 'Enable reliable execution and modification of complex robotic choreography on a UR20 robot by converting existing URP-based dance routines into editable URScript compatible with PolyScope X, while ensuring robust system operation during a live public performance.',
    approach: 'Developed a software pipeline that ingests URP files from an existing choreography, converts them into URScript, and represents the motion as interactive nodes and waypoints for structured editing. Implemented functionality to save modified trajectories and create executable URScript/URPX files for deployment on the UR20 PolyScope X. In parallel, led technical setup, calibration, and system validation of the robot for a live performance environment.',
    results: 'Successfully enabled interactive editing and redeployment of complex choreographic motion on the UR20, achieving reliable execution during a public demonstration at GITEX Dubai. Maintained stable robot operation throughout rehearsals and live performance, ensuring accurate timing, smooth motion execution, and uninterrupted choreography.',
    tools:   ['URScript',
     'URP / URPX File Handling',
      'Python',
      'Robotics System Integration',
      'Web-Based Software Development',
      'Motion Waypoints & Node Graphs'],
    github: null,
  },
  // {
  //   id: 4,
  //   title: 'Vibration Analysis System',
  //   category: 'Dynamics',
  //   thumbnail: null,
  //   problem: 'Develop a real-time vibration monitoring system for rotating machinery condition monitoring.',
  //   approach: 'Designed sensor array and data acquisition system. Implemented FFT-based analysis with machine learning for fault detection.',
  //   results: 'System detects bearing faults 2-3 weeks before failure with 92% accuracy.',
  //   tools: ['LabVIEW', 'Python', 'TensorFlow', 'MATLAB'],
  //   github: 'https://github.com/example/vibration-monitor',
  // },
  // {
  //   id: 5,
  //   title: 'Lightweight Bracket Design',
  //   category: 'Structural',
  //   thumbnail: null,
  //   problem: 'Redesign aerospace mounting bracket for additive manufacturing to reduce weight while maintaining structural integrity.',
  //   approach: 'Applied topology optimization with manufacturing constraints. Validated design through FEA and physical testing.',
  //   results: '45% weight reduction achieved while meeting all structural requirements. Successfully printed and tested.',
  //   tools: ['SolidWorks', 'ANSYS', 'Altair Inspire', 'GD&T'],
  //   github: null,
  // },
  // {
  //   id: 6,
  //   title: 'Pneumatic Actuator Control',
  //   category: 'Control Systems',
  //   thumbnail: null,
  //   problem: 'Design precise position control system for pneumatic actuators in industrial automation applications.',
  //   approach: 'Implemented model predictive control with pressure feedback. Hardware-in-the-loop simulation for controller tuning.',
  //   results: 'Achieved ±0.1mm positioning accuracy with 50% faster response than conventional PID control.',
  //   tools: ['Simulink', 'C++', 'Arduino', 'PLC'],
  //   github: 'https://github.com/example/pneumatic-control',
  // },
];

export default function Projects() {
  const { t, dir } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

  return (
    <div className="section-padding">
      <div className="container-narrow">
        <SectionHeader 
          title={t('projects.title')}
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
              {/* Thumbnail */}
              <div className="aspect-video bg-secondary rounded-lg mb-4 overflow-hidden">
                {project.thumbnail ? (
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    <svg className="w-12 h-12 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
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
