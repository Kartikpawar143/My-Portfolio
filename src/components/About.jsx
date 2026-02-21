function About() {
    return (
      <article className="about active" data-page="about">
        <header>
          <h2 className="h2 article-title">About Me</h2>
        </header>
  
        <section className="about-text">
          <p>
            <span className="typing-text">Cloud and DevOps Engineer</span>
          </p>
  
          <p>
            <b>
              🌐 Currently pursuing an Information Technology degree at
              Savitribai Phule Pune University, I thrive on bridging the gap
              between classroom concepts and real-world applications.
              💡 Committed to continuous learning, innovation, and
              problem-solving. 🌟 Let's connect to explore the dynamic
              intersection of academia and IT excellence. Together, let's build
              a future of technological innovation!
            </b>
            <br />
            I enjoy turning complex paths into simple solutions through
            automation.
          </p>
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
                  Offers pay-as-you-go services for compute, storage, databases,
                  AI, ML, IoT, and more across AWS and Azure platforms.
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
                  DevOps integrates and automates software development and IT
                  operations for faster delivery.
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
                  Most programming languages support Linux directly or through
                  community-driven ports.
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
                  The process of creating, building, and maintaining websites
                  and web applications.
                </p>
              </div>
            </li>
          </ul>
        </section>
      </article>
    );
  }
  
  export default About;