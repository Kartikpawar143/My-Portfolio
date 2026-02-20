function Certifications({ active }) {
    const certifications = [
      {
        title: "OCI Certified DevOps Professional",
        issuer: "Oracle",
        date: "September 04, 2025",
        image: "/assets/images/certificates/OCI Certified DevOps Professional.png",
        link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=694D0979B8120CE708AD2016988CB4B0F85B5C6783F15B0D50E091E71460D963",
        description:
          "Validates expertise in implementing and managing DevOps practices on OCI including CI/CD pipelines and cloud-native deployments.",
        badges: ["Oracle Cloud", "DevOps", "CI/CD", "Cloud Infrastructure"],
      },
      {
        title: "Databricks Generative AI",
        issuer: "Databricks",
        date: "September 02, 2025",
        image: "/assets/images/certificates/Databrickks Generative AI.png",
        description:
          "Advanced knowledge of generative AI technologies including LLM deployment and AI integration.",
        badges: ["Generative AI", "Databricks", "LLM"],
      },
      {
        title: "Oracle Certified AI Foundation Associate",
        issuer: "Oracle",
        date: "August 28, 2025",
        image: "/assets/images/certificates/Oracal Certified AI Foundation Associate.png",
        link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=DF73C1F007B684884EF0AFD6DFAE5D23D0D9EEAF5BF04EFCE626EA406378474D",
        description:
          "Foundational knowledge of AI concepts, ML principles, and Oracle AI services.",
        badges: ["Artificial Intelligence", "Machine Learning", "Oracle AI"],
      },
      {
        title: "Introduction To Linux",
        issuer: "Linux Foundation",
        date: "August 06, 2025",
        image: "/assets/images/certificates/Introduction To Linux.png",
        link: "https://www.credly.com/badges/8b80eed0-8d23-45ad-91fd-e83e97abf0e2",
        description:
          "Foundational Linux knowledge including CLI operations, process management and shell scripting.",
        badges: ["Linux", "System Administration", "Command Line"],
      },
    ];
  
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
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="certification-img"
                  />
                </div>
  
                <div className="certification-content-box">
                  {cert.link ? (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer">
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
                  <p className="certification-date">
                    Completed: {cert.date}
                  </p>
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