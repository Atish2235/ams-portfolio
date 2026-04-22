import { useState, useEffect } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BiGitRepoForked } from "react-icons/bi";
import SocialIcons from "./SocialIcons";

/**
 * Represents the footer section of the website.
 *
 * @component
 */

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // State to hold GitHub information
  const [gitHubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null,
  });

  useEffect(() => {
    // Fetch GitHub repository information
    fetch("https://api.github.com/Atish2235/")
      .then((res) => res.json())
      .then((json) => {
        const { stargazers_count, forks_count } = json;
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count,
        });
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <footer>
      {/* Social icons */}
      <SocialIcons />

      {/* GitHub repository link */}
      <a className="footer-link" href="https://github.com/Atish2235/">
        <span>
          <AiOutlineStar /> {gitHubInfo.stars} <BiGitRepoForked />
          {gitHubInfo.forks} - Give this project a star!
        </span>
        <p>
          <span>▷</span> Designed and built by Atish Shinde &copy; {currentYear}
        </p>
        <p>All views and work are my own</p>
      </a>
    </footer>
  );
};

export default Footer;
