import { useState } from "react";
import ProjectCard from "./ProjectCard";

function Projects({ active }) {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Ghar-Contractor",
      link: "https://project-gc.vercel.app/",
      description: "Contractor discovery platform with clean booking flow and responsive UI.",
      subtitle2: "Product",
      stack: ["React", "UX", "Responsive"],
      category: "web",
    },
    {
      title: "BoardGame",
      link: "https://github.com/Kartikpawar143/BoardGame",
      description:
        "Production-style DevSecOps pipeline with automation, security scanning, and observability.",
      subtitle2: "Platform",
      stack: ["Kubernetes", "Jenkins", "Prometheus"],
      category: "devops",
    },
    {
      title: "Full-Stack Chat App",
      link: "https://github.com/Kartikpawar143/Full-Stack-ChatApp.git",
      description: "Containerized real-time chat app deployed with scalable cloud-native patterns.",
      subtitle2: "Cloud",
      stack: ["Node.js", "MongoDB", "Kubernetes"],
      category: "cloud",
    },
    {
      title: "Core Java",
      link:
        "https://github.com/Kartikpawar143/Coding-Related/tree/main/Core%20Java%20codes",
      description: "A practical Java collection focused on core concepts, OOP, and coding fundamentals.",
      subtitle2: "Coding",
      stack: ["Core Java", "OOP", "DSA"],
      category: "coding",
    },
    {
      title: "Django Notes App",
      link: "https://github.com/Kartikpawar143/Django-notes-app",
      description: "Secure notes app with backend logic, auth-ready structure, and container support.",
      subtitle2: "DevOps",
      stack: ["Django", "Docker", "PostgreSQL"],
      category: "devops",
    },
    {
      title: "Static Website Hosting",
      link: "https://github.com/Kartikpawar143/AWS-S3",
      description: "Static hosting workflow with lightweight deployment and global delivery.",
      subtitle2: "Cloud",
      stack: ["AWS S3", "CloudFront", "IAM"],
      category: "cloud",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <article className={active ? "projects active" : "projects"}>
      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>

      <p className="project-intro">
        Selected builds across web, cloud, and DevOps with a focus on reliability,
        clean delivery, and measurable impact.
      </p>

      <div className="project-filters">
        {[
          { key: "all", label: "All" },
          { key: "cloud", label: "Cloud" },
          { key: "devops", label: "DevOps" },
          { key: "web", label: "Web" },
          { key: "coding", label: "Coding" },
        ].map((cat) => (
          <button
            key={cat.key}
            type="button"
            className={filter === cat.key ? "active" : ""}
            onClick={() => setFilter(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <p className="project-count">{filteredProjects.length} projects</p>

      <ul className="project-list">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} index={index + 1} />
        ))}
      </ul>
      {filteredProjects.length === 0 && (
        <p className="project-empty">No projects found for this category.</p>
      )}
    </article>
  );
}

export default Projects;
