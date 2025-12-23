import { useState } from 'react';
import { Download, ChevronDown, ChevronUp, Award, GraduationCap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { cn } from '@/lib/utils';

const educationData = [
  {
    degree: 'M.Sc. Mechanical Engineering',
    institution: 'Massachusetts Institute of Technology',
    location: 'Cambridge, MA, USA',
    period: '2020 - 2022',
    gpa: '3.92/4.0',
    honors: ['Magna Cum Laude', 'Dean\'s List'],
    thesis: 'Dynamic Analysis of Composite Structures Under Multi-axial Loading Conditions',
    coursework: [
      'Advanced Dynamics',
      'Finite Element Methods',
      'Computational Mechanics',
      'Nonlinear Systems',
      'Continuum Mechanics',
      'Materials Science',
      'Heat Transfer',
      'Fluid Mechanics',
    ],
  },
  {
    degree: 'B.Sc. Mechanical Engineering',
    institution: 'University of Michigan',
    location: 'Ann Arbor, MI, USA',
    period: '2016 - 2020',
    gpa: '3.85/4.0',
    honors: ['Summa Cum Laude', 'Engineering Honors Program', 'Tau Beta Pi'],
    thesis: 'Design and Optimization of a Micro-Scale Heat Exchanger',
    coursework: [
      'Statics & Dynamics',
      'Thermodynamics',
      'Machine Design',
      'Control Systems',
      'Manufacturing Processes',
      'Mechatronics',
      'Engineering Mathematics',
      'Materials Engineering',
    ],
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

              {/* Thesis */}
              <div className="mb-6 p-4 bg-secondary/50 rounded-lg">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Thesis
                </p>
                <p className="text-foreground italic">"{edu.thesis}"</p>
              </div>

              {/* Coursework */}
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
