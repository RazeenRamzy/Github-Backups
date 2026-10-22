import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/bk-img4.png";
import myImgBack from "../../Assets/bk-img-back.jpg"; // Add your back image

function Home2() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }} data-aos="fade-right">
              <span className="primary-header"> About Me </span>
            </h1>
            <p className="home-about-body" data-aos="fade-up">
              <br />
                Hi there! I'm a <i className="primary-header">Software Engineer</i> with a passion for tackling challenges and turning ideas into reality.
                <br /><br />
                I specialize in the latest <i className="primary-header">tech innovations</i> to build practical and impactful solutions.
                <br /><br />
                From creating <i className="primary-header">user-friendly websites</i> to developing <i className="primary-header">robust applications</i>, I bring digital projects to life with expertise and dedication.
                <br /><br />
                With my knowledge in <i className="primary-header">modern tech stacks</i>, I deliver seamless and engaging user experiences.
                <br /><br />
                Committed to <i className="primary-header">continuous learning</i> and improvement, I strive to push boundaries and achieve excellence in every project.
              </p>
          </Col>
          <Col md={4} className="myAvtar">
            <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    data-aos="fade-left"
                    src={myImg}
                    className="img-fluid"
                    alt="avatar"
                  />
                </div>
                <div className="flip-card-back">
                  <img
                    data-aos="fade-left"
                    src={myImgBack}
                    className="img-fluid"
                    alt="avatar back"
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;