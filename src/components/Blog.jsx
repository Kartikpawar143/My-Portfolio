import BlogCard from "./BlogCard";


function Blog({ active }) {
  const blogs = [
    {
      icon: "☁️",
      category: "AWS",
      title: "AWS X-Ray Integration Documentation",
      description: "Practical guide to instrumenting services with AWS X-Ray for tracing and performance insights.",
      link: "https://medium.com/@kartikpawar1290/aws-x-ray-integration-documentation-6e3ab17871ca"
    },
    {
      icon: "🚀",
      category: "DevOps",
      title: "Jenkins CI/CD End-to-End Documentation",
      description: "End-to-end Jenkins pipeline design, setup, and operational best practices.",
      link: "https://medium.com/@kartikpawar1290/jenkins-ci-cd-end-to-end-documentation-c59cdc135ea4"
    },
    {
      icon: "🌐",
      category: "AWS",
      title: "AWS Global Accelerator & Route 53 Integration",
      description: "Configure Global Accelerator with Route 53 for low-latency global routing.",
      link: "https://medium.com/@kartikpawar1290/aws-global-accelerator-ga-route-53-integration-documentation-948385417aa5"
    },
    {
      icon: "🔧",
      category: "Kubernetes",
      title: "Microservices Application K8s Deployment",
      description: "Deploying microservices on Kubernetes with production-ready practices.",
      link: "https://medium.com/@kartikpawar1290/microservices-application-k8s-deployment-documentation-1134db3176a9"
    },
    {
      icon: "🏗️",
      category: "AWS",
      title: "AWS Multi-Region Backend Worker Infrastructure",
      description: "Multi-region backend workers on ECS with ALB, Redis, and S3.",
      link: "https://medium.com/@kartikpawar1290/aws-multi-region-backend-worker-infrastructure-deployment-guide-for-app-ecs-alb-redis-s3-ef272f409e25"
    },
    {
      icon: "⚙️",
      category: "AWS",
      title: "AWS ECS Fargate Staging Architecture & CI/CD",
      description: "ECS Fargate staging architecture with multi-region CI/CD automation.",
      link: "https://medium.com/@kartikpawar1290/aws-ecs-fargate-staging-architecture-and-github-actions-ci-cd-multi-region-deployment-guide-for-app-6a4525247695"
    }
  ];

  return (
    <article className={active ? "blog active" : "blog"}>
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>
      
      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </article>
  );
}

export default Blog;
