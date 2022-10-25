import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Course = ({ courses }) => {
    
    const { title, description, image, category_id } = courses;
    return (
      <div>
        <Col>
          <Card>
            <Card.Img variant="top" src={image} style={{ height: "300px" }} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Link to={`/category/${category_id}`}>
                <Button variant="primary">All topics in this category</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
};

export default Course;