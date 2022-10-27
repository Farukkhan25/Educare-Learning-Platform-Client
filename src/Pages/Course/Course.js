import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Course = ({ courses }) => {
    
    const { title, description, image, _id } = courses;
    return (
      <div>
        <Col>
          <Card style={{ height: "530px" }}>
            <Card.Img variant="top" src={image} style={{ height: "300px" }} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Link to={`/courseDetails/${_id}`}>
                <Button variant="primary">Course Details</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
};

export default Course;