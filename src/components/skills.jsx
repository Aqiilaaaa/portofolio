const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 70 },
  { name: "JavaScript", level: 70 },
  { name: "PHP", level: 85 },
  { name: "MySQL", level: 90 },
  { name: "Figma", level: 70 },
  { name: "Python", level: 80 },
  { name: "Data Analytics", level: 80},
  { name: "Microsoft Word", level: 90},
  { name: "Microsoft Excel", level: 80},
  { name: "Microsoft Project", level: 85},
  { name: "Power BI", level: 80},
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <h3>{skill.name}</h3>

            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>

            <span>{skill.level}%</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;