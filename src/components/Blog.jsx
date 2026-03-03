import BlogCard from "./BlogCard";


function Blog({ active }) {
  const blogs = [
    {
      icon: "☁️",
      category: "AWS",
      title: "AWS X-Ray Integration Documentation",
      description: "Step-by-step guide to instrumenting services with AWS X-Ray for distributed tracing, performance analysis, and debugging.",
      link: "https://medium.com/@kartikpawar1290/aws-x-ray-integration-documentation-6e3ab17871ca"
    },
    {
      icon: "🚀",
      category: "DevOps",
      title: "Jenkins CI/CD End-to-End Documentation",
      description: "Detailed walkthrough of designing, configuring, and maintaining a complete Jenkins CI/CD pipeline for production-grade deployments.",
      link: "https://medium.com/@kartikpawar1290/jenkins-ci-cd-end-to-end-documentation-c59cdc135ea4"
    },
    {
      icon: "🌐",
      category: "AWS",
      title: "AWS Global Accelerator & Route 53 Integration",
      description: "Explains configuring AWS Global Accelerator with Route 53 to achieve low-latency, highly available global traffic routing.",
      link: "https://medium.com/@kartikpawar1290/aws-global-accelerator-ga-route-53-integration-documentation-948385417aa5"
    },
    {
      icon: "🔧",
      category: "Kubernetes",
      title: "Microservices Application K8s Deployment",
      description: "Complete guide to deploying microservices applications on Kubernetes with best practices and production-ready configurations.",
      link: "https://medium.com/@kartikpawar1290/microservices-application-k8s-deployment-documentation-1134db3176a9"
    },
    {
      icon: "🏗️",
      category: "AWS",
      title: "AWS Multi-Region Backend Worker Infrastructure",
      description: "Deployment guide for multi-region backend worker infrastructure using ECS, ALB, Redis, and S3 for scalable applications.",
      link: "https://medium.com/@kartikpawar1290/aws-multi-region-backend-worker-infrastructure-deployment-guide-for-app-ecs-alb-redis-s3-ef272f409e25"
    },
    {
      icon: "⚙️",
      category: "AWS",
      title: "AWS ECS Fargate Staging Architecture & CI/CD",
      description: "Multi-region deployment guide for ECS Fargate staging architecture with GitHub Actions CI/CD pipeline automation.",
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
