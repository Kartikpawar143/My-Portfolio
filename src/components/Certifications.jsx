function Certifications({ active }) {
    const certifications = [
      {
        title: "Claude Code",
        issuer: "Anthropic",
        image: "/assets/images/certificates/Claude Code Certificate.png",
        link: "https://verify.skilljar.com/c/u2w4a7kyjyqv",
        description:
          "Claude Code certification covering AI-assisted development workflows and coding productivity.",
        badges: ["Claude Code", "AI Coding", "Development"],
      },
      {
        title: "Claude",
        issuer: "Anthropic",
        image: "/assets/images/certificates/Claude Certificate.png",
        link: "https://verify.skilljar.com/c/4ifmt9df4grp",
        description:
          "Claude certification covering applied AI capabilities, prompting, and practical usage.",
        badges: ["Claude", "Generative AI", "Prompting"],
      },
      {
        title: "OCI Certified DevOps Professional",
        issuer: "Oracle",
        date: "September 04, 2025",
        image: "/assets/images/certificates/OCI Certified DevOps Professional.png",
        link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=694D0979B8120CE708AD2016988CB4B0F85B5C6783F15B0D50E091E71460D963",
        description:
          "DevOps practices on OCI including CI/CD pipelines and cloud-native delivery.",
        badges: ["Oracle Cloud", "DevOps", "CI/CD", "Cloud Infrastructure"],
      },
      {
        title: "Databricks Generative AI",
        issuer: "Databricks",
        date: "September 02, 2025",
        image: "/assets/images/certificates/Databrickks Generative AI.png",
        description:
          "Generative AI fundamentals with LLM deployment and integration.",
        badges: ["Generative AI", "Databricks", "LLM"],
      },
      {
        title: "Oracle Certified AI Foundation Associate",
        issuer: "Oracle",
        date: "August 28, 2025",
        image: "/assets/images/certificates/Oracal Certified AI Foundation Associate.png",
        link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=DF73C1F007B684884EF0AFD6DFAE5D23D0D9EEAF5BF04EFCE626EA406378474D",
        description:
          "Foundational AI concepts, ML principles, and Oracle AI services.",
        badges: ["Artificial Intelligence", "Machine Learning", "Oracle AI"],
      },
      {
        title: "Introduction To Linux",
        issuer: "Linux Foundation",
        date: "August 06, 2025",
        image: "/assets/images/certificates/Introduction To Linux.png",
        link: "https://www.credly.com/badges/8b80eed0-8d23-45ad-91fd-e83e97abf0e2",
        description:
          "Linux fundamentals covering CLI operations, process management, and shell scripting.",
        badges: ["Linux", "System Administration", "Command Line"],
      },
      {
        title: "Introduction to GitOps",
        issuer: "Linux Foundation",
        date: "July 21, 2025",
        image: "/assets/images/certificates/Introduction to GitOps.png",
        description:
          "GitOps fundamentals covering declarative infrastructure, version-controlled operations, and Kubernetes delivery workflows.",
        badges: ["GitOps", "Kubernetes", "DevOps"],
      },
      {
        title: "Getting Started with OpenTofu",
        issuer: "Linux Foundation",
        date: "July 07, 2025",
        image: "/assets/images/certificates/OpenTofu.png",
        description:
          "OpenTofu fundamentals for infrastructure as code, provisioning, and reusable configuration management.",
        badges: ["OpenTofu", "IaC", "Linux Foundation"],
      },
    ];

    const renderCertificatePreview = (cert) => {
      const preview = cert.image ? (
        <img
          src={cert.image}
          alt={cert.title}
          className="certification-img"
        />
      ) : (
        <div className="certification-pdf-preview" aria-label={`${cert.title} PDF`}>
          <span>PDF</span>
        </div>
      );

      if (!cert.link && !cert.file) {
        return preview;
      }

      return (
        <a
          href={cert.link || cert.file}
          target="_blank"
          rel="noopener noreferrer"
          className="certification-preview-link"
        >
          {preview}
        </a>
      );
    };
  
    return (
      <article className={active ? "certifications active" : "certifications"}>
        <header>
          <h2 className="h2 article-title">Certifications</h2>
        </header>
  
        <section className="certifications-content">
          <div className="certification-list">
            {certifications.map((cert, index) => (
              <div className="certification-item" key={index}>
                <div className="certification-image-box">
                  {renderCertificatePreview(cert)}
                </div>
  
                <div className="certification-content-box">
                  {cert.link || cert.file ? (
                    <a href={cert.link || cert.file} target="_blank" rel="noopener noreferrer">
                      <h4 className="h4 certification-item-title">
                        {cert.title}
                      </h4>
                    </a>
                  ) : (
                    <h4 className="h4 certification-item-title">
                      {cert.title}
                    </h4>
                  )}
  
                  <p className="certification-issuer">{cert.issuer}</p>
                  {cert.date && (
                    <p className="certification-date">
                      Completed: {cert.date}
                    </p>
                  )}
                  <p className="certification-description">
                    {cert.description}
                  </p>
  
                  <div className="certification-badge">
                    {cert.badges.map((badge, i) => (
                      <span className="badge" key={i}>
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </article>
    );
  }
  
  export default Certifications;
