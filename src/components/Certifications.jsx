import Section from './Section';
import { FiAward, FiExternalLink } from 'react-icons/fi';

const certs = [
  { name: 'Full Stack Web Development', provider: 'CipherSchools', link: 'https://www.cipherschools.com/certificate/preview?id=689f18a7ab59d1f6d495287d' },
  { name: 'Cloud Computing', provider: 'NPTEL', link: 'https://drive.google.com/file/d/1M1dmCA2BIPrAM1rklUbeqhptQrljBNhE/view?usp=sharing' },
  { name: 'The Bits and Bytes of Computer Networking', provider: 'Google', link: 'https://drive.google.com/file/d/1gipbm7hiV1XA7jigdTamNWuHbUh2HM-B/view?usp=sharing' },
  { name: 'TCP/IP Advanced', provider: 'University of Colorado', link: 'https://drive.google.com/file/d/1YJJ_ylsJ3b8fZ-NpwpyAGo7zBZ7HmXip/view?usp=sharing' }
];

export default function Certifications() {
  return (
    <Section id="certifications" className="bg-slate-100/30 dark:bg-slate-800/20">
      <h2 className="section-heading">Certifications & Achievements</h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {certs.map((cert, idx) => (
          <div key={idx} className="glass-panel p-6 flex items-start gap-4 hover:-translate-y-1 transition-transform duration-300">
            <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
              <FiAward size={24} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">{cert.name}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">{cert.provider}</p>
              <a href={cert.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary hover:text-sky-500 transition-colors">
                View Certificate <FiExternalLink size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto glass-panel p-8">
        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-700 pb-2">Key Achievements</h3>
        <ul className="space-y-4 text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-3">
            <span className="text-primary mt-1">✦</span>
            <div>
              <span className="font-semibold text-slate-800 dark:text-white">NPTEL Elite Rank</span> – Cloud Computing
              <a href="https://drive.google.com/file/d/1M1dmCA2BIPrAM1rklUbeqhptQrljBNhE/view?usp=sharing" className="ml-3 text-xs font-semibold text-primary hover:underline">View Certificate</a>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary mt-1">✦</span>
            <div>
              <span className="font-semibold text-slate-800 dark:text-white">Solved 150+ problems</span> on LeetCode
            </div>
          </li>
        </ul>
      </div>
    </Section>
  );
}
