export default function Skills() {
  const skills = [
    { name: 'React', icon: '⚛️' },
    { name: 'JavaScript', icon: '💛' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Node.js', icon: '🟩' },
    { name: 'CSS/HTML', icon: '🎨' },
    { name: 'Git', icon: '📦' },
  ];

  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Technical Expertise</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="glass-card skill-item">
              <i>{skill.icon}</i>
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
