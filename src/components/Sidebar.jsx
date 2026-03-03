import { useState } from "react";

function Sidebar() {
  const [showContacts, setShowContacts] = useState(false);

  return (
    <aside className={`sidebar ${showContacts ? "active" : ""}`}>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img
            src="/assets/images/profile.png"
            alt="Kartik Pawar"
            width="80"
          />
        </figure>

        <div className="info-content">
          <h1 className="name">Kartik Pawar</h1>
          <p className="title">Cloud & DevOps Engineer</p>
        </div>

        <button
          className="info_more-btn"
          onClick={() => setShowContacts(!showContacts)}
        >
          <span>{showContacts ? "Hide Contacts" : "Show Contacts"}</span>
          <ion-icon name={showContacts ? "chevron-up" : "chevron-down"}></ion-icon>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a
                href="mailto:kartikpawar1290@gmail.com"
                className="contact-link"
              >
                kartikpawar1290@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="call-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+917887832809" className="contact-link">
                +91 7887832809
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time>Sept 08, 2004</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Pune, Maharashtra, India</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a
              href="https://github.com/Kartikpawar143"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a
              href="https://www.linkedin.com/in/kartikpawar876"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a
              href="https://www.instagram.com/k_a_r_t_i_k_321/"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a
              href="https://www.credly.com/users/kartikpawar/badges#credly"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon name="ribbon-outline"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
