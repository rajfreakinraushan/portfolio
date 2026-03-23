import Section from './Section';
import { FiDownload, FiExternalLink } from 'react-icons/fi';

export default function Home() {
  return (
    <Section id="home" className="min-h-screen flex items-center pt-24">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Open to Opportunities
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
            Hi, I'm <span className="text-primary">Raj Raushan</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6 font-medium">
            Full Stack Developer | Problem Solver | Tech Enthusiast
          </h2>

          <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed text-lg">
            I build scalable and efficient web applications using modern technologies, focusing on clean design and real-world problem solving.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <a href="#projects" className="px-6 py-3 rounded-lg bg-primary hover:bg-sky-500 text-white font-medium transition-colors shadow-sm hover:shadow">
              View Projects
            </a>
            {/* View Link (Replace YOUR_FILE_ID with your actual Google Drive File ID) */}
            <a href="https://drive.google.com/file/d/1C5zECK0nocVSq4TadWoKAyQ2S5TAjRtu/view?usp=sharing" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-700 dark:text-slate-200 font-medium transition-all shadow-sm hover:shadow">
              View Resume <FiExternalLink />
            </a>
            {/* Download Link (Uses Google Drive export direct-download format) */}
            <a href="https://drive.google.com/uc?export=download&id=1C5zECK0nocVSq4TadWoKAyQ2S5TAjRtu" className="p-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-700 dark:text-slate-200 font-medium transition-all shadow-sm hover:shadow" title="Download Resume">
              <FiDownload size={20} />
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white dark:border-slate-800 shadow-xl overflow-hidden bg-slate-200 dark:bg-slate-700">
            {/* Keeping the avatar from previous generation */}
            <img src="/avatar.jpeg" alt="Raj Raushan" className="w-full h-full object-cover" />
          </div>
        </div>

      </div>
    </Section>
  );
}
