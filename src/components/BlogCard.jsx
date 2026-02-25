function BlogCard({ icon, category, title, description, link }) {
  return (
    <div className="blog-card">
      <div className="blog-card-header">
        <span className="blog-icon">{icon}</span>
        <span className="blog-category">{category}</span>
      </div>
      <h3 className="blog-title">{title}</h3>
      <p className="blog-description">{description}</p>
      <a href={link} className="blog-link" target="_blank" rel="noreferrer noopener">
        Read More
        <span className="arrow">→</span>
      </a>
    </div>
  );
}

export default BlogCard;
