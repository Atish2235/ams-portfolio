import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import aboutMeImg from "../images/suit.png";
import { useEffect, useState } from "react";

/**
 * Represents the About Me section.
 *
 * @component
 * @param {string} name - The name of the user.
 */

const AboutMe = ({ name }) => {
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const [isLaptop, setIsLaptop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(min-width: 992px) and (max-width: 1366px)"
    );

    const handleChange = (e) => setIsLaptop(e.matches);

    setIsLaptop(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Stagger animation
  const staggerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Paragraph animation
  const paragraphVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="about">
      <div
        className="aboutContainer container"
        style={{ marginTop: "-3rem" }}
      >
        <div className="row">
          
          {/* Image Section */}
          <motion.div
            className="personalImage col-12 col-lg-6 d-flex justify-content-center px-3 px-lg-0 mb-4 mb-lg-0"
            ref={ref}
            style={{ marginTop: isLaptop ? "-2rem" : "0" }}
            initial={{ x: "-10vw", opacity: 0, scale: 0.5 }}
            animate={
              inView
                ? { x: 0, opacity: 1, scale: 1 }
                : { x: "-10vw", opacity: 0, scale: 0.5 }
            }
            transition={{ duration: 0.4, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.img
              src={aboutMeImg}
              alt={name}
              loading="lazy"
              style={{
                width: "min(420px, 88vw)", // desktop stays same; mobile scales safely
                maxWidth: "100%",
                height: "auto",
                aspectRatio: "1 / 1",
                borderRadius: "50%",
                objectFit: "cover",
                objectPosition: "top center",
                display: "block",
                margin: "0 auto",
              }}
            />
          </motion.div>

          {/* Content Section */}
          <div className="personalInfo col-12 col-lg-6">
            <motion.div
              className="contentContainer"
              variants={staggerVariants}
            >
              <motion.h4 variants={paragraphVariants}>
                Nice to meet you! 👋🏻
              </motion.h4>

              <motion.h5 variants={paragraphVariants}>
                I'm Atish Shinde, a Computer Engineer.
              </motion.h5>

              <motion.div
                className="contentDescription"
                variants={staggerVariants}
                initial="initial"
                animate={inView ? "animate" : "initial"}
              >
                <motion.p variants={paragraphVariants}>
                  I’m a passionate{" "}
                  <span style={{ color: "var(--hl-color)" }}>
                    Computer Engineer
                  </span>{" "}
                  with a strong interest in{" "}
                  <span style={{ color: "var(--hl-color)" }}>
                    Data Science
                  </span>
                  ,{" "}
                  <span style={{ color: "var(--hl-color)" }}>
                    Machine Learning
                  </span>{" "}
                  and{" "}
                  <span style={{ color: "var(--hl-color)" }}>
                    Full Stack Development
                  </span>
                  . I enjoy transforming ideas into real-world applications and
                  solving problems using technology.
                </motion.p>

                <br />

                <motion.p variants={paragraphVariants}>
                  I have hands-on experience working with technologies like{" "}
                  <span style={{ color: "var(--hl-color)" }}>
                    React.js
                  </span>
                  ,{" "}
                  <span style={{ color: "var(--hl-color)" }}>
                    Node.js
                  </span>
                  ,{" "}
                  <span style={{ color: "var(--hl-color)" }}>
                    MongoDB
                  </span>{" "}
                  and{" "}
                  <span style={{ color: "var(--hl-color)" }}>
                    Python
                  </span>
                  . I’ve built projects such as a{" "}
                  <span style={{ color: "var(--hl-color)" }}>
                    Poster Selling Website (KArtz)
                  </span>
                  , a{" "}
                  <span style={{ color: "var(--hl-color)" }}>
                    Remote Access Tool
                  </span>
                  , and a{" "}
                  <span style={{ color: "var(--hl-color)" }}>
                    Network Monitoring Dashboard
                  </span>
                  .
                </motion.p>

                <br />

                <motion.p variants={paragraphVariants}>
                  Beyond coding, I enjoy{" "}
                  <span style={{ color: "var(--hl-color)" }}>
                    exploring new places
                  </span>
                  ,{" "}
                  <span style={{ color: "var(--hl-color)" }}>
                    cooking
                  </span>
                  , and continuously learning new technologies. I’m always eager
                  to grow, take on challenges, and build impactful solutions.
                </motion.p>
              </motion.div>

              {/* Button */}
              <NavLink to="/portfolio">
                <Button name="View Portfolio" />
              </NavLink>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;