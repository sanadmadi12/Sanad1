import { Link } from 'react-router-dom';
import { Download, ArrowRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

export default function Home() {
  const { t, dir } = useLanguage();

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight - 100, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary/30 to-background overflow-hidden">
        

        <div className="container-narrow relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Name */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-foreground mb-4 opacity-0 animate-fade-in-up">
              Sanad Madi
            </h1>

            {/* Title */}
            <p className="text-lg sm:text-xl lg:text-2xl text-primary font-medium mb-2 opacity-0 animate-fade-in-up stagger-1">
              {t('hero.title')}
            </p>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 opacity-0 animate-fade-in-up stagger-2">
              {t('hero.subtitle')}
            </p>

            {/* Summary */}
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto opacity-0 animate-fade-in-up stagger-3">
              {t('hero.summary')}
            </p>

            {/* CTAs */}
            <div className={cn(
              "flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up stagger-4",
              dir === 'rtl' && 'sm:flex-row-reverse'
            )}>
              <a
                href="/cv.pdf"
                download
                className="btn-primary gap-2 w-full sm:w-auto"
              >
                <Download className="w-4 h-4" />
                {t('hero.downloadCV')}
              </a>
              <Link
                to="/projects"
                className="btn-secondary gap-2 w-full sm:w-auto"
              >
                {t('hero.viewProjects')}
                <ArrowRight className={cn("w-4 h-4", dir === 'rtl' && 'rotate-180')} />
              </Link>
              <Link
                to="/contact"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
              >
                {t('hero.contact')}
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </section>

      {/* Quick Overview Section */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Research */}
            <Link to="/research" className="card-academic group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent rounded-lg">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                    {t('nav.research')}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Published research in dynamics, materials science, and computational mechanics.
                  </p>
                </div>
              </div>
            </Link>

            {/* Projects */}
            <Link to="/projects" className="card-academic group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent rounded-lg">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                    {t('nav.projects')}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Engineering projects showcasing CAD, simulation, and analysis work.
                  </p>
                </div>
              </div>
            </Link>

            {/* Publications */}
            <Link to="/publications" className="card-academic group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent rounded-lg">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                    {t('nav.publications')}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Access CV, transcripts, papers, and certificates.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-narrow">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-serif text-3xl lg:text-4xl font-medium">5+</p>
              <p className="text-sm mt-1 opacity-80">Years Experience</p>
            </div>
            <div>
              <p className="font-serif text-3xl lg:text-4xl font-medium">12</p>
              <p className="text-sm mt-1 opacity-80">Publications</p>
            </div>
            <div>
              <p className="font-serif text-3xl lg:text-4xl font-medium">20+</p>
              <p className="text-sm mt-1 opacity-80">Projects</p>
            </div>
            <div>
              <p className="font-serif text-3xl lg:text-4xl font-medium">3</p>
              <p className="text-sm mt-1 opacity-80">Patents</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
