function ProjectCard({ title, link, description, subtitle2, stack = [], index }) {
  return (
    <li className="project-item">
      <div className="project-3d-shell">
        <div className="project-3d-card">
          <div className="project-flip-inner">
            <div className="project-face project-front">
              <p className="project-kicker">
                {subtitle2}
                <span>{String(index).padStart(2, "0")}</span>
              </p>

              <h3>{title}</h3>
              <p className="project-description">{description}</p>
            </div>

            <div className="project-face project-back">
              <h4>{title}</h4>
              <p className="project-back-title">Keywords</p>
              <div className="project-tag-list">
                {stack.map((item) => (
                  <span className="project-tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>

              <a className="project-link-btn" href={link} target="_blank" rel="noreferrer">
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ProjectCard;
