import Section from './Section';
import { FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: 'CryptoKaro',
    description: 'Cryptocurrency tracking platform with AI insights. Features secure tracking, real-time market data via CoinGecko API, and integrated chatbot assistance.',
    tech: ['React', 'Node.js', 'Express', 'CoinGecko API', 'AI Chatbot'],
    github: 'https://github.com/rajfreakinraushan/Crypto-Project'
  },
  {
    title: 'AgriSmart',
    description: 'Agricultural waste management platform focused on connecting farmers with proper disposal services and recycling methods to ensure environmental sustainability.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'XAMPP'],
    github: 'https://github.com/rajfreakinraushan/agrismartplanner'
  }
];

export default function Projects() {
  return (
    <Section id="projects" className="bg-slate-100/30 dark:bg-slate-800/20">
      <h2 className="section-heading">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((proj, idx) => (
          <div key={idx} className="glass-panel p-8 flex flex-col h-full hover:-translate-y-1 hover:shadow-lg transition-transform duration-300">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 tracking-tight">{proj.title}</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 flex-grow leading-relaxed">
              {proj.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {proj.tech.map((t, i) => (
                <span key={i} className="px-3 py-1 text-xs font-semibold tracking-wide bg-slate-200/50 dark:bg-slate-700/50 text-slate-700 dark:text-slate-200 rounded-md border border-slate-300/50 dark:border-slate-600/50">
                  {t}
                </span>
              ))}
            </div>
            <div className="pt-5 border-t border-slate-200 dark:border-slate-700/50">
              <a href={proj.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                <FiGithub size={18} /> Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
