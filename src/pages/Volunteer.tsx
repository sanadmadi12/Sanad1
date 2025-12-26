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
      name: 'Community Outreach Office',
      role: 'Volunteer',
      period: '2023 - Present',
      description: 'Participated in community outreach initiatives organized by NYU Abu Dhabi, including environmental volunteering such as mangrove planting and other service activities supporting local community engagement and sustainability efforts.',
    },
    {
      name: 'Sharek Camp',
      role: 'Volunteer Facilitator',
      period: 'Sep 2022 – Jan 2023',
      description: 'Facilitated day-long activities and games for orphans of different age groups, coordinated recreational outings, and supported daily camp logistics including meal service..',
    },
  ],
  mentoring: [
    {
      title: 'Weyak Program',
      organization: 'First-Year Experience Committee, NYU Abu Dhabi',
      period: 'Aug 2024 – Dec 2024',
      description: 'Mentored first-year students through academic, social, and personal guidance, and supported orientation activities and community-building discussions.',
    },
    {
      title: 'High School Tutor',
      organization: 'Mentora',
      period: '2023 – Present',
      description: 'Tutored high school students (grades 8–12) in mathematics, chemistry, physics, and biology, providing academic support across multiple STEM subjects.',
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
