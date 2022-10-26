import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const details = useLoaderData();
    console.log(details);
    const { title, description, image } = details;
    return (
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Link to='/'>
            <Button variant="primary">All news in this category</Button>
          </Link>
        </Card.Body>
      </Card>
    );
};

export default CourseDetails;