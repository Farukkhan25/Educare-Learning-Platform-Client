import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
  const enrolledData = useLoaderData();
  const { title, details, image, _id } = enrolledData;
    return (
      <div>
        <Container fluid="md">
          <Card>
            <Card.Header>
              <div className="text-center p-3 ">
                <h1>You have successfully enrolled to:  {title}!</h1>
              </div>
            </Card.Header>

            <Card.Body>
              <Card.Img
                variant="top"
                src="https://img.freepik.com/free-vector/congratulations-card-template-with-graduation-cap_1308-5753.jpg?w=900&t=st=1666877779~exp=1666878379~hmac=fe51ce27b7fd8e880842d3ac7641a7bceef75f78b4ac7f88b62a15aeb62d7d86"
              />
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
};

export default Checkout;