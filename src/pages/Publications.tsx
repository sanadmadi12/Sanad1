import { Download, FileText, Award, GraduationCap, BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { cn } from '@/lib/utils';

const downloadsData = {
  cv: {
    name: 'Curriculum Vitae',
    description: 'Complete academic and professional CV',
    file: '/downloads/cv.pdf',
    updated: 'December 2025',
  },
  transcript: {
    name: 'Academic Transcript',
    description: 'Official transcript from NYU',
    file: '/downloads/transcript.pdf',
    updated: 'December 2025',
  },
  papers: [
  //   {
  //     title: 'Dynamic Response Analysis of Composite Structures Under Multi-Axial Loading',
  //     journal: 'Composite Structures',
  //     year: '2022',
  //     file: '/downloads/paper-1.pdf',
  //   },
  //   {
  //     title: 'Optimization of Lattice Structures for Additive Manufacturing',
  //     journal: 'Journal of Mechanical Design',
  //     year: '2021',
  //     file: '/downloads/paper-2.pdf',
  //   },
  //   {
  //     title: 'Thermal Management of Electric Vehicle Battery Packs',
  //     journal: 'Applied Energy',
  //     year: '2020',
  //     file: '/downloads/paper-3.pdf',
  //   },
     ],
   posters: [
  //   {
  //     title: 'Multi-scale Modeling of Composite Materials',
  //     event: 'ASME IMECE 2022',
  //     file: '/downloads/poster-1.pdf',
  //   },
  //   {
  //     title: 'Machine Learning for Structural Health Monitoring',
  //     event: 'SEM Conference 2021',
  //     file: '/downloads/poster-2.pdf',
  //   },
    ],
  certificates: [
    {
      name: 'Certified SolidWorks Professional (CSWP)',
      issuer: 'Dassault Systèmes',
      year: '2021',
      file: '/downloads/cert-cswp.pdf',
    },
    {
      name: 'ANSYS Certified Professional',
      issuer: 'ANSYS, Inc.',
      year: '2020',
      file: '/downloads/cert-ansys.pdf',
    },
    {
      name: 'Six Sigma Green Belt',
      issuer: 'ASQ',
      year: '2019',
      file: '/downloads/cert-sixsigma.pdf',
    },
  ],
};

interface DownloadCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  href: string;
  downloadLabel: string;
  dir: 'ltr' | 'rtl';
}

function DownloadCard({ icon, title, subtitle, href, downloadLabel, dir }: DownloadCardProps) {
  return (
    <div className="card-academic">
      <div className={cn(
        "flex items-start gap-4",
        dir === 'rtl' && 'flex-row-reverse'
      )}>
        <div className="p-3 bg-accent rounded-lg flex-shrink-0">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-foreground truncate">{title}</h4>
          <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>
        </div>
        <a
          href={href}
          download
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary text-primary-foreground text-sm font-medium rounded hover:bg-primary/90 transition-colors flex-shrink-0"
        >
          <Download className="w-4 h-4" />
          <span className="hidden sm:inline">{downloadLabel}</span>
        </a>
      </div>
    </div>
  );
}

export default function Publications() {
  const { t, dir } = useLanguage();

  return (
    <div className="section-padding">
      <div className="container-narrow">
        <SectionHeader 
          title={t('publications.title')}
          subtitle="Access CV, research papers, posters, and certificates"
        />

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Primary Documents */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* CV */}
              <div className="card-academic bg-accent/30">
                <div className={cn("flex items-start gap-4", dir === 'rtl' && 'flex-row-reverse')}>
                  <div className="p-4 bg-primary rounded-lg">
                    <FileText className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-serif text-lg font-medium text-foreground">
                      {t('publications.cv')}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {downloadsData.cv.description}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Updated: {downloadsData.cv.updated}
                    </p>
                    <a
                      href={downloadsData.cv.file}
                      download
                      className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded hover:bg-primary/90 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      {t('publications.download')}
                    </a>
                  </div>
                </div>
              </div>

              {/* Transcript */}
              <div className="card-academic bg-accent/30">
                <div className={cn("flex items-start gap-4", dir === 'rtl' && 'flex-row-reverse')}>
                  <div className="p-4 bg-primary rounded-lg">
                    <GraduationCap className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-serif text-lg font-medium text-foreground">
                      {t('publications.transcript')}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {downloadsData.transcript.description}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Updated: {downloadsData.transcript.updated}
                    </p>
                    <a
                      href={downloadsData.transcript.file}
                      download
                      className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded hover:bg-primary/90 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      {t('publications.download')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Research Papers */}
          <section>
            <h3 className="font-serif text-xl font-medium text-foreground mb-6">
              {t('publications.papers')}
            </h3>
            <div className="space-y-4">
              {downloadsData.papers.map((paper, index) => (
                <DownloadCard
                  key={index}
                  icon={<BookOpen className="w-5 h-5 text-primary" />}
                  title={paper.title}
                  subtitle={`${paper.journal} • ${paper.year}`}
                  href={paper.file}
                  downloadLabel={t('publications.download')}
                  dir={dir}
                />
              ))}
            </div>
          </section>

          {/* Posters */}
          <section>
            <h3 className="font-serif text-xl font-medium text-foreground mb-6">
              {t('publications.posters')}
            </h3>
            <div className="space-y-4">
              {downloadsData.posters.map((poster, index) => (
                <DownloadCard
                  key={index}
                  icon={<FileText className="w-5 h-5 text-primary" />}
                  title={poster.title}
                  subtitle={poster.event}
                  href={poster.file}
                  downloadLabel={t('publications.download')}
                  dir={dir}
                />
              ))}
            </div>
          </section>

          {/* Certificates */}
          <section>
            <h3 className="font-serif text-xl font-medium text-foreground mb-6">
              {t('publications.certificates')}
            </h3>
            <div className="space-y-4">
              {downloadsData.certificates.map((cert, index) => (
                <DownloadCard
                  key={index}
                  icon={<Award className="w-5 h-5 text-primary" />}
                  title={cert.name}
                  subtitle={`${cert.issuer} • ${cert.year}`}
                  href={cert.file}
                  downloadLabel={t('publications.download')}
                  dir={dir}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
