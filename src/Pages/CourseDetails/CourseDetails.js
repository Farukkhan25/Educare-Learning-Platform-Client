import React, { useRef } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

const CourseDetails = () => {
  const detailsData = useLoaderData();
  const { title, details, image } = detailsData;

  // To Print/Download PDF
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <Container fluid="md">
      <Card>
        <Card.Header>
          <div className="d-flex justify-content-between align-items-center p-3">
            <h2>Welcome to Educare online learning!</h2>
            <Button variant="success" onClick={handlePrint}>
              <i class="ri-file-download-line text-white fs-3"></i>
            </Button>
          </div>
        </Card.Header>

        <div ref={componentRef} className="card">
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{details}</Card.Text>
          </Card.Body>
        </div>
        <Card.Footer>
          <>
            <Link to="/checkout">
              <Button variant="primary">Get premium access</Button>
            </Link>
          </>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default CourseDetails;
