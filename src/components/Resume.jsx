import { useEffect, useRef } from "react";

function Resume({ active }) {
  const skillRefs = useRef([]);

  useEffect(() => {
    if (active) {
      skillRefs.current.forEach((bar) => {
        const width = bar.getAttribute("data-width");
        bar.style.width = "0";
        setTimeout(() => {
          bar.style.transition = "width 1.2s ease";
          bar.style.width = width;
        }, 200);
      });
    }
  }, [active]);

  const skills = [
    { name: "Web Development & Coding", width: "65%" },
    { name: "DevOps", width: "80%" },
    { name: "AWS Cloud", width: "90%" },
    { name: "Linux & Shell-Scripting", width: "75%" },
  ];

  return (
    <article className={active ? "resume active" : "resume"}>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      {/* Education */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">📘</div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Savitribai Phule Pune University
            </h4>
            <span>2022 — 2026</span>
            <p className="timeline-text">
              Pursuing BE in Information Technology.<br />CGPA - 8.12
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Kai.Sau.G.F.Patil Jr. College
            </h4>
            <span>2020 — 2022</span>
            <p className="timeline-text">Percentage - 77.83%</p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Shri Mahavir English Medium School
            </h4>
            <span>2020</span>
            <p className="timeline-text">Percentage - 62%</p>
          </li>
        </ol>
      </section>

      {/* Experience */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">💼</div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Neural Arc</h4>
            <span>Nov 2025 — Present</span>
            <p className="timeline-text">Cloud DevOps Engineer</p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Coding Saavy</h4>
            <span>Dec 2024 — Jan 2025</span>
            <p className="timeline-text">
              Internship on Web Development.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Borgward Technology India Pvt Ltd
            </h4>
            <span>Aug 2024 — Jan 2025</span>
            <p className="timeline-text">
              Internship on Cloud DevOps, Linux, Shell-Scripting.
            </p>
          </li>
        </ol>
      </section>

      {/* Skills */}
      <section className="skill">
        <h3 className="h3 skills-title">My Skills</h3>

        <ul className="skills-list content-card">
          {skills.map((skill, index) => (
            <li key={index} className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">{skill.name}</h5>
                <span>{skill.width}</span>
              </div>
              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  data-width={skill.width}
                  ref={(el) => (skillRefs.current[index] = el)}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Download CV */}
      <div className="download-container">
  <a
    href="/assets/resume/Kartik_Pawar_IT.pdf"
    download
    className="download-btn"
  >
    ⬇ Download CV
  </a>
</div>
    </article>
  );
}

export default Resume;