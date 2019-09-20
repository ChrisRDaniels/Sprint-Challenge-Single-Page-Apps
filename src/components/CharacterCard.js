import React from "react";
import {Card, CardImg, CardText, CardBody,CardTitle,Row,Col} from 'reactstrap';

 function CharacterCard(props) {
  

return (
    <div className= "character-list" keys={props.id}>
      <Card>
        <Row>
          <Col sm="6" md="8" lg="12">
           <CardImg top width="30%" src={props.image} alt="Character Avatar" />
           <CardBody className="card-body">
           <CardTitle>Name: {props.name}</CardTitle>
           <CardText>Status: {props.status}</CardText>
           <CardText>Species: {props.species}</CardText>      
        </CardBody>
       </Col>
      </Row>
         </Card>
    </div>
  );
};


export default CharacterCard;