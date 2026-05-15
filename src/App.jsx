function App() {
  return (
    <div style={styles.page}>

      {/* HERO */}
      <div style={styles.hero}>
        <h1 style={styles.title}>Hi, I'm a Frontend Developer 👋</h1>

        <p style={styles.subtitle}>
          React.js Developer based in UAE. I build modern, responsive web applications.
        </p>

        <div style={styles.buttons}>
          <a href="https://github.com/" target="_blank" style={styles.button}>
            GitHub
          </a>

          <a href="https://vercel.com/" target="_blank" style={styles.button2}>
            Live Projects
          </a>
        </div>
      </div>

      {/* PROJECTS */}
      <div style={styles.projects}>
        <h2>My Projects</h2>

        <div style={styles.projectGrid}>
          <div style={styles.projectCard}>
            <h3>Admin Dashboard</h3>
            <p>React dashboard with API integration, routing, search and dynamic UI.</p>
            <a href="https://github.com/" target="_blank" style={styles.link}>
              View Code
            </a>
          </div>

          <div style={styles.projectCard}>
            <h3>SaaS Landing Page</h3>
            <p>Modern SaaS landing page with hero, features, pricing and responsive design.</p>
            <a href="https://github.com/" target="_blank" style={styles.link}>
              View Code
            </a>
          </div>
        </div>
      </div>

      {/* SKILLS */}
      <div style={styles.skills}>
        <h2>Skills</h2>

        <div style={styles.skillGrid}>
          <span style={styles.skill}>React</span>
          <span style={styles.skill}>JavaScript</span>
          <span style={styles.skill}>HTML</span>
          <span style={styles.skill}>CSS</span>
          <span style={styles.skill}>Git</span>
        </div>
      </div>

      {/* CONTACT */}
      <div style={styles.contact}>
        <h2>Contact Me</h2>
        <p>Email: nusraths123@gmail.com</p>
        <p>Location: UAE</p>

        <a href="https://github.com/" target="_blank" style={styles.contactLink}>
          GitHub
        </a>
      </div>

    </div>
  );
}
const styles = {
  page: {
    fontFamily: "Arial",
    margin: 0,
    scrollBehavior: "smooth"
  },

  hero: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#0f172a",
    color: "white",
    textAlign: "center",
    padding: "20px"
  },

  title: {
    fontSize: "42px",
    marginBottom: "15px"
  },

  subtitle: {
    fontSize: "18px",
    maxWidth: "500px",
    opacity: 0.8,
    marginBottom: "25px"
  },

  buttons: {
    display: "flex",
    gap: "15px"
  },

  button: {
    padding: "10px 18px",
    background: "#3b82f6",
    color: "white",
    textDecoration: "none",
    borderRadius: "6px"
  },

  button2: {
    padding: "10px 18px",
    background: "white",
    color: "#0f172a",
    textDecoration: "none",
    borderRadius: "6px"
  },
  projects: {
    padding: "60px 20px",
    textAlign: "center"
  },

  projectGrid: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    marginTop: "30px"
  },

  projectCard: {
    width: "280px",
    padding: "20px",
    borderRadius: "10px",
    background: "#f1f5f9",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
  },

  link: {
    display: "inline-block",
    marginTop: "10px",
    color: "#3b82f6",
    textDecoration: "none",
    fontWeight: "bold"
  },
  skills: {
    padding: "60px 20px",
    textAlign: "center",
    background: "#f8fafc"
  },

  skillGrid: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    flexWrap: "wrap",
    marginTop: "20px"
  },

  skill: {
    padding: "10px 15px",
    background: "#0f172a",
    color: "white",
    borderRadius: "20px",
    fontSize: "14px"
  },
  contact: {
    padding: "60px 20px",
    textAlign: "center",
    background: "#0f172a",
    color: "white"
  },

  contactLink: {
    color: "#3b82f6",
    textDecoration: "none",
    fontWeight: "bold"
  }
};

export default App;