import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.svg";
import NavLinks from "./NavLinks";

/**
 * Represents the header component containing the logo and navigation links.
 *
 * @component
 */

const Header = () => {
  return (
    <header
      className="header"
      style={{
        paddingTop: 0,
        paddingBottom: "8px",
        paddingInline: "clamp(14px, 4vw, 28px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <NavLink to="/" aria-label="Go to home">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 0.5, type: "spring" }}
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="logo"
            src={logo}
            alt="Atish Shinde's Logo"
            style={{
              width: "clamp(60px, 16vw, 84px)",
              height: "auto",
              display: "block",
            }}
          />
        </motion.div>
      </NavLink>
      <NavLinks />
    </header>
  );
};

export default Header;
