import Section from './Section';
import { FiMail, FiPhone, FiLinkedin, FiGithub } from 'react-icons/fi';

export default function Contact() {
  return (
    <Section id="contact" className="bg-slate-100/30 dark:bg-slate-800/20">
      <h2 className="section-heading">Get In Touch</h2>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex-1 space-y-6">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="space-y-4">
            <a href="mailto:rajraushanbaranwal@gmail.com" className="flex items-center gap-4 text-slate-700 dark:text-slate-300 hover:text-primary transition-colors">
              <div className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-sm"><FiMail /></div>
              rajraushanbaranwal@gmail.com
            </a>
            <a href="tel:+910000000000" className="flex items-center gap-4 text-slate-700 dark:text-slate-300 hover:text-primary transition-colors">
              <div className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-sm"><FiPhone /></div>
              +91 70610 69773
            </a>
            <a href="https://linkedin.com/in/rajraushanbaranwal" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-700 dark:text-slate-300 hover:text-primary transition-colors">
              <div className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-sm"><FiLinkedin /></div>
              linkedin.com/in/rajraushanbaranwal
            </a>
            <a href="https://github.com/rajfreakinraushan" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-700 dark:text-slate-300 hover:text-primary transition-colors">
              <div className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-sm"><FiGithub /></div>
              github.com/rajfreakinraushan
            </a>
          </div>
        </div>

        <div className="flex-1">
          <div className="glass-panel p-8 space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Name</label>
              <input type="text" id="name" className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-800 dark:text-white transition-all" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Email</label>
              <input type="email" id="email" className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-800 dark:text-white transition-all" placeholder="your@email.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Message</label>
              <textarea id="message" rows="4" className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-800 dark:text-white transition-all" placeholder="Hello..."></textarea>
            </div>
            <a href="mailto:rajraushanbaranwal@gmail.com" className="block text-center w-full py-3.5 rounded-lg bg-primary hover:bg-sky-500 text-white font-medium transition-colors shadow-sm mt-2">
              Send Message via Email App
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
