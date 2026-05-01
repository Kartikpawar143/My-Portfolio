import { useState } from "react";
import ProjectCard from "./ProjectCard";

function Projects({ active }) {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Cloud-Native CI/CD + GitOps Project",
      link: "https://github.com/Kartikpawar143/Voting-App-Azure-DevOps-Project.git",
      description:
        "End-to-end cloud-native delivery pipeline using Azure DevOps for CI/CD and GitOps-driven Kubernetes deployments for consistent, auditable releases.",
      subtitle2: "DevOps",
      stack: ["Azure DevOps", "GitOps", "K8s", "CI/CD"],
      category: "devops",
    },
    {
      title: "Ghar-Contractor",
      link: "https://project-gc.vercel.app/",
      description: "Contractor discovery platform with clean booking flow and responsive UI.",
      subtitle2: "Product",
      stack: ["React", "UX", "RWD"],
      category: "web",
    },
    {
      title: "BoardGame",
      link: "https://github.com/Kartikpawar143/BoardGame",
      description:
        "Production-style DevSecOps pipeline with automation, security scanning, and observability.",
      subtitle2: "Platform",
      stack: ["K8s", "Jenkins", "Prom"],
      category: "devops",
    },
    {
      title: "Full-Stack Chat App",
      link: "https://github.com/Kartikpawar143/Full-Stack-ChatApp.git",
      description: "Containerized real-time chat app deployed with scalable cloud-native patterns.",
      subtitle2: "Cloud",
      stack: ["Node", "MongoDB", "K8s"],
      category: "cloud",
    },
    {
      title: "Core Java",
      link:
        "https://github.com/Kartikpawar143/Coding-Related/tree/main/Core%20Java%20codes",
      description: "A practical Java collection focused on core concepts, OOP, and coding fundamentals.",
      subtitle2: "Coding",
      stack: ["Java", "OOP", "DSA"],
      category: "coding",
    },
    {
      title: "Django Notes App",
      link: "https://github.com/Kartikpawar143/Django-notes-app",
      description: "Secure notes app with backend logic, auth-ready structure, and container support.",
      subtitle2: "DevOps",
      stack: ["Django", "Docker", "Postgres"],
      category: "devops",
    },
    {
      title: "Static Website Hosting",
      link: "https://github.com/Kartikpawar143/AWS-S3",
      description: "Static hosting workflow with lightweight deployment and global delivery.",
      subtitle2: "Cloud",
      stack: ["S3", "CF", "IAM"],
      category: "cloud",
    },
    {
      title: "AWS VPC Peering and EC2 Instance Connectivity",
      link: "https://github.com/Kartikpawar143/AWS-VPC-Peering-and-EC2-instance-connectivity.git",
      description:
        "Cloud networking project establishing secure communication between EC2 instances in separate VPCs via VPC Peering.",
      subtitle2: "Cloud",
      stack: [
        "VPC",
        "EC2",
        "VPC Peer",
      ],
      category: "cloud",
    },
    {
      title: "Building a React App with Amplify Gen 1, Cognito, and CI/CD",
      link: "https://github.com/Kartikpawar143/Building-a-React-App-with-Amplify-Gen-1-Cognito-and-CI-CD.git",
      description:
        "Cloud-based React application deployed with AWS Amplify, using Amazon Cognito authentication and automated CI/CD.",
      subtitle2: "Cloud",
      stack: ["React", "Amplify", "Cognito", "CI/CD"],
      category: "cloud",
    },
    {
      title: "Bus Ticketing and Payment System Using AWS",
      link: "https://github.com/Kartikpawar143/Bus-Ticketing-and-payment-System-Using-AWS.git",
      description:
        "Cloud-based bus ticket booking platform with payment handling, built on scalable AWS services.",
      subtitle2: "Cloud",
      stack: ["EC2", "S3", "Lambda", "APIGW"],
      category: "cloud",
    },
    {
      title: "AWS Auto Scaling Implementation",
      link: "https://github.com/Kartikpawar143/Auto-Scaling.git",
      description:
        "Cloud infrastructure project that auto-scales EC2 instances to handle variable traffic and maintain high availability.",
      subtitle2: "Cloud",
      stack: [
        "EC2",
        "ASG",
        "ALB",
        "CW",
      ],
      category: "cloud",
    },
    {
      title: "Terraform Modules App Infrastructure",
      link: "https://github.com/Kartikpawar143/Terraform-Modules-App.git",
      description:
        "Infrastructure-as-Code project provisioning cloud resources using reusable Terraform modules for scalable, consistent deployments.",
      subtitle2: "Cloud",
      stack: ["TF", "AWS", "IaC"],
      category: "cloud",
    },
    {
      title: "Configuration Management with Ansible",
      link: "https://github.com/Kartikpawar143/Ansible.git",
      description:
        "Automation project for server configuration, application deployment, and infrastructure management using Ansible playbooks.",
      subtitle2: "DevOps",
      stack: ["Ansible", "YAML", "Linux"],
      category: "devops",
    },
    {
      title: "Kubernetes Voting App with Monitoring",
      link: "https://github.com/Kartikpawar143/k8s-voting-app-with-monitoring.git",
      description:
        "Containerized microservices voting app deployed on Kubernetes with monitoring for application and platform metrics.",
      subtitle2: "DevOps",
      stack: ["K8s", "Prom", "Graf"],
      category: "devops",
    },
    {
      title: "Kubernetes MCP Server with AI",
      link: "https://github.com/Kartikpawar143/Kubernetes-MCP-server-with-AI--Project.git",
      description:
        "Experimental project integrating AI capabilities with Kubernetes through MCP for intelligent DevOps automation.",
      subtitle2: "DevOps",
      stack: ["K8s", "Py", "Docker"],
      category: "devops",
    },
    {
      title: "Django Notes App on Kubernetes",
      link: "https://github.com/Kartikpawar143/Django-Notes-App-K8S.git",
      description:
        "Containerized Django notes application deployed on Kubernetes to demonstrate scalable web deployment.",
      subtitle2: "DevOps",
      stack: ["Django", "K8s", "Docker"],
      category: "devops",
    },
    {
      title: "Expenses Tracker Web Application",
      link: "https://github.com/Kartikpawar143/Expenses-Tracker-WebApp.git",
      description:
        "Web application for tracking and managing daily expenses with an interactive user interface.",
      subtitle2: "Web",
      stack: ["React", "Node", "MongoDB"],
      category: "web",
    },
    {
      title: "Two-Tier Flask Application",
      link: "https://github.com/Kartikpawar143/Two-Tier-Flask-App",
      description:
        "Two-tier Flask web application connected to a backend database for data storage and retrieval.",
      subtitle2: "DevOps",
      stack: ["Flask", "MySQL", "Docker"],
      category: "devops",
    },
    {
      title: "Simple Java Application",
      link: "https://github.com/Kartikpawar143/Simple-Java-App",
      description:
        "Basic Java application demonstrating core programming concepts and clean project structure.",
      subtitle2: "Coding",
      stack: ["Java", "Maven", "Git"],
      category: "coding",
    },
    {
      title: "AI DevOps Challenge",
      link: "https://github.com/Kartikpawar143/AI-DevOps-Challenge",
      description:
        "Project exploring practical use of AI tools to improve DevOps workflows and automation tasks.",
      subtitle2: "DevOps",
      stack: ["AI", "K8s", "DevOps"],
      category: "devops",
    },
    {
      title: "DevOps Project - Swiggy Clone Deployment",
      link: "https://github.com/Kartikpawar143/DevOps-Project-Swiggy",
      description:
        "DevOps implementation focused on containerization and Kubernetes deployment of a Swiggy-style application.",
      subtitle2: "DevOps",
      stack: ["Docker", "K8s", "AWS"],
      category: "devops",
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
