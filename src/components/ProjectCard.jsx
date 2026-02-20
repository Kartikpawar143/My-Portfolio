function ProjectCard({ title, link, subtitle1, subtitle2 }) {
  return (
    <li className="project-item active">
      <div className="flip-card">
        <div className="flip-card-inner">

          {/* FRONT */}
          <div className="flip-card-front">
            <h3>{title}</h3>
            <p>{subtitle1}</p>
          </div>

          {/* BACK */}
          <div className="flip-card-back">
            <h3>{title}</h3>
            <p>{subtitle2}</p>

            <ul>
              <li>UI/UX</li>
              <li>Modern Design</li>
              <li>Tailwind CSS</li>
              <li>Kokonut UI</li>
            </ul>

            <a href={link} target="_blank" rel="noreferrer">
              Start today →
            </a>
          </div>

        </div>
      </div>
    </li>
  );
}

export default ProjectCard;