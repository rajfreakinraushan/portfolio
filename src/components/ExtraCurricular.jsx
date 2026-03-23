import Section from './Section';
import { FiActivity } from 'react-icons/fi';

const activities = [
  {
    title: 'Silver Medal – Inter-college Handball',
    desc: 'Demonstrated teamwork, strategy, and physical endurance.',
    link: 'https://drive.google.com/file/d/1_bcbx2aGlAWk-IwdV1FNqr3APTQSLs-b/view?usp=sharing'
  },
  {
    title: 'Senior HR at AIESEC',
    desc: 'Managed international client relations, facilitated virtual meetings, and ensured smooth onboarding for exchange participants.',
    link: null
  }
];

export default function ExtraCurricular() {
  return (
    <Section id="extracurricular">
      <h2 className="section-heading">Extra-Curricular</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {activities.map((act, idx) => (
          <div key={idx} className="glass-panel p-8 hover:-translate-y-1 transition-transform duration-300 text-center md:text-left flex flex-col items-center md:items-start">
            <div className="p-4 rounded-full bg-primary/10 text-primary mb-6">
              <FiActivity size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 tracking-tight">{act.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow leading-relaxed">{act.desc}</p>
            {act.link && (
              <a href={act.link} target="_blank" rel="noreferrer" className="text-sm font-semibold text-primary hover:underline">
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
