import { useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../../images/logo.svg";

/**
 * Represents the Loader component.
 *
 * @component
 * @param {function} setShowLoader
 */
const Loader = ({ setShowLoader }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, [setShowLoader]);

  const styles = {
    loader: {
      minHeight: "100vh",
      display: "grid",
      placeItems: "center",
      background: "var(--bg-color)",
    },
    logo: {
      width: "180px",
      height: "180px",
    },
  };

  return (
    <div style={styles.loader}>
      <motion.img
        src={logo}
        alt="Atish logo"
        style={styles.logo}
        initial={{ opacity: 0, scale: 0.75, y: 10 }}
        animate={{
          opacity: [0, 1, 1, 0],
          scale: [0.75, 1, 1, 0.9],
          y: [10, 0, 0, -8],
        }}
        transition={{ duration: 2.8, ease: "easeInOut" }}
      />
    </div>
  );
};

export default Loader;
