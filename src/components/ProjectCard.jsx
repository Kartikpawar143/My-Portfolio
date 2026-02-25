function ProjectCard({ title, link, description, subtitle2, stack = [], index }) {
  return (
    <li className="project-card">
      <div className="project-card-header">
        <p className="project-kicker">
          {subtitle2}
          <span>{String(index).padStart(2, "0")}</span>
        </p>
        <h3 className="project-title">{title}</h3>
      </div>

      <p className="project-description">{description}</p>

      <div className="project-tag-list">
        {stack.map((item) => (
          <span className="project-tag" key={item}>
            {item}
          </span>
        ))}
      </div>

      <a className="project-link-btn" href={link} target="_blank" rel="noreferrer noopener">
        View Project
      </a>
    </li>
  );
}

export default ProjectCard;
