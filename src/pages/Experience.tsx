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
    'Arduino',
    'Encoders',
    'Breadboards & Electronic Prototyping',
    'Motion Planning & Calibration'],
  },
  {
    type: 'academic',
    role: 'Graduate Research Assistant',
    company: 'MIT Mechanics Laboratory',
    location: 'Cambridge, MA',
    period: 'Sep 2020 - May 2022',
    responsibilities: [
      'Conducted research on dynamic behavior of composite structures',
      'Developed finite element models for multi-scale analysis',
      'Published 3 peer-reviewed journal articles',
      'Mentored undergraduate students in computational mechanics',
    ],
    tools: ['Abaqus', 'MATLAB', 'Python', 'LaTeX', 'Git'],
  },
  {
    type: 'industry',
    role: 'Mechanical Engineering Intern',
    company: 'General Electric Aviation',
    location: 'Cincinnati, OH',
    period: 'May 2019 - Aug 2019',
    responsibilities: [
      'Assisted in turbine blade design optimization',
      'Performed CFD analysis for aerodynamic performance',
      'Created technical documentation and design reports',
      'Participated in design reviews and failure analysis',
    ],
    tools: ['NX', 'STAR-CCM+', 'ANSYS CFX', 'MS Office'],
  },
  {
    type: 'academic',
    role: 'Undergraduate Research Assistant',
    company: 'University of Michigan',
    location: 'Ann Arbor, MI',
    period: 'Jan 2018 - May 2020',
    responsibilities: [
      'Designed and tested micro-scale heat exchangers',
      'Developed experimental test setups and measurement protocols',
      'Analyzed thermal performance data using statistical methods',
      'Presented findings at undergraduate research symposium',
    ],
    tools: ['SolidWorks', 'LabVIEW', 'MATLAB', 'Origin'],
  },
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
