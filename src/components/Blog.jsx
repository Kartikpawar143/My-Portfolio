function Blog({ active }) {
    const blogs = [
      {
        title: "Jenkins CI/CD End-to-End Documentation",
        link: "https://www.blogger.com/blog/post/edit/419886064966324900/5090536287276626833",
        image: "/assets/images/blog-1.jpg",
        category: "DevOps",
        date: "2025-01-15",
        displayDate: "Jan 15, 2025",
        description:
          "Detailed walkthrough of designing, configuring, and maintaining a complete Jenkins CI/CD pipeline for production-grade deployments.",
      },
      {
        title: "AWS X-Ray Integration Documentation",
        link: "https://www.blogger.com/blog/post/edit/419886064966324900/7956477653133579709",
        image: "/assets/images/blog-2.jpg",
        category: "AWS",
        date: "2025-01-10",
        displayDate: "Jan 10, 2025",
        description:
          "Step-by-step guide to instrumenting services with AWS X-Ray for distributed tracing, performance analysis, and debugging.",
      },
      {
        title: "AWS Global Accelerator & Route 53 Integration Documentation",
        link: "https://www.blogger.com/blog/post/edit/419886064966324900/7431204656025310885",
        image: "/assets/images/blog-3.jpg",
        category: "AWS",
        date: "2024-12-20",
        displayDate: "Dec 20, 2024",
        description:
          "Explains configuring AWS Global Accelerator with Route 53 to achieve low-latency, highly available global traffic routing.",
      },
      {
        title: "Staging Deployment & CI/CD Pipeline Documentation",
        link: "https://www.blogger.com/blog/post/edit/419886064966324900/4237227432955603584",
        image: "/assets/images/blog-4.jpg",
        category: "DevOps",
        date: "2024-12-10",
        displayDate: "Dec 10, 2024",
        description:
          "Covers staging environment design, deployment workflows, and promotion strategies integrated into a robust CI/CD pipeline.",
      },
      {
        title: "CI/CD Pipeline Automation",
        link: "#",
        image: "/assets/images/blog-5.jpg",
        category: "DevOps",
        date: "2024-11-25",
        displayDate: "Nov 25, 2024",
        description:
          "Streamlining software delivery with automated CI/CD pipelines using Jenkins, GitLab CI, and GitHub Actions.",
      },
      {
        title: "Cloud Infrastructure as Code",
        link: "#",
        image: "/assets/images/blog-6.jpg",
        category: "Cloud",
        date: "2024-11-15",
        displayDate: "Nov 15, 2024",
        description:
          "Managing cloud infrastructure efficiently using Terraform, OpenTofu, and Infrastructure as Code principles.",
      },
    ];
  
    return (
      <article className={active ? "blog active" : "blog"}>
        <header>
          <h2 className="h2 article-title">Blog</h2>
        </header>
  
        <section className="blog-posts">
          <ul className="blog-posts-list">
            {blogs.map((blog, index) => (
              <li key={index} className="blog-post-item">
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <figure className="blog-banner-box">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      loading="lazy"
                    />
                  </figure>
  
                  <div className="blog-content">
                    <div className="blog-meta">
                      <p className="blog-category">{blog.category}</p>
                      <span className="dot"></span>
                      <time dateTime={blog.date}>
                        {blog.displayDate}
                      </time>
                    </div>
  
                    <h3 className="h3 blog-item-title">
                      {blog.title}
                    </h3>
  
                    <p className="blog-text">
                      {blog.description}
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </article>
    );
  }
  
  export default Blog;