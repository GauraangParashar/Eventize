import React from "react";
import { Container, Row, Col } from "reactstrap";
import EventCard from "./eventcard";

const Documents = () => {
  return (
    <>
      <div className="container">
        <Container>
          <Row>
            <Col lg="3" md="3" sm="6" xs="6">
              <EventCard />
            </Col>
            <Col lg="3" md="3" sm="6" xs="6">
              <EventCard />
            </Col>
            <Col lg="3" md="3" sm="6" xs="6">
              <EventCard />
            </Col>
            <Col lg="3" md="3" sm="6" xs="6">
              <EventCard />
            </Col>
            <Col lg="3" md="3" sm="6" xs="6">
              <EventCard />
            </Col>
            <Col lg="3" md="3" sm="6" xs="6">
              <EventCard />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Documents;
