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
              <div className="w-48 h-48 lg:w-64 lg:h-64 mx-auto bg-secondary rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <svg className="w-24 h-24 opacity-30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="flex-1">
              <h3 className="font-serif text-2xl font-medium text-foreground mb-4">
                {t('about.background')}
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I am a Mechanical Engineer with a strong foundation in theoretical mechanics and applied computational methods. My academic journey has taken me through rigorous training in fundamental engineering sciences, advanced mathematics, and state-of-the-art simulation technologies.
                </p>
                <p>
                  With experience spanning both academic research and industrial applications, I bring a unique perspective that bridges theoretical understanding with practical implementation. My work focuses on developing efficient, reliable, and innovative engineering solutions.
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
