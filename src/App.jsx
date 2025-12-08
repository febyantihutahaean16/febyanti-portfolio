import "./App.css";

function App() {
  return (
    <div className="page">
      <header className="top-header">
        <div className="identity">
          <h1 className="name">Febyanti Hutahaean</h1>
          <p className="role">Final-year Information Technology Student</p>
        </div>
        <div className="contact">
          <a href="mailto:febyanti.hth.93@gmail.com">
            febyanti.hth.93@gmail.com
          </a>
          <span>·</span>
          <span>Toba, Indonesia</span>
          <span>·</span>
          <a
            href="https://linkedin.com/in/febyanti-hutahaean"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <span>·</span>
          <a
            href="https://github.com/febyantihutahaean16"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </header>

      <main className="container">
        {/* PROFILE */}
        <section className="card">
          <h2 className="section-title">Profile</h2>
          <p className="text">
            Skilled in developing web applications using{" "}
            <strong>PHP/Laravel</strong>, including database design, CRUD module
            implementation, authentication, and the use of{" "}
            <strong>HTML, CSS, JavaScript</strong>, and SQL-based databases (
            <strong>MySQL, PostgreSQL, SQL Server</strong>). Accustomed to
            working in teams, communicating actively, and following technical
            procedures with discipline. Currently a final-year Information
            Technology student at Del Institute of Technology (GPA 3.57/4.00)
            with experience using <strong>WordPress</strong> to build and manage
            simple websites, and with a strong interest in deepening skills in
            WordPress development, modern page builders, and e-commerce
            workflows. Possesses a curious and proactive mindset, is ready to
            learn WooCommerce and related technologies, and is highly motivated
            to contribute as a{" "}
            <strong>WordPress Intern / IT Engineer Intern</strong> at
            Envolutions in a collaborative remote working environment.
          </p>
        </section>

        <div className="grid-two">
          {/* EDUCATION */}
          <section className="card">
            <h2 className="section-title">Education</h2>
            <div className="item">
              <div className="item-header">
                <div>
                  <h3 className="item-title">
                    Associate Degree in Information Technology
                  </h3>
                  <p className="item-subtitle">
                    Del Institute of Technology · Laguboti, Indonesia
                  </p>
                </div>
                <span className="item-date">Aug 2023 – Present</span>
              </div>
              <p className="meta">Current GPA: 3.57 / 4.00</p>
            </div>
          </section>

          {/* SKILLS */}
          <section className="card">
            <h2 className="section-title">Skills</h2>
            <div className="skills-group">
              <h3>Web &amp; Backend Development</h3>
              <p>
                PHP, Laravel, WordPress, HTML, CSS, JavaScript, Inertia.js,
                React, Node.js
              </p>
            </div>
            <div className="skills-group">
              <h3>Programming Languages</h3>
              <p>C#, Java, PHP, JavaScript, Python, C, Dart, Swift</p>
            </div>
            <div className="skills-group">
              <h3>Data &amp; Databases</h3>
              <p>
                SQL Server / SSMS, MySQL, PostgreSQL, SQL, Power BI, Jupyter
                Notebook, Google Colab
              </p>
            </div>
            <div className="skills-group">
              <h3>Mobile Development</h3>
              <p>Android Studio, Flutter, Xcode, Core Location</p>
            </div>
            <div className="skills-group">
              <h3>Tools &amp; Platforms</h3>
              <p>
                Git, GitHub, Postman, Firebase API, Selenium, Katalon, Avium,
                Figma, AWS EC2, Ubuntu, CentOS, XAMPP, Laragon
              </p>
            </div>
          </section>
        </div>

        {/* EXPERIENCE */}
        <section className="card">
          <h2 className="section-title">Experience</h2>

          <div className="item">
            <div className="item-header">
              <div>
                <h3 className="item-title">
                  Apple Developer Academy – Foundation Program
                </h3>
                <p className="item-subtitle">Participant · Batam, Indonesia</p>
              </div>
              <span className="item-date">Jun 2025 – Jul 2025</span>
            </div>
            <ul className="list">
              <li>
                Joined an intensive iOS development bootcamp using Swift, Xcode,
                and the Apple ecosystem.
              </li>
              <li>
                Strengthened problem-solving and UI/UX understanding through
                Challenge Based Learning (CBL) and Apple Human Interface
                Guidelines (HIG) in a small team setting.
              </li>
            </ul>
          </div>

          <div className="item">
            <div className="item-header">
              <div>
                <h3 className="item-title">
                  Teaching Assistant for Discrete Mathematics
                </h3>
                <p className="item-subtitle">Del Institute of Technology</p>
              </div>
              <span className="item-date">Jan 2025 – Jun 2025</span>
            </div>
            <ul className="list">
              <li>
                Assisted in preparing materials and exercises on logic, set
                theory, and basic algorithms.
              </li>
              <li>
                Guided students through problem-solving sessions and provided
                academic support.
              </li>
            </ul>
          </div>

          <div className="item">
            <div className="item-header">
              <div>
                <h3 className="item-title">Teaching Assistant for English I</h3>
                <p className="item-subtitle">Del Institute of Technology</p>
              </div>
              <span className="item-date">Aug 2024 – Dec 2024</span>
            </div>
            <ul className="list">
              <li>
                Helped prepare teaching materials and assignments for English I.
              </li>
              <li>
                Supported students in improving basic English communication
                skills.
              </li>
            </ul>
          </div>
        </section>

        {/* ORGANIZATIONAL EXPERIENCE */}
        <section className="card">
          <h2 className="section-title">Organizational Experience</h2>

          <div className="item">
            <div className="item-header">
              <div>
                <h3 className="item-title">Matriculation Committee</h3>
                <p className="item-subtitle">Del Institute of Technology</p>
              </div>
              <span className="item-date">Aug 2025</span>
            </div>
            <ul className="list">
              <li>
                Taught basic programming and laptop usage to new students.
              </li>
              <li>
                Helped freshmen adapt to the learning culture and academic
                environment.
              </li>
            </ul>
          </div>

          <div className="item">
            <div className="item-header">
              <div>
                <h3 className="item-title">
                  Cadre Formation Committee for Class of 2024
                </h3>
                <p className="item-subtitle">Del Institute of Technology</p>
              </div>
              <span className="item-date">Oct 2024</span>
            </div>
            <ul className="list">
              <li>
                Organized introduction and sharing sessions to help new students
                adapt academically and socially.
              </li>
            </ul>
          </div>

          <div className="item">
            <div className="item-header">
              <div>
                <h3 className="item-title">
                  Program Cinta Almamater (PCA) Committee
                </h3>
                <p className="item-subtitle">Del Institute of Technology</p>
              </div>
              <span className="item-date">Aug 2024</span>
            </div>
            <ul className="list">
              <li>
                Supported new students in adapting to dormitory and campus life
                through orientation activities.
              </li>
            </ul>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="card">
          <h2 className="section-title">Projects</h2>

          <div className="item">
            <div className="item-header">
              <div>
                <h3 className="item-title">
                  Audit Mutu Internal (AMI) Information System – SPM IT Del
                </h3>
                <p className="item-subtitle">
                  Laravel · REST API · Authentication · MySQL
                </p>
              </div>
              <span className="item-date">Aug 2025 – Present</span>
            </div>
            <ul className="list">
              <li>
                Developing an Internal Audit Information System using Laravel,
                integrated with the CIS API for secure login and data
                synchronization.
              </li>
              <li>
                Responsible for backend development, API integration, and system
                functionality testing within the Quality Assurance Unit (SPM) IT
                Del.
              </li>
            </ul>
          </div>

          <div className="item">
            <div className="item-header">
              <div>
                <h3 className="item-title">IT Del Student Affairs System</h3>
                <p className="item-subtitle">
                  Laravel Inertia · CIS API · MySQL · Web Testing
                </p>
              </div>
              <span className="item-date">Feb 2025 – Jun 2025</span>
            </div>
            <ul className="list">
              <li>
                Developed a web-based Student Affairs System using Laravel
                Inertia, integrated with the CIS API for centralized
                authentication.
              </li>
              <li>
                Designed and analyzed the database structure and implemented a
                dynamic scholarship registration form similar to Google Forms.
              </li>
              <li>
                Contributed to web testing using Selenium and Katalon, and
                supported interface testing through Avium.
              </li>
            </ul>
          </div>

          <div className="item">
            <div className="item-header">
              <div>
                <h3 className="item-title">
                  Information Website for Yayasan Pendidikan Anak Rumah Damai
                </h3>
                <p className="item-subtitle">
                  HTML · CSS · PHP (basic) · MySQL
                </p>
              </div>
              <span className="item-date">Mar 2024 – Jun 2024</span>
            </div>
            <ul className="list">
              <li>
                Led the development of an information website using a semi-Scrum
                methodology.
              </li>
              <li>
                Contributed to backend, database, dashboard, and functional
                diagrams.
              </li>
              <li>
                Communicated directly with the client to ensure project
                requirements were met.
              </li>
            </ul>
          </div>

          <details className="more-projects">
            <summary>Show more projects</summary>

            <div className="item item-compact">
              <div className="item-header">
                <div>
                  <h3 className="item-title">
                    Classification of Glioma Brain Tumors Using Random Forest
                    &amp; MLP
                  </h3>
                  <p className="item-subtitle">
                    Python · scikit-learn · Flask API · Machine Learning
                  </p>
                </div>
                <span className="item-date">Oct 2025 – Present</span>
              </div>
            </div>

            <div className="item item-compact">
              <div className="item-header">
                <div>
                  <h3 className="item-title">
                    Toura – Travel Assistant SaaS Website (Design Concept)
                  </h3>
                  <p className="item-subtitle">
                    Figma · UI/UX · Business Model Canvas
                  </p>
                </div>
                <span className="item-date">Aug 2025 – Present</span>
              </div>
            </div>

            <div className="item item-compact">
              <div className="item-header">
                <div>
                  <h3 className="item-title">Burn Cal App</h3>
                  <p className="item-subtitle">Swift · Xcode · Core Location</p>
                </div>
                <span className="item-date">Jun 2025 – Jul 2025</span>
              </div>
            </div>

            <div className="item item-compact">
              <div className="item-header">
                <div>
                  <h3 className="item-title">
                    AWS EC2 Website Deployment – "Kelompok 13 SISKA
                    Introduction"
                  </h3>
                  <p className="item-subtitle">
                    AWS EC2 · Linux Server · Static Website
                  </p>
                </div>
                <span className="item-date">Apr 2025 – Jun 2025</span>
              </div>
            </div>

            <div className="item item-compact">
              <div className="item-header">
                <div>
                  <h3 className="item-title">
                    Event Organizer Management System
                  </h3>
                  <p className="item-subtitle">Java FXML · Apache NetBeans</p>
                </div>
                <span className="item-date">Nov 2024 – Dec 2024</span>
              </div>
            </div>

            <div className="item item-compact">
              <div className="item-header">
                <div>
                  <h3 className="item-title">
                    Credit Default Risk Analysis for a Bank
                  </h3>
                  <p className="item-subtitle">
                    Python · Google Colab · Power BI
                  </p>
                </div>
                <span className="item-date">Oct 2024 – Dec 2024</span>
              </div>
            </div>

            <div className="item item-compact">
              <div className="item-header">
                <div>
                  <h3 className="item-title">
                    Sotrify – Music Player Application
                  </h3>
                  <p className="item-subtitle">
                    Flutter · Firebase API · Android Studio
                  </p>
                </div>
                <span className="item-date">Oct 2024 – Dec 2024</span>
              </div>
            </div>

            <div className="item item-compact">
              <div className="item-header">
                <div>
                  <h3 className="item-title">Digital Library System</h3>
                  <p className="item-subtitle">
                    PostgreSQL · SQL · Triggers &amp; Constraints ·
                    Documentation
                  </p>
                </div>
                <span className="item-date">Oct 2024 – Dec 2024</span>
              </div>
            </div>

            <div className="item item-compact">
              <div className="item-header">
                <div>
                  <h3 className="item-title">
                    Attendance System with Facial Recognition
                  </h3>
                  <p className="item-subtitle">Python · OpenCV</p>
                </div>
                <span className="item-date">Sep 2024 – Dec 2024</span>
              </div>
            </div>

            <div className="item item-compact">
              <div className="item-header">
                <div>
                  <h3 className="item-title">
                    Shop Management System for U.D. Antony
                  </h3>
                  <p className="item-subtitle">C · Visual Studio Code</p>
                </div>
                <span className="item-date">Nov 2023 – Dec 2023</span>
              </div>
            </div>

            <div className="item item-compact">
              <div className="item-header">
                <div>
                  <h3 className="item-title">
                    Information Website for UD Antoni
                  </h3>
                  <p className="item-subtitle">HTML5 · CSS</p>
                </div>
                <span className="item-date">Nov 2023 – Dec 2023</span>
              </div>
            </div>
          </details>
        </section>

        <footer className="footer">
          <p>© {new Date().getFullYear()} Febyanti Hutahaean · Portfolio</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
