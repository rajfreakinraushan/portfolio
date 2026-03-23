import Section from './Section';

const education = [
  {
    degree: 'B.Tech CSE',
    institution: 'Lovely Professional University',
    score: 'CGPA: 8.4',
    year: 'Present'
  },
  {
    degree: 'Intermediate',
    institution: 'Higher Secondary',
    score: '84%',
    year: ''
  },
  {
    degree: 'Matriculation',
    institution: 'Secondary School',
    score: '93%',
    year: ''
  }
];

export default function Education() {
  return (
    <Section id="education">
      <h2 className="section-heading">Education</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {education.map((edu, idx) => (
          <div key={idx} className="glass-panel p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:-translate-y-1 transition-transform duration-300">
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{edu.degree}</h3>
              <p className="text-slate-600 dark:text-slate-300 text-lg">{edu.institution}</p>
            </div>
            <div className="text-left md:text-right mt-2 md:mt-0">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold rounded-full border border-primary/20">
                {edu.score}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
