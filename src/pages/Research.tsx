import { useLanguage } from '@/contexts/LanguageContext';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { cn } from '@/lib/utils';

const researchData = [
  {
    id: 1,
    title: 'Robot Operations and Human–Robot Interaction Research',
    abstract:
      'This research involves programming and operating Universal Robots (UR series) to execute precise, synchronized motion alongside human performers in dance, choreography, and musical projects. In parallel, a miniature encoder-based robotic system was engineered to capture and map manual motion data for translation into large-scale robotic choreography.',
    institution: 'New York University Abu Dhabi',
    lab: 'Robotics and Performance Research Group',
    supervisor: 'Prof. Merritt Moore',
    year: '2024–Present',
  },
  {
     id: 2,
    title: 'Sustainable Metallic Composites via Advanced 3D Printing',
    abstract:
      'This research focuses on the development and characterization of sustainable metallic composites using advanced 3D printing methods. The work involves preparing green metal samples, conducting mechanical testing, and studying debinding and sintering processes to evaluate and improve the mechanical performance and quality of additively manufactured metal components.',
    institution: 'New York University Abu Dhabi',
    lab: 'Structural 3D Printing Lab',
    supervisor: 'NYUAD Structural 3D Printing Lab Team',
    year: 'Jun 2025 – Oct 2025',
  },
  {
    id: 3,
    title: 'Desalination Membranes Integrated with Thermoresponsive Crystals',
    abstract:
      'This research explores sustainable approaches to potable water production through the development of desalination membranes integrated with thermoresponsive crystals synthesized from tetrabromobenzene. The work involves material preparation, nanoscale mechanical testing, and experimental evaluation of membrane–crystal systems to assess their mechanical behavior and suitability for water purification applications.',
    institution: 'New York University Abu Dhabi',
    lab: 'Center for Smart Engineering Materials (CSEM)',
    supervisor: 'Dr. Panče Naumov',
    year: 'Oct 2024 – Jun 2025',
  },
  {
    id: 4,
    title: 'Mechanical Testing and Classification of Photomechanical Crystals',
    abstract:
      'This research focuses on the mechanical testing and classification of photomechanical crystals based on their actuation behavior and mechanical response. The work involves experimental measurement of force, strain, stress, and elastic modulus, along with comparative analysis to position crystal performance relative to existing actuation materials.',
    institution: 'New York University Abu Dhabi',
    lab: 'Center for Smart Engineering Materials (CSEM)',
    supervisor: 'Dr. Panče Naumov',
    year: 'Oct 2024 – Jun 2025',
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

              
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
