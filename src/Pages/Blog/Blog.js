import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRipple,
} from "mdb-react-ui-kit";

const Blog = () => {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol size="md">
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image hover-overlay"
              >
                <MDBCardImage
                  src="https://miro.medium.com/max/640/1*kIqHWYG2YW-RofhRHS6rgg.jpeg"
                  fluid
                  alt="..."
                />
                <a>
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <MDBCardTitle>What is CORS?</MDBCardTitle>
                <MDBCardText style={{ textAlign: "justify" }}>
                  Cross-Origin Resource Sharing (CORS) is an HTTP-header based
                  mechanism that allows a server to indicate any origins
                  (domain, scheme, or port) other than its own from which a
                  browser should permit loading resources. CORS also relies on a
                  mechanism by which browsers make a "preflight" request to the
                  server hosting the cross-origin resource, in order to check
                  that the server will permit the actual request. In that
                  preflight, the browser sends headers that indicate the HTTP
                  method and headers that will be used in the actual request.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol size="md">
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image hover-overlay"
              >
                <MDBCardImage
                  src="https://i.ytimg.com/vi/M6iYyo25QZo/mqdefault.jpg"
                  fluid
                  alt="..."
                  style={{ height: "215px" }}
                />
                <a>
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <MDBCardTitle>How does the private route work?</MDBCardTitle>
                <MDBCardText style={{ textAlign: "justify" }}>
                  Private Routes in React Router (also called Protected Routes)
                  require a user being authorized to visit a route (read: page).
                  So if a user is not authorized for a specific page, they
                  cannot access it. Authentication in a React application where
                  a user can only access the protected pages when they are
                  authorized (which means in this case being authenticated).
                  Authorization goes beyond authentication though. For example,
                  a user can also have roles and permissions which give a user
                  access to specific areas of the application.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol size="md">
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image hover-overlay"
              >
                <MDBCardImage
                  src="https://d6vdma9166ldh.cloudfront.net/media/images/94a8c68e-94ed-4950-9c49-b7965d111e5a.jpg"
                  fluid
                  alt="..."
                  style={{ height: "210px" }}
                />
                <a>
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <MDBCardTitle>
                  Why are you using firebase? What other options do you have to
                  implement authentication?
                </MDBCardTitle>
                <MDBCardText style={{ textAlign: "justify" }}>
                  Firebase Authentication aims to make building secure
                  authentication systems easy, while improving the sign-in and
                  onboarding experience for end users. It provides an end-to-end
                  identity solution, supporting email and password accounts,
                  phone auth, and Google, Twitter, Facebook, and GitHub login,
                  and more. <br />
                  Usually, authentication by a server entails the use of a user
                  name and password. Other ways to authenticate can be through
                  cards, retina scans, voice recognition, and fingerprints.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol size="md">
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image hover-overlay"
              >
                <MDBCardImage
                  src="https://www.austechmedia.com/content/wp-content/uploads/2022/08/node-js.png"
                  fluid
                  alt="..."
                  style={{ height: "210px" }}
                />
                <a>
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <MDBCardTitle>What is Node? How does Node work?</MDBCardTitle>
                <MDBCardText style={{ textAlign: "justify" }}>
                  Node.js is an open-source backend javascript runtime
                  environment. It is used as backend service where javascript
                  works on the server-side of the application. This way
                  javascript is used on both frontend and backend. Node.js runs
                  on chrome v8 engine which converts javascript code into
                  machine code, it is highly scalable, lightweight, fast, and
                  data-intensive. Working of Node.js: Node.js accepts the
                  request from the clients and sends the response, while working
                  with the request node.js handles them with a single thread. To
                  operate I/O operations or requests node.js use the concept of
                  threads.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
};

export default Blog;