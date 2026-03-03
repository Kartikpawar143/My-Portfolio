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
            I build cloud-native systems and DevOps pipelines that ship reliable releases. My focus is on automation, observability, and secure delivery.
          </p>

          <p>
            Currently pursuing a B.E. in Information Technology in Pune at Savitribai Phule Pune University, I blend academic foundations with hands-on work.
          </p>
        </section>

        <section className="about-highlights">
          <h3 className="h3">Focus Areas</h3>
          <ul className="highlight-list">
            <li>Cloud infrastructure and cost-aware architecture</li>
            <li>CI/CD pipelines with security and quality gates</li>
            <li>Containerized delivery on Kubernetes and Docker</li>
            <li>System reliability, monitoring, and incident readiness</li>
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
                <h4 className="h4 service-item-title">Cloud Services</h4>
                <p className="service-item-text">
                  Designing scalable cloud systems with cost-aware architecture
                  on AWS and Azure.
                </p>
              </div>
            </li>
  
            <li className="service-item">
              <div className="service-icon-box">
                <ion-icon name="git-branch-outline"></ion-icon>
              </div>
  
              <div className="service-content-box">
                <h4 className="h4 service-item-title">DevOps</h4>
                <p className="service-item-text">
                  CI/CD automation, security gates, and release workflows that
                  keep teams shipping confidently.
                </p>
              </div>
            </li>
  
            <li className="service-item">
              <div className="service-icon-box">
                <ion-icon name="terminal-outline"></ion-icon>
              </div>
  
              <div className="service-content-box">
                <h4 className="h4 service-item-title">
                  Linux & Shell Scripting
                </h4>
                <p className="service-item-text">
                  Linux administration and shell scripting for reliable
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
                  Web Development & Coding
                </h4>
                <p className="service-item-text">
                  Practical web engineering for dashboards, tooling, and
                  internal platforms.
                </p>
              </div>
            </li>
          </ul>
        </section>
      </article>
    );
  }
  
  export default About;
