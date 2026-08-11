function About() {
    return (
      <article className="about active" data-page="about">
        <header>
          <h2 className="h2 article-title">About Me</h2>
        </header>
  
        <section className="about-text">
          <p>
            <span className="typing-text">Cloud & DevOps Engineer</span>
          </p>
  
          <p>
            I build secure, scalable, and automated cloud infrastructure using AWS and modern DevOps practices.
          </p>

          <p>
            My focus is on CI/CD, containerization, cloud security, monitoring, and automation to deliver reliable applications.
          </p>

          <p>
            B.E. in Information Technology graduate from Savitribai Phule Pune University, with hands-on experience in cloud and DevOps engineering.
          </p>
        </section>

        <section className="about-highlights">
          <h3 className="h3">Focus Areas</h3>
          <ul className="highlight-list">
            <li>Cloud Infrastructure & AWS</li>
            <li>CI/CD & DevSecOps</li>
            <li>Docker & Kubernetes</li>
            <li>Monitoring & Reliability</li>
          </ul>
        </section>
  
        {/* Service Section */}
  
        <section className="service">
          <h3 className="h3 service-title">What I'm Doing</h3>
  
          <ul className="service-list">
            <li className="service-item">
              <div className="service-icon-box">
                <ion-icon name="cloud-outline"></ion-icon>
              </div>
  
              <div className="service-content-box">
                <h4 className="h4 service-item-title">Cloud & Infrastructure</h4>
                <p className="service-item-text">
                  Building scalable and secure cloud environments using AWS
                  and infrastructure automation.
                </p>
              </div>
            </li>
  
            <li className="service-item">
              <div className="service-icon-box">
                <ion-icon name="git-branch-outline"></ion-icon>
              </div>
  
              <div className="service-content-box">
                <h4 className="h4 service-item-title">DevOps & CI/CD</h4>
                <p className="service-item-text">
                  Automating builds, testing, security scanning, and
                  deployments with modern CI/CD tools.
                </p>
              </div>
            </li>
  
            <li className="service-item">
              <div className="service-icon-box">
                <ion-icon name="terminal-outline"></ion-icon>
              </div>
  
              <div className="service-content-box">
                <h4 className="h4 service-item-title">
                  Linux & Automation
                </h4>
                <p className="service-item-text">
                  Managing Linux systems and using Shell scripting for
                  automation and troubleshooting.
                </p>
              </div>
            </li>
  
            <li className="service-item">
              <div className="service-icon-box">
                <ion-icon name="code-slash-outline"></ion-icon>
              </div>
  
              <div className="service-content-box">
                <h4 className="h4 service-item-title">
                  Cloud Security & DevSecOps
                </h4>
                <p className="service-item-text">
                  Integrating security and quality checks into CI/CD pipelines
                  using tools like Trivy and SonarQube.
                </p>
              </div>
            </li>
          </ul>
        </section>
      </article>
    );
  }
  
  export default About;
