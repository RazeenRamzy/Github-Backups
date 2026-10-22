import React, { useState } from "react";
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";
import './certifications.css';

// Import local images
import certImg1 from "../../Assets/Oracle.jpeg";
import certImg2 from "../../Assets/DevOps-LinkedIn.jpeg";
import certImg3 from "../../Assets/selenium-basics.jpg";
import certImg4 from "../../Assets/java-oop.jpeg";
import certImg5 from "../../Assets/Git-from-scratch.jpeg";
import certImg6 from "../../Assets/DevOps-beginner-certification.pdf";

function Certifications() {
  const [show, setShow] = useState(false);
  const [selectedCert, setSelectedCert] = useState({});

  const handleShow = (cert) => {
    setSelectedCert(cert);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setSelectedCert({});
  };

  const certifications = [
    { title: "Oracle AI Associate", imgSrc: certImg1, detailUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=823EDD5EA779693E20B749FFC917A6C1657A6C2BC7A49489B371B6E8C725AA45" },
    { title: "DevOps Foundations", imgSrc: certImg2, detailUrl: "https://www.linkedin.com/learning/certificates/8e3d711e6cad8c3a374eb3693fe659bd9d9b8a49e863fdfcd205eb95a0b9ac31?trk=public_profile_see-credential" },
    { title: "Selenium Basics", imgSrc: certImg3, detailUrl: "https://olympus1.mygreatlearning.com/course_certificate/RXAVELFE" },
    { title: "Java OOP", imgSrc: certImg4, detailUrl: "https://www.linkedin.com/learning/certificates/df465a47c07dead59ec79ecf9364cbc7b2b3e4245c6b8a58de276a4206133cc3?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bz8FU9XncTrKu604kmOux4A%3D%3D" },
    { title: "Git from Scratch", imgSrc: certImg5, detailUrl: "https://www.linkedin.com/learning/certificates/23d9d45adac998053dc3c934c6fbb3ba0bc17c044d125ba8a84cee67d7be5d9f?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bz8FU9XncTrKu604kmOux4A%3D%3D" },
    { title: "DevOps Certification", imgSrc: certImg6, detailUrl: "https://www.edureka.co/certificates/mycertificate/6d8d8b8fe3534dc4fe2ef6ea03a074b0" }
  ];

  return (
    <Container className="certifications-container">
              <Row className="cert-cards-row">
          {certifications.map((cert, idx) => (
            <Col key={idx} xs={12} sm={6} md={4} className="mb-4">
              <Card className="cert-card" onClick={() => handleShow(cert)}>
                <div className="cert-image-wrapper">
                  <Card.Img variant="top" src={cert.imgSrc} />
                </div>
                <Card.Body className="cert-card-body">
                  <Card.Title className="cert-card-title">{cert.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      <Modal show={show} onHide={handleClose} centered className={show ? "zoomed-modal" : ""}>
        <Modal.Body className="p-0">
          <div className="modal-image-container">
            <img src={selectedCert.imgSrc} alt="Certification" className="zoomed-image" />
            <div className="modal-buttons">
              <Button variant="secondary" onClick={() => window.open(selectedCert.detailUrl, "_blank")}>
                View Details
              </Button>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Certifications;