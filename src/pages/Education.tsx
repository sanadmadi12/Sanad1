import { useState } from 'react';
import { Download, ChevronDown, ChevronUp, Award, GraduationCap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { cn } from '@/lib/utils';

const educationData = [
  {
    degree: 'B.S. Mechanical Engineering',
    institution: 'New York University Abu Dhabi',
    location: 'Abu Dhabi, UAE',
    period: '2023 – 2027',
    gpa: '3.915',
    honors: [],
    thesis: 'Focus: Dynamical systems, mechanics, and robotics.',
    coursework: [
      'Modelling and Analysis of Dynamical Systems',
      'Robotic Manipulation and Locomotion',
      'Advanced Solid Mechanics',
      'Statics & Dynamics',
      'Structural Systems',
      'Fluid Mechanics',
      'Heat Transfer',
      'Thermodynamics'
    ],
  },
  {
    degree: 'International Baccalaureate (IB)',
    institution: 'Amman National School',
    location: 'Amman, Jordan',
    period: '2020 – 2023',
    gpa: '41/45',
    honors: ['Valedictorian'],
    thesis: null,
    coursework: [],
  },
];

export default function Education() {
  const { t, dir } = useLanguage();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <div className="section-padding">
      <div className="container-narrow">
        <SectionHeader title={t('education.title')} />

        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="card-academic">
              {/* Header */}
              <div className={cn(
                "flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6",
                dir === 'rtl' && 'lg:flex-row-reverse'
              )}>
                <div className={cn("flex items-start gap-4", dir === 'rtl' && 'flex-row-reverse')}>
                  <div className="p-3 bg-accent rounded-lg">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-medium text-foreground">
                      {edu.degree}
                    </h3>
                    <p className="text-primary font-medium">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.location}</p>
                  </div>
                </div>
                <div className={cn("text-sm", dir === 'rtl' ? 'lg:text-left' : 'lg:text-right')}>
                  <p className="font-medium text-foreground">{edu.period}</p>
                  <p className="text-muted-foreground">{t('education.gpa')}: {edu.gpa}</p>
                </div>
              </div>

              {/* Honors */}
              {edu.honors.length > 0 && (
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  {t('education.honors')}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.honors.map((honor) => (
                    <span
                      key={honor}
                      className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent text-accent-foreground text-sm rounded"
                    >
                      <Award className="w-3.5 h-3.5" />
                      {honor}
                    </span>
                  ))}
                </div>
              </div>
              )}

              {/* Thesis */}
              {edu.thesis && (
              <div className="mb-6 p-4 bg-secondary/50 rounded-lg">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Focus
                </p>
                <p className="text-foreground italic">"{edu.thesis}"</p>
              </div>
              )}

              {/* Coursework */}
              {edu.coursework && edu.coursework.length > 0 && (
              <div>
                <button
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  {t('education.coursework')}
                  {expandedIndex === index ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
                
                {expandedIndex === index && (
                  <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-3 py-2 bg-secondary text-foreground text-sm rounded text-center"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              )}
            </div>
          ))}

          {/* Download Transcript */}
          <div className="text-center pt-8">
            <a
              href="/transcript.pdf"
              download
              className="btn-primary gap-2"
            >
              <Download className="w-4 h-4" />
              {t('education.transcript')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
