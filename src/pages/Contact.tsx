import { useState } from 'react';
import { Send, Linkedin, Github, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const { t, dir } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: 'Message sent!',
      description: 'Thank you for your message. I will get back to you soon.',
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="section-padding">
      <div className="container-narrow">
        <SectionHeader 
          title={t('contact.title')}
        />

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h3 className="font-serif text-xl font-medium text-foreground mb-6">
                {t('contact.getInTouch')}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label 
                      htmlFor="name" 
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      {t('contact.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-input rounded focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label 
                      htmlFor="email" 
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      {t('contact.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-input rounded focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label 
                    htmlFor="subject" 
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    {t('contact.subject')}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-input rounded focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    {t('contact.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-input rounded focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "btn-primary gap-2",
                    isSubmitting && 'opacity-75 cursor-not-allowed'
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      {t('contact.send')}
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="card-academic h-full">
                <h3 className="font-serif text-xl font-medium text-foreground mb-6">
                  {t('contact.connect')}
                </h3>

                <div className="space-y-6">
                  {/* Email */}
                  <div className={cn("flex items-start gap-4", dir === 'rtl' && 'flex-row-reverse')}>
                    <div className="p-2 bg-accent rounded-lg">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{t('contact.email')}</p>
                      <a 
                        href="mailto:sanadmadi12@gmail.com"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        sanadmadi12@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className={cn("flex items-start gap-4", dir === 'rtl' && 'flex-row-reverse')}>
                    <div className="p-2 bg-accent rounded-lg">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{t('contact.location')}</p>
                      <p className="text-foreground">New York City, New York, USA</p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-border pt-6">
                    <p className="text-sm font-medium text-muted-foreground mb-4">
                      Professional Profiles
                    </p>
                    <div className="flex items-center gap-3">
                      <a
                        href="www.linkedin.com/in/sanad-madi-63101b2a9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 bg-secondary text-foreground rounded hover:bg-secondary/80 transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                        <span className="text-sm font-medium">LinkedIn</span>
                      </a>
                      <a
                        href="https://github.com/sanadmadi12"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 bg-secondary text-foreground rounded hover:bg-secondary/80 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                        <span className="text-sm font-medium">GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
