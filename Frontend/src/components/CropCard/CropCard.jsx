import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import './CropCard.css'

const CropCard = ({ crop, onClick }) => {
  return (
    <Card className='global-card' onClick={onClick}>
      <Card.Img className='card-img' variant="top" src={`https://picsum.photos/200/300?random=${Math.floor(Math.random() * 100)}`} alt={crop.name} />
      <Card.Body>
        <Card.Title>{crop.name}</Card.Title>
        <Card.Text>
          Cultivation: {crop.cultivation}
        </Card.Text>
        <Card.Text>
          Pest Control: {crop.pestControl}
        </Card.Text>
        {/* Add more information if needed */}
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button className='card-button'>Share</Button>
        <Button className='card-button'>Learn More</Button>
      </Card.Body>
    </Card>
  );
};

export default CropCard;
