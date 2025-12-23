import { Link } from 'react-router-dom';
import { Linkedin, Github, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container-narrow py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="font-serif text-xl font-semibold text-foreground">
              Portfolio
            </Link>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Mechanical Engineer | Research-Driven | Systems & Design
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              <Link to="/research" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {t('nav.research')}
              </Link>
              <Link to="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {t('nav.projects')}
              </Link>
              <Link to="/publications" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {t('nav.publications')}
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {t('nav.contact')}
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-sans text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              {t('contact.connect')}
            </h4>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary hover:bg-accent rounded transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary hover:bg-accent rounded transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="p-2 text-muted-foreground hover:text-primary hover:bg-accent rounded transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} {t('footer.rights')}</p>
            <p>{t('footer.designed')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
