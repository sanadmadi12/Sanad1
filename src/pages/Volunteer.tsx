import { Users, Award, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { cn } from '@/lib/utils';

const volunteerData = {
  organizations: [
    {
      name: 'Watenyeh Lal Kheer Charity Initiative',
      role: 'Organizer & Developer',
      period: 'Jan 2022 – Jun 2022',
      description: 'Organized and led a community charity initiative that raised funds from individuals and sponsors to support people in need. Coordinated dinner events for orphans, distributed essential supply boxes to underprivileged families, and helped cover debts for individuals facing financial hardship.',
    },
    {
      name: 'Tau Beta Pi Engineering Honor Society',
      role: 'Active Member',
      period: '2019 - Present',
      description: 'Participated in community outreach programs and engineering tutoring services.',
    },
    {
      name: 'Society of Automotive Engineers (SAE)',
      role: 'Formula SAE Team Lead - Powertrain',
      period: '2018 - 2020',
      description: 'Managed powertrain development for competition vehicle. Led team of 8 engineers.',
    },
  ],
  mentoring: [
    {
      title: 'Undergraduate Research Mentor',
      organization: 'MIT Department of Mechanical Engineering',
      period: '2021 - 2022',
      description: 'Mentored 3 undergraduate students on research projects in computational mechanics.',
    },
    {
      title: 'STEM Outreach Volunteer',
      organization: 'Cambridge Science Festival',
      period: '2020 - 2022',
      description: 'Developed and delivered hands-on engineering demonstrations for K-12 students.',
    },
    {
      title: 'Engineering Tutor',
      organization: 'University of Michigan Engineering Learning Center',
      period: '2018 - 2020',
      description: 'Provided tutoring in statics, dynamics, and thermodynamics to undergraduate students.',
    },
  ],
  conferences: [
    {
      name: 'ASME International Mechanical Engineering Congress (IMECE)',
      location: 'Salt Lake City, UT',
      year: '2022',
      role: 'Paper Presentation',
    },
    {
      name: 'SEM Annual Conference',
      location: 'Virtual',
      year: '2021',
      role: 'Poster Presentation',
    },
    {
      name: 'SAE World Congress',
      location: 'Detroit, MI',
      year: '2020',
      role: 'Student Competition',
    },
    {
      name: 'ASME Student Design Competition',
      location: 'Pittsburgh, PA',
      year: '2019',
      role: 'Team Lead',
    },
  ],
};

export default function Volunteer() {
  const { t, dir } = useLanguage();

  return (
    <div className="section-padding">
      <div className="container-narrow">
        <SectionHeader 
          title={t('volunteer.title')}
          subtitle="Professional involvement, mentoring, and community engagement"
        />

        <div className="max-w-4xl mx-auto space-y-16">
          {/* Volunteering & Charity */}
          <section>
            <div className={cn("flex items-center gap-3 mb-8", dir === 'rtl' && 'flex-row-reverse')}>
              <div className="p-2 bg-accent rounded-lg">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-medium text-foreground">
                {t('volunteer.organizations')}
              </h3>
            </div>

            <div className="space-y-6">
              {volunteerData.organizations.map((org, index) => (
                <div key={index} className="card-academic">
                  <div className={cn(
                    "flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 mb-3",
                    dir === 'rtl' && 'lg:flex-row-reverse'
                  )}>
                    <div>
                      <h4 className="font-medium text-foreground">{org.name}</h4>
                      <p className="text-primary font-medium text-sm">{org.role}</p>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">{org.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{org.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Mentoring & Outreach */}
          <section>
            <div className={cn("flex items-center gap-3 mb-8", dir === 'rtl' && 'flex-row-reverse')}>
              <div className="p-2 bg-accent rounded-lg">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-medium text-foreground">
                {t('volunteer.mentoring')}
              </h3>
            </div>

            <div className="space-y-6">
              {volunteerData.mentoring.map((item, index) => (
                <div key={index} className="card-academic">
                  <div className={cn(
                    "flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 mb-3",
                    dir === 'rtl' && 'lg:flex-row-reverse'
                  )}>
                    <div>
                      <h4 className="font-medium text-foreground">{item.title}</h4>
                      <p className="text-primary font-medium text-sm">{item.organization}</p>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">{item.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
