import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import "./CropCard.css";
import { Link } from "react-router-dom";

const CropCard = ({ crop }) => {
  return (
    <Card className="global-card">
      <Card.Img
        className="card-img"
        variant="top"
        src={crop.image_url}
        alt={crop.name}
      />
      <Card.Body>
        <Card.Title className="card-title">{crop.name}</Card.Title>
      </Card.Body>

      <Card.Body>
        <Link to={`/crop/${crop.id}`}>
          <Button className="card-button">Learn More</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CropCard;
