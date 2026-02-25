function Navbar({ activePage, setActivePage }) {
    const pages = ["about", "projects", "resume", "certifications", "blog", "contact"];
  
    return (
      <nav className="navbar">
        <ul className="navbar-list">
          {pages.map((page) => (
            <li key={page} className="navbar-item">
              <button
                className={
                  activePage === page
                    ? "navbar-link active"
                    : "navbar-link"
                }
                onClick={() => setActivePage(page)}
                type="button"
                aria-current={activePage === page ? "page" : undefined}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
  
  export default Navbar;
