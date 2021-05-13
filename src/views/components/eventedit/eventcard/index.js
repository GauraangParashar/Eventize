import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import CIcon from "@coreui/icons-react";

const EventCard = (props) => {
  return (
    <div>
      <Card>
        <CardImg
          top
          width="100%"
          src="/assets/318x180.svg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">Event name</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Event Organiser
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button>Edit</Button>{" "}
          <Button color="danger">
            Delete <CIcon name="cil-trash" />
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default EventCard;
