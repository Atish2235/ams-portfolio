import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import Image from "./Image";

const ProjectCard = ({ title, image, color, id }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <Link to={`/portfolio/${title.toLowerCase()}`} className="projectLink">
      <motion.div
        ref={ref}
        initial={{ y: 50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
      >
        <div className="projectCard" style={{ backgroundColor: color }}>
          <div className="textWrap">
            <h3>{title}</h3>
          </div>

          <div className="imageContainer">
            <Image src={image} alt={title} />
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;