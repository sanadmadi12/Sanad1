import { Download, ExternalLink, FileText } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { cn } from '@/lib/utils';

const researchData = [
  {
    id: 1,
    title: 'Dynamic Response Analysis of Composite Structures Under Multi-Axial Loading',
    abstract: 'This research investigates the dynamic behavior of fiber-reinforced composite structures subjected to combined loading conditions. Using advanced finite element methods and experimental validation, we developed a predictive model for fatigue life estimation under complex stress states.',
    institution: 'MIT Mechanics Laboratory',
    lab: 'Computational Mechanics Group',
    supervisor: 'Prof. Robert Smith',
    year: '2022',
    doi: '10.1016/j.compstruct.2022.xxxxx',
    hasPaper: true,
    hasPoster: true,
  },
  {
    id: 2,
    title: 'Optimization of Lattice Structures for Additive Manufacturing',
    abstract: 'A novel topology optimization framework for designing lightweight lattice structures suitable for additive manufacturing. The method considers manufacturing constraints, material anisotropy, and functional requirements to produce printable, high-performance components.',
    institution: 'MIT Mechanics Laboratory',
    lab: 'Digital Manufacturing Lab',
    supervisor: 'Prof. Sarah Johnson',
    year: '2021',
    doi: '10.1115/1.4052xxx',
    hasPaper: true,
    hasPoster: false,
  },
  {
    id: 3,
    title: 'Thermal Management of Electric Vehicle Battery Packs',
    abstract: 'Development of an integrated thermal management system for lithium-ion battery packs in electric vehicles. The study combines CFD simulations with experimental validation to optimize cooling channel design and improve battery performance and longevity.',
    institution: 'University of Michigan',
    lab: 'Automotive Research Center',
    supervisor: 'Prof. Michael Chen',
    year: '2020',
    doi: '10.1016/j.apenergy.2020.xxxxx',
    hasPaper: true,
    hasPoster: true,
  },
];

export default function Research() {
  const { t, dir } = useLanguage();

  return (
    <div className="section-padding">
      <div className="container-narrow">
        <SectionHeader 
          title={t('research.title')} 
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {researchData.map((research) => (
            <article key={research.id} className="card-academic">
              {/* Title & Year */}
              <div className={cn(
                "flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4",
                dir === 'rtl' && 'lg:flex-row-reverse'
              )}>
                <h3 className="font-serif text-xl font-medium text-foreground leading-snug flex-1">
                  {research.title}
                </h3>
                <span className="text-sm font-medium text-primary whitespace-nowrap">
                  {research.year}
                </span>
              </div>

              {/* Abstract */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  {t('research.abstract')}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {research.abstract}
                </p>
              </div>

              {/* Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 p-4 bg-secondary/50 rounded-lg">
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                    {t('research.institution')}
                  </p>
                  <p className="text-foreground">{research.institution}</p>
                  <p className="text-sm text-muted-foreground">{research.lab}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                    {t('research.supervisor')}
                  </p>
                  <p className="text-foreground">{research.supervisor}</p>
                </div>
              </div>

              {/* Actions */}
              <div className={cn(
                "flex flex-wrap gap-3",
                dir === 'rtl' && 'flex-row-reverse'
              )}>
                {research.hasPaper && (
                  <a
                    href={`/papers/research-${research.id}.pdf`}
                    download
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded hover:bg-primary/90 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    {t('research.downloadPaper')}
                  </a>
                )}
                {research.hasPoster && (
                  <a
                    href={`/posters/research-${research.id}.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-foreground text-sm font-medium rounded hover:bg-secondary/80 transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    {t('research.viewPoster')}
                  </a>
                )}
                <a
                  href={`https://doi.org/${research.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-border text-foreground text-sm font-medium rounded hover:bg-accent transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  {t('research.doiLink')}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
