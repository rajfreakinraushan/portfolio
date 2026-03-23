import Section from './Section';
import { FiMapPin } from 'react-icons/fi';

export default function About() {
  return (
    <Section id="about" className="bg-slate-100/30 dark:bg-slate-800/20">
      <h2 className="section-heading">About Me</h2>
      <div className="glass-panel p-8 md:p-12 text-center md:text-left max-w-4xl mx-auto">
        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
          I am a passionate Computer Science student with a strong interest in building real-world applications and continuously improving my technical skills. I enjoy working across the stack and exploring new technologies to create efficient and user-friendly solutions.
        </p>
        <div className="flex items-center justify-center md:justify-start gap-2 text-primary font-medium">
          <FiMapPin size={20} />
          <span>Bihar, India</span>
        </div>
      </div>
    </Section>
  );
}
