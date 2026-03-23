import Section from './Section';
import { 
  SiCplusplus, SiJavascript, SiC, SiPhp, 
  SiReact, SiHtml5, 
  SiNodedotjs, SiExpress, 
  SiMongodb, SiMysql, 
  SiGit, SiGithub, SiVite, SiLinux 
} from 'react-icons/si';
import { FaCss3Alt, FaCode } from 'react-icons/fa';

const categories = [
  {
    title: 'Programming',
    skills: [
      { name: 'C++', icon: SiCplusplus, color: 'text-blue-500' },
      { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
      { name: 'C', icon: SiC, color: 'text-blue-600' },
      { name: 'PHP', icon: SiPhp, color: 'text-indigo-400' },
    ]
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', icon: SiReact, color: 'text-sky-400' },
      { name: 'HTML5', icon: SiHtml5, color: 'text-orange-500' },
      { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500' },
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
      { name: 'Express.js', icon: SiExpress, color: 'text-gray-400' },
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
      { name: 'MySQL', icon: SiMysql, color: 'text-blue-400' },
    ]
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', icon: SiGit, color: 'text-orange-500' },
      { name: 'GitHub', icon: SiGithub, color: 'text-slate-800 dark:text-white' },
      { name: 'VS Code', icon: FaCode, color: 'text-blue-500' },
      { name: 'Vite', icon: SiVite, color: 'text-yellow-500' },
      { name: 'Linux', icon: SiLinux, color: 'text-yellow-500' },
    ]
  }
];

const softSkills = ['Team Collaboration', 'Leadership', 'Effective Communication', 'Adaptability'];

export default function TechStack() {
  return (
    <Section id="tech">
      <h2 className="section-heading">Tech Stack & Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
        {categories.map((cat, idx) => (
          <div key={idx} className="glass-panel p-6">
            <h3 className="text-xl font-semibold mb-6 text-slate-800 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2 tracking-tight">{cat.title}</h3>
            <div className="grid grid-cols-3 gap-4">
              {cat.skills.map((skill, sIdx) => {
                const Icon = skill.icon;
                return (
                  <div key={sIdx} className="flex flex-col items-center gap-3">
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700/50 hover:scale-110 hover:shadow transition-all duration-300 cursor-pointer">
                      <Icon className={`w-8 h-8 ${skill.color}`} />
                    </div>
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400 text-center">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      
      <div className="glass-panel p-8 max-w-4xl mx-auto">
        <h3 className="text-xl font-semibold mb-6 text-slate-800 dark:text-white text-center tracking-tight">Soft Skills</h3>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {softSkills.map((skill, idx) => (
            <span key={idx} className="px-5 py-2.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors cursor-default">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
