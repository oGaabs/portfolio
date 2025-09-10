import { Briefcase, Calendar, MapPin } from 'lucide-react';
import experiences from '~/assets/WorkExperience';

function formatDateLabel(dateStr: string | null) {
  if (!dateStr) return 'Present';
  const d = new Date(dateStr);
  return d.toLocaleString('en-US', { month: 'short', year: 'numeric' });
}

function calcDuration(startStr: string, endStr: string | null) {
  const start = new Date(startStr);
  const end = endStr ? new Date(endStr) : new Date();

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const parts: string[] = [];
  if (years > 0) parts.push(`${years} year${years > 1 ? 's' : ''}`);
  if (months > 0) parts.push(`${months} month${months > 1 ? 's' : ''}`);
  if (parts.length === 0) return 'Less than a month';
  return parts.join(' ');
}

function ExperienceCard({ experience }: { experience: any }) {
  const start = experience.startDate;
  const end = experience.endDate ?? null;
  const startLabel = formatDateLabel(start);
  const endLabel = formatDateLabel(end);
  const duration = calcDuration(start, end);

  const periodLabel = `${startLabel} - ${endLabel} · ${duration}`;

  return (
    <div className="bg-card border border-border rounded-xl p-8 hover:bg-accent transition-all duration-300">
      <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
        <div className="flex-shrink-0 mb-4 md:mb-0">
          <div className="w-16 h-16 bg-secondary/10 border border-secondary/20 rounded-full flex items-center justify-center">
            <Briefcase className="w-8 h-8 text-secondary" />
          </div>
        </div>
        <div className="flex-grow">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-1">
                {experience.title}
              </h3>
              <h4 className="text-xl text-secondary font-semibold mb-2">
                {experience.company}
              </h4>
            </div>
            <div className="flex flex-col md:items-end space-y-1">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-medium">{periodLabel}</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{experience.location}</span>
              </div>
            </div>
          </div>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {experience.description}
          </p>
          <div>
            <h5 className="font-semibold text-foreground mb-2">Key Achievements:</h5>
            <ul className="space-y-1">
              {experience.highlights.map((highlight: string, highlightIndex: number) => (
                <li key={highlightIndex} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground text-sm">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-cyan-400 mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My professional journey in software development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
}