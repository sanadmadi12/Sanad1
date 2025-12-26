import { Briefcase, GraduationCap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { cn } from '@/lib/utils';

const experienceData = [
  {
    type: 'academic',
    role: 'Robot Operations & Lab Intern',
    company: 'New York University Abu Dhabi',
    location: 'Abu Dhabi, UAE',
    period: 'Sep 2025 – Present',
    responsibilities: [
      'Program and operate Universal Robots (UR series) to execute precise, synchronized motion alongside human performers in dance, choreography, and musical projects.',
      'Develop motion sequences and control logic through calibration and synchronization testing to improve system accuracy and responsiveness.',
      'Design and build a miniature encoder-based robotic system to capture and map manual motion data for translation into large-scale robotic choreography.',
      'Integrate Arduino-based hardware with encoders, breadboards, and wiring assemblies for motion sensing and system prototyping.',
    ],
    tools: ['Universal Robots (UR Series)',
    'Python',
    'SolidWorks',
    'Arduino',
    'Encoders',
    'Breadboards & Electronic Prototyping',
    'Motion Planning & Calibration'],
  },
  {
    type: 'industry',
    role: 'Renewable Energy Engineer',
    company: 'TAQA Power',
    location: 'Cairo, Egypt',
    period: 'Jun 2025 – Aug 2025',
    responsibilities: [
      'Modeled and analyzed photovoltaic systems using PVsyst and SketchUp to perform yield simulations and optimize system layouts.',
      'Collaborated with the investment team to integrate technical performance analysis with financial feasibility studies for future energy projects.',
      'Gained hands-on exposure to large-scale renewable energy workflows, emphasizing sustainability, system design, and decision-making processes.',
    ],
    tools: ['PVsyst',
    'SketchUp',
    'Solar PV System Design',
    'Energy Yield Analysis',],
  },
  {
    type: 'academic',
    role: 'Undergraduate Research Assistant',
    company: 'Structural 3D Printing Lab, NYU Abu Dhabi',
    location: 'Abu Dhabi, UAE',
    period: 'Jun 2025 – Oct 2025',
    responsibilities: [
       'Prepared and fabricated green metal samples using advanced 3D printing methods across various geometries and configurations.',
      'Conducted mechanical testing and specimen characterization to evaluate performance, reliability, and material behavior.',
      'Studied and optimized debinding and sintering processes to improve mechanical properties and overall quality of printed metals.',
    ],
    tools: [ 'Metal 3D Printing',
    'Mechanical Testing',
    'Material Characterization',
    'Debinding & Sintering',],
  },
  {
    type: 'academic',
    role: 'Undergraduate Research Assistant',
    company: 'Center for Smart Engineering Materials, NYU Abu Dhabi',
    location: 'Abu Dhabi, UAE',
    period: 'Oct 2024 – Jun 2025',
    responsibilities: [
      'Prepared desalination membrane and crystal materials for sustainable water purification research integrating mechanical engineering and chemistry.',
      'Performed mechanical and nanoscale testing to evaluate material behavior and suitability for desalination applications.',
      'Assisted in the design and experimental evaluation of membrane–crystal systems to enhance purification performance.',
    ],
    tools: ['Nanoindentation Testing',
    'Tensile Testing',
    'Optical & Microscopy Analysis',
    'Mechanical Testing Software',
    'Material Characterization',,
    'Desalination Membrane Design'],
  },
  {
  type: 'industry',
  role: 'Mechanical Technician Intern',
  company: 'Harley-Davidson',
  location: 'Amman, Jordan',
  period: 'Jul 2024 – Aug 2024',
  responsibilities: [
    'Gained hands-on exposure to motorcycle assembly, maintenance, and diagnostic workflows in a technician-focused training environment.',
    'Developed practical understanding of how mechanical components function together across different Harley-Davidson motorcycle models.',
    'Applied diagnostic and repair techniques to identify issues and support efficient maintenance and service procedures.',
  ],
  tools: [
    'Mechanical Diagnostics',
    'Maintenance & Repair Procedures',
    'Motorcycle Systems',
    'Technical Troubleshooting',
  ],
  },
  {
  type: 'industry',
  role: 'Mechanical Technician Intern',
  company: 'Bosch',
  location: 'Amman, Jordan',
  period: 'Jun 2022 – Aug 2022',
  responsibilities: [
    'Diagnosed automotive mechanical issues and identified efficient repair and troubleshooting procedures.',
    'Performed hands-on mechanical repair and maintenance tasks independently while adhering to safety and quality standards.',
    'Developed a strong understanding of mechanical systems through component-level diagnostics and real-world servicing.',
  ],
  tools: [
    'Vehicle Inspection & Fault Identification',
    'Automotive Repair Tools',
    'Troubleshooting & Maintenance',
    'Technical Documentation',
  ],
  }
];

export default function Experience() {
  const { t, dir } = useLanguage();

  return (
    <div className="section-padding">
      <div className="container-narrow">
        <SectionHeader 
          title={t('experience.title')}
          subtitle="Industry and academic experience in mechanical engineering"
        />

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className={cn("relative", dir === 'rtl' ? 'pr-8' : 'pl-8')}>
            {/* Timeline Line */}
            <div className={cn(
              "absolute top-0 bottom-0 w-0.5 bg-border",
              dir === 'rtl' ? 'right-0' : 'left-0'
            )} />

            {experienceData.map((exp, index) => (
              <div 
                key={index} 
                className={cn(
                  "relative pb-12 last:pb-0",
                  dir === 'rtl' ? 'pr-8' : 'pl-8'
                )}
              >
                {/* Timeline Dot */}
                <div className={cn(
                  "absolute top-1 w-4 h-4 rounded-full border-2 border-primary bg-background",
                  dir === 'rtl' ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'
                )} />

                <div className="card-academic">
                  {/* Header */}
                  <div className={cn(
                    "flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4",
                    dir === 'rtl' && 'lg:flex-row-reverse'
                  )}>
                    <div className={cn("flex items-start gap-3", dir === 'rtl' && 'flex-row-reverse')}>
                      <div className={cn(
                        "p-2 rounded-lg",
                        exp.type === 'industry' ? 'bg-accent' : 'bg-secondary'
                      )}>
                        {exp.type === 'industry' ? (
                          <Briefcase className="w-5 h-5 text-primary" />
                        ) : (
                          <GraduationCap className="w-5 h-5 text-primary" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-serif text-lg font-medium text-foreground">
                          {exp.role}
                        </h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.location}</p>
                      </div>
                    </div>
                    <div className={cn(
                      "flex items-center gap-2",
                      dir === 'rtl' && 'flex-row-reverse'
                    )}>
                      <span className={cn(
                        "px-2 py-0.5 text-xs font-medium rounded",
                        exp.type === 'industry' 
                          ? 'bg-accent text-accent-foreground' 
                          : 'bg-secondary text-foreground'
                      )}>
                        {exp.type === 'industry' ? t('experience.industry') : t('experience.academic')}
                      </span>
                      <span className="text-sm font-medium text-muted-foreground">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      {t('experience.responsibilities')}
                    </h4>
                    <ul className={cn(
                      "space-y-2",
                      dir === 'rtl' ? 'pr-4' : 'pl-4'
                    )}>
                      {exp.responsibilities.map((resp, i) => (
                        <li 
                          key={i} 
                          className="text-muted-foreground relative before:content-['•'] before:absolute before:text-primary before:-translate-x-4"
                        >
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tools */}
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      {t('experience.tools')}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 bg-secondary text-foreground text-sm rounded"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
