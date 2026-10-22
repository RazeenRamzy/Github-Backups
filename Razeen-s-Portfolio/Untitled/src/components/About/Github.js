import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Col, Container } from "react-bootstrap";

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Github() {
  const [username] = useState("RazeenRamzy");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/events/public`);
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [username]);

  return (
    <Container>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <h1 style={{ paddingBottom: "20px" }} data-aos="fade-right">
          How much <span className="primary-header">Code</span> I Write
        </h1>
        <div className="gitContainer" data-aos="fade-up">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <GitHubCalendar
              username={username}
              color="#1872B6"
              blockSize={15}
              blockMargin={5}
              fontSize={16}
            />
          )}
        </div>
      </Row>
      <Row>
        <Col md={12} className="home-about-social">
          <h1 data-aos="fade-right">
            <span className="primary-header">CONNECT </span> WITH ME
          </h1>
          <p data-aos="fade-left">Feel free to connect with me</p>
          <ul className="home-about-social-links" data-aos="fade-up">
            <li className="social-icons">
              <a
                href="https://github.com/RazeenRamzy"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
                aria-label="github"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/RazeenRamzy"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
                aria-label="twitter"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:razeenramzy555@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
                aria-label="email"
              >
                <AiOutlineMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/razeen-ramzy-7b386121b"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/razeenramzy/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
                aria-label="instagram"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Github;
