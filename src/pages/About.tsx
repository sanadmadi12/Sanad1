import { useLanguage } from '@/contexts/LanguageContext';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { cn } from '@/lib/utils';

const researchAreas = [
  { key: 'dynamics', icon: '⚙️' },
  { key: 'materials', icon: '🔬' },
  { key: 'robotics', icon: '🤖' },
  { key: 'thermoFluids', icon: '🌡️' },
  { key: 'optimization', icon: '📐' },
  { key: 'cae', icon: '💻' },
];

export default function About() {
  const { t, dir } = useLanguage();

  return (
    <div className="section-padding">
      <div className="container-narrow">
        <SectionHeader title={t('about.title')} />

        <div className="max-w-4xl mx-auto">
          {/* Profile Section */}
          <div className={cn(
            "flex flex-col lg:flex-row gap-12 mb-16",
            dir === 'rtl' && 'lg:flex-row-reverse'
          )}>
            {/* Photo Placeholder */}
            <div className="flex-shrink-0">
              <div className="w-48 h-48 lg:w-64 lg:h-64 mx-auto rounded-lg overflow-hidden">
                <img
                  src="/sanad.jpg"
                  alt="Sanad Madi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="flex-1">
              <h3 className="font-serif text-2xl font-medium text-foreground mb-4">
                {t('about.background')}
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I am A mechanical engineering student at New York University, graduating in May 2027, with a strong foundation in engineering fundamentals, system behavior, and structured problem-solving. Academic training across mechanics, materials, design, and energy systems, combined with exposure to research and industrial environments, has shaped an approach focused on understanding how systems function and how engineering decisions translate into real-world performance.
                </p>
                <p>
                  Alongside technical development, experience in collaborative research, coursework, and applied projects has strengthened leadership, teamwork, and communication skills. Work is approached with discipline and clarity, balancing independent thinking with effective collaboration, and guided by the goal of delivering engineering solutions that are robust, well-reasoned, and effective in practice.
                </p>
              </div>
            </div>
          </div>

          {/* Philosophy */}
          <div className="mb-16">
            <h3 className="font-serif text-2xl font-medium text-foreground mb-4">
              {t('about.philosophy')}
            </h3>
            <div className="card-academic">
              <p className="text-muted-foreground leading-relaxed text-lg italic">
                "{t('about.philosophyText')}"
              </p>
            </div>
          </div>

          {/* Research Areas */}
          <div>
            <h3 className="font-serif text-2xl font-medium text-foreground mb-8">
              {t('about.researchAreas')}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {researchAreas.map((area) => (
                <div
                  key={area.key}
                  className="card-academic flex items-center gap-3"
                >
                  <span className="text-2xl">{area.icon}</span>
                  <span className="font-medium text-foreground">
                    {t(`about.${area.key}`)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Expertise */}
          <div className="mt-16">
            <h3 className="font-serif text-2xl font-medium text-foreground mb-8">
              Technical Expertise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* CAD/CAE */}
              <div>
                <h4 className="font-sans text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  CAD & CAE Software
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['SolidWorks', 'CATIA', 'AutoCAD', 'ANSYS', 'Abaqus', 'COMSOL'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-secondary text-foreground text-sm rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Programming */}
              <div>
                <h4 className="font-sans text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  Programming & Analysis
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['MATLAB', 'Python', 'C++', 'R', 'Julia', 'Simulink'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-secondary text-foreground text-sm rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Manufacturing */}
              <div>
                <h4 className="font-sans text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  Manufacturing & Prototyping
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['CNC Machining', '3D Printing', 'GD&T', 'Metrology', 'Lean Manufacturing'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-secondary text-foreground text-sm rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Analysis */}
              <div>
                <h4 className="font-sans text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  Analysis Methods
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['FEA', 'CFD', 'Modal Analysis', 'Fatigue Analysis', 'Optimization'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-secondary text-foreground text-sm rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
