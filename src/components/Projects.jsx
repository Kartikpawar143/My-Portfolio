import { useState } from "react";
import ProjectCard from "./ProjectCard";

function Projects({ active }) {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Ghar-Contractor",
      link: "https://project-gc.vercel.app/",
      subtitle1: "ReactJS",
      subtitle2: "Web",
      category: "web",
    },
    {
      title: "BoardGame",
      link: "https://github.com/Kartikpawar143/BoardGame",
      subtitle1:
        "DevSecOps CI/CD Pipeline Using K8s, Jenkins, SonarQube & Prometheus",
      subtitle2: "DevSecOps",
      category: "devops",
    },
    {
      title: "Full-Stack Chat App",
      link: "https://github.com/Kartikpawar143/Full-Stack-ChatApp.git",
      subtitle1: "Kubernetes Chat Application",
      subtitle2: "Kubernetes",
      category: "cloud",
    },
    {
      title: "Core Java",
      link:
        "https://github.com/Kartikpawar143/Coding-Related/tree/main/Core%20Java%20codes",
      subtitle1: "Java",
      subtitle2: "Project",
      category: "coding",
    },
    {
      title: "Django Notes App",
      link: "https://github.com/Kartikpawar143/Django-notes-app",
      subtitle1: "Django Notes App",
      subtitle2: "Docker",
      category: "devops",
    },
    {
      title: "Static Website Hosting",
      link: "https://github.com/Kartikpawar143/AWS-S3",
      subtitle1: "AWS-S3",
      subtitle2: "AWS",
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

      {/* Filter Buttons */}
      <div className="project-filters">
        {[
          { key: "all", label: "ALL" },
          { key: "cloud", label: "Cloud" },
          { key: "devops", label: "DevOps" },
          { key: "web", label: "Web Development" },
          { key: "coding", label: "Coding" }
        ].map((cat) => (
          <button
            key={cat.key}
            className={filter === cat.key ? "active" : ""}
            onClick={() => setFilter(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <ul className="project-list">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </ul>
    </article>
  );
}

export default Projects;
