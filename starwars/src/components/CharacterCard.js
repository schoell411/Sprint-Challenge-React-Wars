import React from "react";
import {Card, CardText, CardBody,
    CardTitle, CardSubtitle, Container, Row, Col} from 'reactstrap';
import "../App.css";
import styled from "styled-components";

const CharacterCard = props => {
    return (
        <Container style = {{width:"25%", height:"60%"}} className="character_card">
            <CardBody>
                <CardTitle className="character_name">{props.name}</CardTitle>
                <CardSubtitle>
                    Bio
                </CardSubtitle>
                <CardText>{props.name} is {props.height}cm tall,weighs {props.mass}kg, with {props.hair_color} hair, and {props.skin_color} skin.
                </CardText>
            </CardBody>
        </Container>
    );
}
export default CharacterCard;