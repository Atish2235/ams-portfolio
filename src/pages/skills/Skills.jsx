// filepath: c:\Users\91935\Desktop\Portfolio-Atish\my-portfolio\src\pages\skills\Skills.jsx
import { motion } from "framer-motion";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";

const skillGroups = [
  {
    title: "Programming Languages",
    items: ["JavaScript", "Python", "Java", "C/C++"],
  },
  {
    title: "Frontend",
    items: ["React.js", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "MongoDB", "MySQL"],
  },
  {
    title: "Data Science / ML",
    items: ["NumPy", "Pandas", "Scikit-learn", "Matplotlib"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Postman", "VS Code"],
  },
];

const Skills = () => {
  return (
    <section className="skills" style={{ color: "var(--text-color)" }}>
      <div className="container" style={{ marginTop: "2rem" }}>
        <PageHeader title="Skills" description="Technologies I work with" />

        <div className="row" style={{ marginTop: "1.5rem", rowGap: "1rem" }}>
          {skillGroups.map((group, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={group.title}>
              <motion.article
                initial={{ y: 18, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                style={{
                  border: "1px solid var(--grey)",
                  borderRadius: "12px",
                  padding: "1rem",
                  height: "100%",
                  background: "var(--bg2-color)",
                  color: "var(--text-color)",
                }}
              >
                <h5 style={{ color: "var(--hl-color)", marginBottom: "0.75rem" }}>{group.title}</h5>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {group.items.map((item) => (
                    <span
                      key={item}
                      style={{
                        border: "1px solid var(--grey)",
                        borderRadius: "999px",
                        padding: "0.35rem 0.7rem",
                        fontSize: "0.9rem",
                        color: "var(--text-color)",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Skills;