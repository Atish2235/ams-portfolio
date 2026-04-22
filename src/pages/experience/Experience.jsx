// filepath: c:\Users\91935\Desktop\Portfolio-Atish\my-portfolio\src\pages\experience\Experience.jsx
import { motion } from "framer-motion";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";

const internships = [
  {
    company: "Fox Aircomm",
    role: "Web Developer Intern",
    duration: "07 Oct 2025 - 07 Jan 2026",
    location: "India",
    highlights: [
      "Developed a CRM-based web application for lead management and business operations.",
      "Built responsive UI using React.js and managed state with Redux.",
      "Designed backend services using Node.js and integrated MySQL database.",
      "Collaborated using GitHub for version control and team-based development.",
      "Optimized UI/UX and improved application performance.",
    ],
  },
  {
    company: "STFT Finance",
    role: "Market Research & Web Development Intern",
    duration: "25 Jun 2025 - 25 Aug 2025",
    location: "India",
    highlights: [
      "Conducted market research to analyze customer needs and competitor strategies.",
      "Assisted in developing a lead management system aligned with business requirements.",
      "Worked on UI/UX improvements to enhance user experience.",
      "Coordinated between business and technical teams for project alignment.",
      "Applied Agile methodology for efficient development and delivery.",
    ],
  },
];

const Experience = () => {
  return (
    <section className="experience" style={{ color: "var(--text-color)" }}>
      <div className="container" style={{ marginTop: "2rem" }}>
        <PageHeader title="Experience" description="Internship experience" />

        <div className="row" style={{ marginTop: "1.5rem", rowGap: "1rem" }}>
          {internships.map((item, index) => (
            <div className="col-12" key={`${item.company}-${item.role}`}>
              <motion.article
                initial={{ y: 18, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.35, delay: index * 0.1 }}
                style={{
                  border: "1px solid var(--grey)",
                  borderRadius: "12px",
                  padding: "1rem 1.2rem",
                  background: "var(--bg2-color)",
                  color: "var(--text-color)",
                }}
              >
                <h4 style={{ marginBottom: "0.35rem", color: "var(--text-color)" }}>{item.role}</h4>
                <p style={{ marginBottom: "0.5rem", color: "var(--hl-color)" }}>
                  {item.company} • {item.location}
                </p>
                <p style={{ marginBottom: "0.8rem", opacity: 0.85, color: "var(--text-color)" }}>
                  {item.duration}
                </p>

                <ul style={{ margin: 0, paddingLeft: "1.1rem" }}>
                  {item.highlights.map((point) => (
                    <li key={point} style={{ marginBottom: "0.45rem", color: "var(--text-color)" }}>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.article>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Experience;